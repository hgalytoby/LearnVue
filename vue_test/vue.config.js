// 這是官方的說明。 https://cli.vuejs.org/zh/config/#pages
/*
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板來源
      template: 'public/index.html',
      // 在 dist/index.html 的輸出
      filename: 'index.html',
      // 當使用 title 選項時，
      // template 中的 title 標籤需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在這個頁面中包含的塊，默認情況下會包含
      // 提取出來的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 當使用只有入口的字符串格式時，
    // 模板會被推導為 `public/subpage.html`
    // 並且如果找不到的話，就回退到 `public/index.html`。
    // 輸出文件名會被推導為 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
}
*/

module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // entry: 'src/main_test_config.js',
        },
    },
    // 關閉語法檢查
    lintOnSave: false,

    // 開啟代理伺服器 (方法1)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },
    // 開啟代理伺服器 (方法2)
    devServer: {
        proxy: {
            '/api1': {
                target: 'http://localhost:5000',
                pathRewrite: {
                    '^/api1': '',
                },
                ws: true, // 用於支援 websocket
                changeOrigin: true // 用於控制請求投中的 Host 值
            },
            '/api2': {
                target: 'http://localhost:5001',
                pathRewrite: {
                    '^/api2': '',
                },
            },
        }
    }
}