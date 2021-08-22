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

## ref屬性
- 1.被用來給元素或子組件註冊引用訊息(i d的替代者)
- 2.應用在 html 標籤上獲取的是真實 DOM 元素，應用在組件標籤上是組件實例對象(vc)
- 3.使用方式: 
    - 1. 打標識: ```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
    - 2. 獲取: ```this.$refs.xxx```
    
## props配置項
- 1.功能: 讓組件接收外部傳過來的資料
- 2.傳遞資料: ```<Demo name="xxx"/>```
- 3.接收資料: 
    - 1.第一種方式(只接收): ```props:['name'] ```
    - 2.第二種方式(限制類型): ```props:{name:String}```
    - 3.第三種方式(限制類型、限制必要性、指定默認值): 
        ```js
        props: {
            name: {
            type: String // 類型
            required: true, // 必要性
            default: 'Hello' // 默認值
            }
        }
        ```
    > 備註: props 是只讀的，Vue 底層會監測 props 的修改，如果進行了修改，就會發出警告，若業務需求確實需要修改，那麼請複製 props 的內容到 data 中一份，然後去修改 data 中的資料。

## mixin(混入)
- 1.功能: 可以把多個組件共用的設定提取成一個混入對象
- 2.使用方式: 
    - 1.第一步定義混合: 
    ```
    {
        data(){....},
        methods: {....}
        ....
    }
    ```
    - 2.第二步使用混入
        - 全局混入: ```Vue.mixin(xxx)```
        - 局部混入: ```mixins:['xxx']```

## 插件
- 1.功能: 用於增強 Vue
- 2.本質: 包含 install 方法的一個對象，install 的第一個參數是 Vue，第二個以後的參數是插件使用者傳遞的資料。
- 3.定義插件: 
    ```js
    對象.install = function (Vue, options) {
        // 1. 增加全局過濾器
        Vue.filter(...)
    
        // 2. 增加全局指令
        Vue.directive(...)
    
        // 3. 設定全局混入(合)
        Vue.mixin(...)
    
        // 4. 增加實例方法
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
    }
    ```