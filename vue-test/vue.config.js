const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查  
  lintOnSave: false
  // chainWebpack: config => {
  //   // 修复HMR
  //   config.resolve.symlinks(true);
  
  // }
})
