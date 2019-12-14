import { Plugin as NuxtPlugin } from '@nuxt/types'
import registerPageModule from '@/middleware/page-module-register'

const syncPageModuleRegisterMiddleware = (async (context) => {
  await registerPageModule(context)
}) as NuxtPlugin

export default syncPageModuleRegisterMiddleware
