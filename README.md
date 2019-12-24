# nuxt-starter-kit

> An example project with minimum practical features for nuxt

## Features

#### Fully customized router configuration
remove nuxt opinionated route-page mapping configurations.<br>
see implementation [flexible-routes](https://github.com/guAnsunyata/nuxt-starter-kit/tree/master/src/nuxt-modules/flexible-routes)

#### Fully customized vuex store configuration
using vuex in classic mode without deprecating warnings.<br>
see implementation [classic-store](https://github.com/guAnsunyata/nuxt-starter-kit/tree/master/src/nuxt-modules/classic-store)

#### Dynamic vuex module registering
keep large scale app loading module smartly on demand.

```typescript
// `route.ts`
import { CreateRouteFunction } from '@/nuxt-modules/flexible-routes/module'

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

### Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

```

### VS Code Setting (ESLint + Prettier)
We configurate rules in `eslintrc.js` including Prettier rules.
Since VS Code 1.41.0 we can use only ESLint extension to fulfill all Prettier extension in VS code.

#### Extensions
- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier Formatter for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (for code formatting excluding .js, .ts, and .vue)

#### Update VSCode setting
- Enable ESLint for formatting
`setting.json`
```
"eslint.format.enable": true
```

- Disable Prettier for js related files
`setting.json`
```
"prettier.disableLanguages": [
    "javascript",
    "javascriptreact",
    "typescript",
],
```

- Set ESLint as default
`cmd + shift + P` search `Format Docuement With` and select `Configure Default Formatter`.
<br>Now you can use `shift + alt + f` to format code anytime you want without saving file.

- Configure lint rules only in one place (eslintrc.js).
For prettier rules:
`eslintrc.js`
```
// for prettier rules
rules: {
  "prettier/prettier": [
    "error",
    {
      "semi": false,
      "tabWidth": 2,
      "arrowParens": "always",
      "singleQuote": true,
      "trailingComma": "es5",
      "htmlWhitespaceSensitivity": "ignore"
    }
  ],
  // ...
}
```
