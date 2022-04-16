const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //解决跨域请求方法一
  // devServer:{
  //   proxy:'http://localhost:5001'
  // }

  // 方法二
  devServer:{
    // 注意！！！两个请求的地址要写到一个peoxy里
    //可以灵活配置是否走代理
    proxy:{
      // 设置请求头
      '/info':{
        target:'http://localhost:5001',   //请求地址
        pathRewrite:{'^/info':''},
        //ws:true  //用于支持websocket
        //change Origin：true   //用于控制请求头中host值，是否欺骗目标服务器
      },
      // 设置请求头
      '/demo':{
        target:'http://localhost:5002',   //请求地址
        pathRewrite:{'^/demo':''},  //将请求地址中自定的请求头删去，因为代理服务器默认会把请求头拼接到请求地址中
        //ws:true  //用于支持websocket
        //change Origin：true   //用于控制请求头中host值，是否欺骗目标服务器
      }
    },

  }


})
