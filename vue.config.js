module.exports = {
  devServer: {
    port: '8081',
    proxy: {
      '/mobile-quotes': {
        target: 'http://localhost:8080/mobile-quotes/',
        ws: true,
        changeOrigin: true
      }
    }
  },

  publicPath: '/mobile-quotes/',
  outputDir: 'cordova_app/www',
  transpileDependencies: ['dynamic-form-components'],
  
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
}
