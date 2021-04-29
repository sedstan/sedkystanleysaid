/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  devServer: {
    proxy: 'http://localhost:8080'
  },
  pluginOptions: {
    apollo: {
      lintGQL: true
    }
  }
}
