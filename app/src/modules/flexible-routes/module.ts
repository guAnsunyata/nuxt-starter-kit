/**
 * @author zhong666<aa900031@gmail.com>
 */

import fs from 'fs'
import path from 'path'
import { Module } from '@nuxt/types'
import { NuxtRouteConfig } from '@nuxt/types/config/router'

const FlexableRoutes: Module<Options> = function(options) {
  const _options = Object.assign(
    {},
    {
      path: 'src/routes',
      functionName: 'createRoutes',
      modifyMode: 'REPLACE',
    },
    options
  )

  const resolvedPath = path.resolve(this.options.rootDir!, _options.path)
  const pathState = fs.lstatSync(resolvedPath)

  let watchRule = ''
  const functions: CreateRouteFunction[] = []

  if (pathState.isDirectory()) {
    fs.readdirSync(resolvedPath).forEach((filePath) => {
      const _module = require(path.resolve(resolvedPath, filePath))
      if (_module && typeof _module[_options.functionName] === 'function') {
        functions.push(_module[_options.functionName])
      }
    })

    watchRule = path.join(resolvedPath, './*')
  } else if (pathState.isFile()) {
    const _module = require(resolvedPath)
    if (_module && typeof _module[_options.functionName] === 'function') {
      functions.push(_module[_options.functionName])
    }

    watchRule = resolvedPath
  }

  // 建立 監聽路由檔案
  this.nuxt.hook('build:before', () => {
    // 複寫建立路由 function
    this.nuxt.options.build.createRoutes = () => []

    if (!watchRule) {
      return
    }

    if (!Array.isArray(this.options.watch)) {
      this.options.watch = []
    }

    this.options.watch.push(watchRule)
  })

  // 使用 extendRoutes 建立 routes
  this.nuxt.hook(
    'build:extendRoutes',
    (routes: NuxtRouteConfig[], resolve: NuxtRouteResolve) => {
      const newRoutes = functions.reduce((acc, fn) => {
        const results = fn(resolve)
        if (results) {
          if (Array.isArray(results)) {
            acc.splice(acc.length - 1, 0, ...results)
          } else {
            acc.push(results)
          }
        }

        return acc
      }, [] as NuxtRouteConfig[])

      switch (_options.modifyMode) {
        case 'REPLACE':
          routes.splice(0, routes.length, ...newRoutes)
          break

        case 'APPEND':
          routes.splice(routes.length - 1, 0, ...newRoutes)
          break
      }
    }
  )
}
// node_modules/@nuxt/types/config/router.d.ts
export type NuxtRouteResolve = (...pathSegments: string[]) => any
export type CreateRouteFunction = (
  resovle: NuxtRouteResolve
) => NuxtRouteConfig[]

export interface Options {
  path: string
  functionName: string
  modifyMode: 'REPLACE' | 'APPEND'
}

export default FlexableRoutes
