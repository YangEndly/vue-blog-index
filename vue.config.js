module.exports = {
  // baseUrl  type:{string} default:'/'
  // 将部署应用程序的基本URL
  // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
  // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.
  // assetsPublicPath: './',
  baseUrl: "./",
  assetsDir: "static",

  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

  // outputDir: 'dist',

  // pages:{ type:Object,Default:undfind }
  /*
      构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
      个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
      的字符串，
      注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
    */
  // multi-page 多页面配置
  // pages: {
  //     index: {
  //         // page 的入口
  //         entry: 'src/index/main.js',
  //         // 模板来源
  //         template: 'public/index.html',
  //         // 在 dist/index.html 的输出
  //         filename: 'index.html',
  //         // 当使用 title 选项时，
  //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //         title: 'Index Page',
  //         // 在这个页面中包含的块，默认情况下会包含
  //         // 提取出来的通用 chunk 和 vendor chunk。
  //         chunks: ['chunk-vendors', 'chunk-common', 'index']
  //     },
  //     // 当使用只有入口的字符串格式时，
  //     // 模板会被推导为 `public/subpage.html`
  //     // 并且如果找不到的话，就回退到 `public/index.html`。
  //     // 输出文件名会被推导为 `subpage.html`。
  //     subpage: 'src/subpage/main.js'
  // }
  pages: {
    index: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/modules/index/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/index.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'index.html',
      // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
      // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'index page',
      // 包含的模块，可选项
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    manage: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/modules/manage/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/manage.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'manage.html',
      // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
      // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'manage page',
      // 包含的模块，可选项
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // 只有entry属性时，直接用字符串表示模块入口
    // client: 'src/modules/client/client.js'
  },
  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: false,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项

  devServer: {
    port: 9000, // 端口号
    host: "0.0.0.0",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // disableHostCheck: true,//webpack4.0 开启热更新
    // proxy: {
    //   [config.ROOT]: {    //将www.exaple.com印射为/apis
    //     target: config.PROXYROOT,  // 接口域名
    //     secure: false,  // 如果是https接口，需要配置这个参数
    //     changeOrigin: true,  //是否跨域
    //     pathRewrite: {
    //       [`^${config.ROOT}`]: ''   //需要rewrite的
    //     }
    //   }
    // }
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      "/apis": {
        target: "http://www.blog.test/api/v2", // 需要请求的地址
        // target: process.env.VUE_APP_URL,   // 需要请求的地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/apis": "" // 替换target中的请求地址，也就是说，在请求的时候，url用'/proxy'代替'http://ip.taobao.com'
        }
      }
      // '/foo': {
      //     target: '<other_url>'
      // }
      // 配置多个代理
    }
  }
};
