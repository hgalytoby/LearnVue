# 筆記

## 腳手架文件結構
	├── node_modules 
	├── public
	│   ├── favicon.ico: 標籤 Logo
	│   └── index.html: 主頁面
	├── src
	│   ├── assets: 存放靜態資源
	│   │   └── logo.png
	│   │── component: 存放組件
	│   │   └── HelloWorld.vue
	│   │── App.vue: 彙總所有組件
	│   │── main.js: 入口文件
	├── .gitignore: git 版本控制忽略的設定
	├── babel.config.js: babel 的設定文件
	├── package.json: 應用包設定文件 
	├── README.md: 應用描述文件
	├── package-lock.json: 包版本控制文件
	
## 關於不同版本的Vue
- 1.vue.js 與 vue.runtime.xxx.js 的區別: 
    - 1.vue.js 是完整版的 Vue，包含:核心功能 + 模板解析器。
    - 2.vue.runtime.xxx.js 是運行版的 Vue，只包含:核心功能; 沒有模板解析器。
- 2.因爲vue.runtime.xxx.js 沒有模板解析器，所以不能使用 template 這個設置項，需要使用 render 函數接收到的 createElement 函數去指定具體內容。

## vue.config.js配置文件
- 1. 使用 vue inspect > output.js 可以查看到 Vue 腳手架的默認設定。
- 2. 使用 vue.config.js 可以對腳手架進行個性化定製，詳情見: https://cli.vuejs.org/zh
