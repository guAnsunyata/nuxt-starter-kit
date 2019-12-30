module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // parser: 'babel-eslint'
    ecmaVersion: 2018,
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    camelcase: 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'never'],
    'standard/no-callback-literal': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        tabWidth: 2,
        arrowParens: 'always',
        singleQuote: true,
        trailingComma: 'es5',
        htmlWhitespaceSensitivity: 'ignore'
      }
    ],
    '@typescript-eslint/member-ordering': 'error'
  },
}
