module.exports = ({ config }) => {
  // handle scss resource in vue file
  const scssRule = {
    test: /\.scss$/,
    oneOf: [
      {
        resourceQuery: /\?vue/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }

  // Handle js resource
  // const jsRule = {
  //   test: /\.js$/,
  //   use: [{ loader: 'babel-loader' }]
  // }

  // handle ts resource in vue file
  const tsRule = {
    test: /\.ts$/,
    use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }]
  }

  config.module.rules.push(tsRule, scssRule)
  config.resolve.extensions.push('.ts')
  return config
}
