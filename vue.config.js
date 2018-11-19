const mock = require('./mock');
const LessPluginFun = require('less-plugin-functions');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    // 部署应用包时的基本 URL
    // 这个值也可以被设置为空字符串('') 或是相对路径('./')， 这样所有的资源都会被链接为相对路径， 这样打出来的包可以被部署在任意路径， 也可以用在类似 Cordova hybrid 应用的文件系统中。
    baseUrl: '/',
    assetsDir: 'src/assets',

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: null,
        before(app) {
            mock(app);
        }
    },
    // 当使用 pages 选项构建多页面应用时。
    pages: {
        index: {
            // page 的入口
            entry: 'src/pages/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        //  subpage: 'src/subpage/main.js',
        demo: {
            entry: 'src/pages/demo/main.js',
            template: 'public/index.html',
            filename: 'demo.html',
            title: 'Demo Page',
            chunks: ['chunk-vendors', 'chunk-common', 'demo']
        }
    },

    // 如果这个值是一个对象， 则会通过 webpack - merge 合并到最终的配置中。
    configureWebpack: {
        // 不要遵循/打包这些模块，而是在运行时从环境中请求他们
        // 如果不想让它把某个文件打包进去，那么可以使用externals来进行过滤，这样他就不会把这个文件打包进去，保证require仍然有效，但是一定要注意externals的使用格式
        externals: {
            jquery: 'jQuery',
            echarts: 'echarts',
            moment: 'moment'
        },
        // 附加插件列表
        plugins: [
            new StyleLintPlugin({
                context: 'src',
                files: ['**/*.less', '**/*.s?(a|c)ss', '**/*.vue']
            })
        ]
    },

    lintOnSave: true,

    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            less: {
                plugins: [new LessPluginFun()]
            },
        },
        //     // 启用 CSS modules for all css / pre-processor files.
        //     modules: false
    }
};
