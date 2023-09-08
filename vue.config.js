const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://202.199.6.229:8090',
        changeOrigin: true,
      },
      '/block/*': {
        target: 'http://202.199.6.229:8081', // 替换为第二个接口的目标地址
        changeOrigin: true,
      },
    },
  },
})
