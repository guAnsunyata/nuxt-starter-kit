# nuxt-starter-kit

> An example project with minimum practical features for nuxt

## Features

### Features

#### Fully customized router configuration
remove nuxt opinionated route-page mapping configurations.<br>
see implementation [flexible-routes](https://github.com/guAnsunyata/nuxt-starter-kit/tree/master/src/modules/flexible-routes)

#### Fully customized vuex store configuration
using vuex in classic mode without deprecating warnings.<br>
see implementation [classic-store](https://github.com/guAnsunyata/nuxt-starter-kit/tree/master/src/modules/classic-store)

#### Dynamic vuex module registering
keep large scale app loading module smartly on demand.

```typescript
// `route.ts`
import { CreateRouteFunction } from '@/modules/flexible-routes/module'

export const createRoutes: CreateRouteFunction = (resolve) => {
  return [
    {
      path: '/',
      component: resolve('@/views/example/Index.vue'),
      meta: {
        // load vuex modules by page dependencies
        requiredStoreModules: [
          {
            moduleName: 'example',
            moduleNamespace: 'example-home', // multiple module instances by giving different namespace
          }
        ],
        // or just requiredStoreModules: ['example'],
      },
    },
  ]
}
```

### Basic Setting with tiny adjustment
- TypeScript 3.7 (runtime, tsconfig, eslint)
- Storybook (WIP: more addons and showcases)
- ESlint / Prettier / StyleLint
- Pre-commit / Husky
- PWA (WIP: customized cache strategy

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

```
