import { CreateRouteFunction } from '@/modules/flexible-routes/module'

export const createRoutes: CreateRouteFunction = (resolve) => {
  return [
    {
      path: '/',
      component: resolve('@/views/Example.vue'),
    },
  ]
}
