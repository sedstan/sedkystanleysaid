/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
  },
  chainWebpack: config => {
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
  },
}
