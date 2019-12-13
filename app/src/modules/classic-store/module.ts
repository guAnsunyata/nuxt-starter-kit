/**
 * @author zhong666<aa900031@gmail.com>
 */

import path from 'path'
import { Module } from '@nuxt/types'
import { StoreOptions } from 'vuex'

const ClassicStore: Module<Options> = function(options) {
  const _options: Options = Object.assign(
    {},
    {
      functionName: 'createStoreOptions',
    },
    options
  )

  const resolvedPath =
    this.options.rootDir && _options.path
      ? path.resolve(this.options.rootDir!, _options.path)
      : undefined

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.js'),
    fileName: 'store.js',
    options: {
      resolvedPath: resolvedPath
        ? path
            .relative(this.options.buildDir!, resolvedPath)
            .replace(/\/+|\\+/g, '/')
        : undefined,
      functionName: _options.functionName,
    },
  })

  this.nuxt.hook('build:before', () => {
    this.nuxt.options.store = true
  })
}

export interface Options {
  path?: string
  functionName: string
}

export type CreateStoreOptionsFunction<S> = () => StoreOptions<S>

export default ClassicStore
