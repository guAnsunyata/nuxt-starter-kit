import { CreateRouteFunction } from '@/nuxt-modules/flexible-routes/module'

export const createRoutes: CreateRouteFunction = (resolve) => {
  return [
    {
      path: '/',
      component: resolve('@/views/example/Index.vue'),
      meta: {
        requiredStoreModules: ['example'],
      },
    },
  ]
}
