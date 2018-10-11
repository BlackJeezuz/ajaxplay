// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'camelcase': 'off',
    'indent': 'warn',
    'no-tabs': 'warn',
    'eol-last': 'warn',
    'no-multi-spaces': 'warn',
    'no-console': 'warn',
    'no-mixed-spaces-and-tabs': 'warn'
  }
}
