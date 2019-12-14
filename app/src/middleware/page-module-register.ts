import { registerModule } from '@/store/module-register'

const registerPageModule = async function({ app, store, route }) {
  // load global module on demand.
  const { requiredStoreModules = [] } = route.meta[route.meta.length - 1] || {}

  await Promise.all(
    requiredStoreModules.map((requiredModule: RequiredModule) => {
      if (typeof requiredModule === 'string') {
        return registerModule(app, store, requiredModule, requiredModule)
      }

      const { moduleName, moduleNamespace } = requiredModule

      return registerModule(app, store, moduleName, moduleNamespace)
    })
  )
}

export default registerPageModule

type RequiredModule = ModuleManifest | string

interface ModuleManifest {
  moduleName: string
  moduleNamespace: string
}
