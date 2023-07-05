/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['dylan/vue'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['demo']
      }
    ]
  }
};
