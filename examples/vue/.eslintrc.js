/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['dylanjs/vue'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['demo']
      }
    ]
  }
}
