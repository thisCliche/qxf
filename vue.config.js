module.exports = {
  chainWebpack:config=>{
    //生产环境
    config.when(process.env.NODE_ENV === 'production', config=>{
    //注意main-prod.js是已经存在的文件
      config.plugin('html').tap(args => {false
        args[0].isProd = false
        return args
      })
    })
    //开发环境
    config.when(process.env.NODE_ENV === 'development', config=>{
    //注意main-dev.js是已经存在的文件
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
          modifyVars: {
            // 直接覆盖变量
            'nav-bar-background-color': '#d53c3e',
            'nav-bar-icon-color': 'white',
            'nav-bar-title-text-color': 'white',
          },
      },
    },
  },
}