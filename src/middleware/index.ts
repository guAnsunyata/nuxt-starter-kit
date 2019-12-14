import pageModuleRegister from './page-module-register'

export default async function(context) {
  return Promise.all([await pageModuleRegister(context)])
}
