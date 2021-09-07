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
- 4.Prop Types
    - https://vuejs.org/v2/guide/components-props.html#Prop-Types
    ```js
    props: {
        title: String,
        likes: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object,
        callback: Function,
        contactsPromise: Promise // or any other constructor
    }
    ```

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
- 4.使用插件: ```Vue.use()```

## scoped樣式
- 1.作用: 讓樣式在局部生效，防止衝突。
- 2.寫法: ```<style scoped>```
- 3.補充
    - 查看 less 版本 (css)
        - npm view less-loader versions
        - Vue 腳手架用 webpack 4.46.0，所以選擇 less-loader 6 ~ 7版本。
            - `npm i less-loader@7` 預設裝 7 最新。
            
## 總結 TodoList 案例
- 1.組件化編碼流程: 
    - (1).拆分靜態組件: 組件要按照功能點拆分，命名不要與 html 元素衝突。
    - (2).實現動態組件: 考慮好資料的存放位置，資料是一個組件在用，還是一些組件在用: 
        - (1).一個組件在用: 放在組件自身即可。
        - (2).一些組件在用: 放在他們共同的父組件上(<span style="color:red">狀態提升</span>)。
    - (3).實現交互: 從綁定事件開始。
- 2.props 適用於: 
    - (1).父組件 ==> 子組件 通信
    - (2).子組件 ==> 父組件 通信(要求父先給子一個函數)
- 3.使用 v-model 時要切記: v-model 綁定的值不能是 props 傳過來的值，因爲 props 是不可以修改的！
- 4.props 傳過來的若是對象類型的值，修改對象中的屬性時 Vue 不會報錯，但不推薦這樣做。

## webStorage
- 1.存儲內容大小一般支持 5MB 左右（不同瀏覽器可能還不一樣）
- 2.瀏覽器端通過 Window.sessionStorage 和 Window.localStorage 屬性來實現本地存儲機制。
- 3.相關API: 
    - 1. ```xxxxxStorage.setItem('key', 'value')```
        - 該方法接受一個鍵和值作爲參數，會把鍵值對添加到存儲中，如果鍵名存在，則更新其對應的值。
    - 2. ```xxxxxStorage.getItem('person')```
        - 該方法接受一個鍵名作爲參數，返回鍵名對應的值。
    - 3. ```xxxxxStorage.removeItem('key')```
        - 該方法接受一個鍵名作爲參數，並把該鍵名從存儲中刪除。
    - 4. ```xxxxxStorage.clear()```
        - 該方法會清空存儲中的所有資料。
- 4. 備註: 
    - 1.SessionStorage 存儲的內容會隨著瀏覽器視窗關閉而消失。
    - 2.LocalStorage 存儲的內容，需要手動清除才會消失。
    - 3.```xxxxxStorage.getItem(xxx)```如果 xxx 對應的 value 獲取不到，那麼 getItem 的返回值是null。
    - 4.```JSON.parse(null)```的結果依然是 null。
    
## 組件的自定義事件
- 1.一種組件間通信的方式，適用於: <strong style="color:red">子組件 ===> 父組件</strong>
- 2.使用場景: A 是父組件，B 是子組件，B 想給 A 傳資料，那麼就要在 A 中給 B 綁定自定義事件(<span style="color:red">事件的回調在 A 中</span>)。
- 3.綁定自定義事件: 
    - 1.第一種方式，在父組件中: ```<Demo @dudulu="test"/>```  或 ```<Demo v-on:dudulu="test"/>```
    - 2.第二種方式，在父組件中: 
        ```js
        <Demo ref="demo"/>
        ...
        mounted(){
           this.$refs.xxx.$on('dudulu', this.test)
        }
        ```
    - 3.若想讓自定義事件只能觸發一次，可以使用```once```修飾符，或```$once```方法。
- 4.觸發自定義事件: ```this.$emit('dudulu', 資料)```		
- 5.解綁自定義事件```this.$off('dudulu')```
- 6.組件上也可以綁定原生DOM事件，需要使用```native```修飾符。
- 7.注意: 通過```this.$refs.xxx.$on('dudulu', 回調)```綁定自定義事件時，回調<span style="color:red">要麼配置在 methods 中</span>，<span style="color:red">要麼用箭頭函數</span>，否則 this 指向會出問題！

## 全局事件總線(GlobalEventBus)
- 1.一種組件間通信的方式，適用於<span style="color:red">任意組件間通信</span>。
- 2.安裝全局事件總線: 
    ```js
    new Vue({
        ...
        beforeCreate() {
              Vue.prototype.$bus = this //安裝全局事件總線，$bus 就是當前應用的 vm
        },
        ...
    }) 
    ```
- 3.使用事件總線: 
    - 1.接收資料: A 組件想接收資料，則在 A 組件中給 $bus 綁定自定義事件，事件的<span style="color:red">回調留在 A 組件自身。</span>
    ```js
    methods() {
        demo(data){...}
    }
    ...
    mounted() {
        this.$bus.$on('xxxx', this.demo)
    }
    ```
    - 2.提供資料: ```this.$bus.$emit('xxxx', 資料)```
- 4.最好在 beforeDestroy 鉤子中，用 $off 去解綁<span style="color:red">當前組件所用到的</span>事件。

## 消息訂閱與發佈(pubsub)
- 1.一種組件間通信的方式，適用於<span style="color:red">任意組件間通信</span>。
- 2.使用步驟: 
    - 1.安裝 pubsub: ```npm i pubsub-js```
    - 2.導入: ```import pubsub from 'pubsub-js'```
    - 3.接收資料: A 組件想接收資料，則在 A 組件中訂閱訊息，訂閱的<span style="color:red">回調留在 A 組件自身。</span>
    ```js
    methods() {
        demo(data){...}
    }
    ...
    mounted() {
        this.pid = pubsub.subscribe('xxx', this.demo) // 訂閱訊息
    }
    ```
    - 4.提供資料: ```pubsub.publish('xxx', 資料)```
    - 5.最好在 beforeDestroy 鉤子中，用```PubSub.unsubscribe(pid)```去<span style="color:red">取消訂閱。</span>


## nextTick
- 1.語法: ```this.$nextTick(回調函數)```
- 2.作用: 在下一次 DOM 更新結束後執行其指定的回調。
- 3.什麼時候用: 當改變資料後，要基於更新後的新 DOM 進行某些操作時，要在 nextTick 所指定的回調函數中執行。

## Vue封裝的過度與動畫
- 1.作用: 在插入、更新或移除 DOM 元素時，在合適的時候給元素添加樣式類名。
- 2.圖示: <img src="https://i.imgur.com/01dH0GS.png" style="width:60%"/>
- 3.寫法: 
    - 1.準備好樣式: 
        - 元素進入的樣式: 
            - 1.v-enter: 進入的起點
            - 2.v-enter-active: 進入過程中
            - 3.v-enter-to: 進入的終點
        - 元素離開的樣式: 
            - 1.v-leave: 離開的起點
            - 2.v-leave-active: 離開過程中
            - 3.v-leave-to: 離開的終點
    - 2.使用```<transition>```包裹要過度的元素，並配置 name 屬性: 
        ```vue
        <transition name="hello">
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
        ```
    - 3.備註: 若有多個元素需要過度，則需要使用: ```<transition-group>```，且每個元素都要指定```key```值。
    - 4.第三方動畫庫: https://animate.style/
    
## vue腳手架配置代理
### 方法一
​在 vue.config.js 中增加如下設定: 
```js
devServer:{
    proxy: "http://localhost:5000"
}
```

- 說明: 
    - 1.優點: 設定簡單，請求資源時直接發給前端(8080)即可。
    - 2.缺點: 不能設定多個代理，不能靈活的控制請求是否走代理。
    - 3.工作方式: 若按照上述設定代理，當請求了前端不存在的資源時，那麼該請求會轉發給伺服器 (優先匹配前端資源)

### 方法二
​編寫 vue.config.js 設定 具體代理規則: 
```js
module.exports = {
    devServer: {
        proxy: {
            // 匹配所有以 '/api1'開頭的請求路徑
            '/api1': {
                target: 'http://localhost:5000',// 代理目標的基礎路徑
                changeOrigin: true,
                pathRewrite: {'^/api1': ''}
        },
            // 匹配所有以 '/api2'開頭的請求路徑
            '/api2': {
                target: 'http://localhost:5001',// 代理目標的基礎路徑
                changeOrigin: true,
                pathRewrite: {'^/api2': ''}
            }
        }
    }
}
/*
    changeOrigin 設定爲 true 時，伺服器收到的請求頭中的 host 爲: localhost:5000
    changeOrigin 設定爲f false 時，伺服器收到的請求頭中的 host 爲: localhost:8080
    changeOrigin 默認值爲 true
*/
```

- 說明: 
    - 1.優點: 可以設定多個代理，且可以靈活的控制請求是否走代理。
    - 2.缺點: 設定略微繁瑣，請求資源時必須加前綴。

## 插槽
- 1.作用: 讓父組件可以向子組件指定位置插入 html 結構，也是一種組件間通信的方式，適用於 <strong style="color:red">父組件 ===> 子組件</strong> 。
- 2.分類: 默認插槽、具名插槽、作用域插槽
- 3.使用方式: 
    - 1.默認插槽: 
        ```vue
        父組件中: 
            <Category>
             <div>html 結構1</div>
            </Category>
      
        子組件中: 
            <template>
              <div>
                 <!-- 定義插槽 -->
                 <slot>插槽默認內容...</slot>
              </div>
            </template>
        ```
    - 2.具名插槽: 
    ```vue
    父組件中: 
        <Category>
            <template slot="center">
                <div>html 結構1</div>
            </template>
            <template v-slot:footer>
                <div>html 結構2</div>
            </template>
        </Category>
  
    子組件中: 
        <template>
            <div>
                <!-- 定義插槽 -->
                <slot name="center">插槽默認內容...</slot>
                <slot name="footer">插槽默認內容...</slot>
            </div>
        </template>
    ```
    - 3. 作用域插槽: 
        - 1.理解: <span style="color:red">資料在組件的自身，但根據資料生成的結構需要組件的使用者來決定。</span>（games 資料在 Category 組件中，但使用資料所遍歷出來的結構由 App 組件決定）
        - 2. 具體編碼: 
    ```vue
    父組件中: 
    <Category>
        <template scope="scopeData">
            <!-- 生成的是 ul 列表 -->
            <ul>
                <li v-for="g in scopeData.games" :key="g">{{ g }}</li>
            </ul>
        </template>
    </Category>
    
    <Category>
        <template slot-scope="scopeData">
            <!-- 生成的是 h4 標題 -->
            <h4 v-for="g in scopeData.games" :key="g">{{ g }}</h4>
        </template>
    </Category>
  
    子組件中: 
    <template>
        <div>
            <slot :games="games"></slot>
        </div>
    </template>
    
    <script>
        export default {
            name: 'Category',
            props: ['title'],
            // 資料在子組件自身
            data() {
                return {
                    games: ['白色相簿2', '穗翼', 'G弦上魔王', '命運石之門'],
                }
            },
        }
    </script>
    ```

## Vuex
### 1.概念
- 在 Vue 中實現集中式狀態(資料)管理的一個 Vue 插件，對 vue 應用中多個組件的共享狀態進行集中式的管理(讀/寫)，也是一種組件間通信的方式，且適用於任意組件間通信。

### 2.何時使用？
- 多個組件需要共享資料時

### 3.搭建vuex環境
- 1.創建文件: ```src/store/index.js```
    ```js
    //引入Vue核心庫
    import Vue from 'vue'
    //引入Vuex
    import Vuex from 'vuex'
    //應用Vuex插件
    Vue.use(Vuex)
    
    //準備 actions 對象——響應組件中用戶的動作
    const actions = {}
    //準備 mutations 對象——修改 state 中的資料
    const mutations = {}
    //準備 state 對象——保存具體的資料
    const state = {}
    
    //創建並暴露store
    export default new Vuex.Store({
        actions,
        mutations,
        state
    })
    ```

- 2.在```main.js```中創建 vm 時傳入```store```設定值

    ```js
    ...
    //引入store
    import store from './store'
    ...
    
    //創建vm
    new Vue({
        el:'#app',
        render: h => h(App),
        store
    })
    ```
  
### 4.基本使用
- 1.初始化資料、設定```actions```、設定```mutations```，操作文件```store.js```
    ```js
    //引入 Vue
    import Vue from 'vue'
    //引入Vuex
    import Vuex from 'vuex'
    //引用Vuex
    Vue.use(Vuex)
    
    const actions = {
    //響應組件中加的動作
    jia(context, value){
        // console.log('actions 中的 jia 被調用了', miniStore, value)
        context.commit('JIA',value)
        },
    }
    
    const mutations = {
    // 執行加
    JIA(state, value){
        // console.log('mutations 中的 JIA 被調用了', state, value)
        state.sum += value
        }
    }
    
    // 初始化資料
    const state = {
        sum: 0
    }
    
    // 創建並暴露 store
    export default new Vuex.Store({
        actions,
        mutations,
        state,
    })
    ```
- 2.組件中讀取 vuex 中的資料: ```$store.state.sum```
- 3.組件中修改 vuex 中的資料: ```$store.dispatch('action 中的方法名', 資料)``` 或 ```$store.commit('mutations 中的方法名', 資料)```
   >  備註: 若沒有網絡請求或其他業務邏輯，組件中也可以越過 actions，即不寫```dispatch```，直接編寫```commit```

### 5.getters的使用
- 1.概念: 當 state 中的資料需要經過加工後再使用時，可以使用 getters 加工。
- 2.在```store.js```中追加```getters```設定
    ```js
    ...
    const getters = {
        bigSum(state){
            return state.sum * 10
        }
    }
    
    // 創建並暴露 store
    export default new Vuex.Store({
        ...
        getters
    })
   ```
- 3.組件中讀取資料: ```$store.getters.bigSum```

### 6.四個 map 方法的使用
- 1.<strong>mapState 方法: </strong>用於幫助我們映射```state```中的資料爲計算屬性
    ```js
    computed: {
        //藉助 mapState 生成計算屬性: sum、school、subject(對象寫法)
        ...mapState({sum: 'sum', school: 'school', subject: 'subject'}),
            
        //藉助 mapState 生成計算屬性: sum、school、subject(陣列寫法)
        ...mapState(['sum', 'school', 'subject']),
    },
    ```
- 2.<strong>mapGetters 方法: </strong>用於幫助我們映射```getters```中的資料爲計算屬性
    ```js
    computed: {
        //藉助 mapGetters 生成計算屬性: bigSum(對象寫法)
        ...mapGetters({bigSum: 'bigSum'}),
        
        //藉助 mapGetters 生成計算屬性: bigSum(資料寫法)
        ...mapGetters(['bigSum'])
    },
    ```
- 3. <strong>mapActions 方法: </strong>用於幫助我們生成與```actions```對話的方法，即: 包含```$store.dispatch(xxx)```的函數
    ```js
    methods:{
        //藉助 mapActions 生成: incrementOdd、incrementWait(對象形式)
        ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})
        
        //藉助 mapActions 生成: incrementOdd、incrementWait(陣列形式)
        ...mapActions(['jiaOdd', 'jiaWait'])
    }
    ```
- 4. <strong>mapMutations 方法: </strong>用於幫助我們生成與```mutations```對話的方法，即: 包含```$store.commit(xxx)```的函數
    ```js
    methods:{
        //藉助 mapActions 生成: increment、decrement(對象形式)
        ...mapMutations({increment: 'JIA',decrement: 'JIAN'}),
        
        //藉助 mapMutations 生成: JIA、JIAN(對象形式)
        ...mapMutations(['JIA', 'JIAN']),
    }
    ```
  
> 備註: mapActions 與 mapMutations 使用時，若需要傳遞參數需要: 在模板中綁定事件時傳遞好參數，否則參數是事件對象。

### 7.模塊化+命名空間
- 1.目的: 讓程式碼更好維護，讓多種資料分類更加明確。
- 2.修改```store.js```
   ```js
    const countAbout = {
        namespaced: true, // 開啓命名空間
        state: {x: 1},
        mutations: { ... },
        actions: { ... },
        getters: {
        bigSum(state) {
            return state.sum * 10
            }
        }
    }
    
    const personAbout = {
        namespaced: true, // 開啓命名空間
        state: { ... },
        mutations: { ... },
        actions: { ... }
    }
    
    const store = new Vuex.Store({
        modules: {
            countAbout,
            personAbout
        }
    })
    ```

- 3.開啓命名空間後，組件中讀取 state 資料: 
   ```js
   // 方式一: 自己直接讀取
   this.$store.state.personAbout.list
   // 方式二: 藉助 mapState 讀取: 
   ...mapState('countAbout', ['sum', 'school', 'subject']),
   ```

- 4.開啓命名空間後，組件中讀取 getters 資料: 
   ```js
   // 方式一: 自己直接讀取
   this.$store.getters['personAbout/firstPersonName']
   // 方式二: 藉助 mapGetters 讀取: 
   ...mapGetters('countAbout',['bigSum'])
   ```

- 5.開啓命名空間後，組件中調用 dispatch
   ```js
   // 方式一: 自己直接 dispatch
   this.$store.dispatch('personAbout/addPersonWang', person)
   // 方式二: 藉助 mapActions: 
   ...mapActions('countAbout', {incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})
   ```
  
- 6.開啓命名空間後，組件中調用 commit
   ```js
   // 方式一: 自己直接 commit
   this.$store.commit('personAbout/ADD_PERSON', person)
   // 方式二: 藉助 mapMutations: 
   ...mapMutations('countAbout', {increment:'JIA', decrement: 'JIAN'}),
   ```

## 路由
- 1.理解: 一個路由(route)就是一組映射關係(key - value)，多個路由需要路由器(router)進行管理。
- 2.前端路由: key 是路徑，value 是組件。

### 1.基本使用
- 1.安裝vue-router，命令: ```npm i vue-router```
- 2.應用插件: ```Vue.use(VueRouter)```
- 3.編寫 router 設定項:
   ```js
    //引入VueRouter
    import VueRouter from 'vue-router'
    //引入組件
    import About from '../components/About'
    import Home from '../components/Home'
    
    //創建 router 實例對象，去管理一組一組的路由規則
    const router = new VueRouter({
        routes:[
            {
                path:'/about',
                component:About
            },
            {
                path:'/home',
                component:Home
            }
        ]
    })
    
    //暴露router
    export default router
    ```

- 4.實現切換(active-class 可設定高亮樣式)
    ```vue
    <router-link active-class="active" to="/about">About</router-link>
    ```

- 5.指定展示位置

    ```vue
    <router-view></router-view>
    ```
  
### 2.幾個注意點
- 1.路由組件通常存放在```pages```文件夾，一般組件通常存放在```components```文件夾。
- 2.通過切換，"隱藏"了的路由組件，默認是被銷毀掉的，需要的時候再去掛載。
- 3.每個組件都有自己的```$route```屬性，裡面儲存著自己的路由訊息。
- 4.整個應用只有一個 router，可以通過組件的```$router```屬性獲取到。

### 3.多級路由（多級路由）
- 1.設定路由規則，使用 children 設定: 
    ```
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            // 通過 children 設定子級路由
            children: [ 
            {
                // 此處一定不要寫: /news
                path: 'news', 
                component: News
            },
            {
                // 此處一定不要寫: /message
                path: 'message',
                component: Message
            }
            ]
        }
    ]
    ```

- 2.跳轉(要寫完整路徑):
    ```vue
    <router-link to="/home/news">News</router-link>
    ```

### 4.路由的query參數
- 1.傳遞參數
    ```vue
    <!-- 跳轉並攜帶 query 參數，to 的字符串寫法 -->
    <router-link :to="/home/message/detail?id=666&title=你好">跳轉</router-link>
    
    <!-- 跳轉並攜帶 query 參數，to 的對象寫法 -->
    <router-link 
        :to="{
            path: '/home/message/detail',
            query: {
                id: 666,
                title: '你好'
            }
        }"
    >跳轉</router-link>
    ```
  
- 2.接收參數: 
    ```js
    $route.query.id
    $route.query.title
    ```

### 5.命名路由
- 1.作用: 可以簡化路由的跳轉。
- 2.如何使用
   - 1. 給路由命名: 
    ```
    {
    path: '/demo',
    component: Demo,
    children: [
            {
                path: 'test',
                component: Test,
                children: [
                    {
                        // 給路由命名
                        name: 'hello' 
                        path: 'welcome',
                        component: Hello,
                    }
                ]
            }
        ]
    }
    ```

    - 2.簡化跳轉: 
    ```vue
    <!--簡化前，需要寫完整的路徑 -->
    <router-link to="/demo/test/welcome">跳轉</router-link>
    
    <!--簡化後，直接通過名字跳轉 -->
    <router-link :to="{name: 'hello'}">跳轉</router-link>
    
    <!--簡化寫法配合傳遞參數 -->
    <router-link 
        :to="{
            name: 'hello',
            query: {
            id: 666,
            title: '你好'
        }
    }"
    >跳轉</router-link>
    ```

### 6.路由的params參數
- 1.設定路由，聲明接收 params 參數
   ```
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'news',
                component: News
            },
            {
                component: Message,
                children: [
                    {
                        name: 'detail',
                        // 使用佔位符聲明接收 params 參數
                        path: 'detail/:id/:title', 
                        component: Detail
                    }
                ]
            }
        ]
    }
    ```
- 2.傳遞參數
    ```vue
    <!-- 跳轉並帶著 params 參數，to 的字符串寫法 -->
    <router-link :to="/home/message/detail/666/你好">跳轉</router-link>
    
    <!-- 跳轉並帶著 params 參數，to 的對象寫法 -->
    <router-link 
        :to="{
            name: 'detail',
            params: {
                id: 666,
                title: '你好'
            }
        }"
    >跳轉</router-link>
    ```
    
    > 特別注意: 路由帶著 params 參數時，若使用 to 的對象寫法，則不能使用 path 設定項，必須使用 name 設定！

- 3.接收參數: 
    ```js
    $route.params.id
    $route.params.title
    ```
  
### 7.路由的props配置
- ​作用: 讓路由組件更方便的收到參數
    ```js
    {
        name: 'detail',
        path: 'detail/:id',
        component: Detail,
    
        //第一種寫法: props 值爲對象，該對象中所有的 key-value 的組合最終都會通過 props 傳給 Detail 組件
        // props:{a: 900}
        
        //第二種寫法: props 值爲布林值，布林值爲 true，則把路由收到的所有 params 參數通過 props 傳給 Detail 組件
        // props: true
    
        //第三種寫法: props 值爲函數，該函數返回的對象中每一組 key-value 都會通過 props 傳給 Detail 組件
        props(route) {
            return {
                id: route.query.id,
                title: route.query.title
            }
        }
    }
    ```

### 8.```<router-link>```的 replace 屬性
- 1.作用: 控制路由跳轉時操作瀏覽器歷史記錄的模式
- 2.瀏覽器的歷史記錄有兩種寫入方式: 分別爲```push```和```replace```，```push```是追加歷史記錄，```replace```是替換當前記錄。路由跳轉時候默認爲```push```
- 3.如何開啓```replace```模式: ```<router-link replace .......>News</router-link>```

### 9.編程式路由導航
- 1.作用: 不借助```<router-link> ```實現路由跳轉，讓路由跳轉更加靈活
- 2.具體編碼: 
    ```js
    // $router 的兩個 API
    this.$router.push({
        name: 'xiangqing',
        params: {
            id: xxx,
            title: xxx
        }
    })
    
    this.$router.replace({
        name: 'xiangqing',
        params: {
            id: xxx,
            title: xxx
        }
    })
    this.$router.forward() // 前進
    this.$router.back() // 後退
    this.$router.go() // 可前進也可後退
    ```
  
### 10.緩存路由組件
- 1.作用: 讓不顯示的路由組件保持掛載，不被銷毀。
- 2.具體編碼: 
    ```vue
    <keep-alive include="News"> 
        <router-view></router-view>
    </keep-alive>
    ```
- 3.緩存多個路由組件
    <!-- <keep-alive :include="['News', 'Message']"></keep-alive> -->
    
### 11.兩個新的生命週期鉤子
- 1.作用: 路由組件所獨有的兩個鉤子，用於捕獲路由組件的啟用狀態。
- 2.具體名字: 
    - 1.```activated```路由組件被啟用時觸發。
    - 2.```deactivated```路由組件關閉時觸發。

### 12.路由守衛
- 1.作用: 對路由進行權限控制
- 2.分類: 全局守衛、獨享守衛、組件內守衛
- 3.全局守衛:
    ```js
    // 全局前置守衛: 初始化時執行、每次路由切換前執行
    router.beforeEach((to, from, next)=>{
        console.log('beforeEach', to, from)
        // 判斷當前路由是否需要進行權限控制
        if (to.meta.isAuth) { 
            // 權限控制的具體規則
            if (localStorage.getItem('school') === 'dudulu') { 
                next() // 通過
            } else {
                alert('暫無權限查看')
                // next({name: 'about'})
            }
        } else {
            next() // 通過
        }
    })
    
    // 全局後置守衛: 初始化時執行、每次路由切換後執行
    router.afterEach((to, from)=>{
        console.log('afterEach', to, from)
        if (to.meta.title) { 
            // 修改網頁的 title
            document.title = to.meta.title 
        } else {
            document.title = 'vue_test'
        }
    })
    ```
- 4.獨享守衛:
    ```js
    beforeEnter(to, from, next) {
        console.log('beforeEnter', to, from)
        if (to.meta.isAuth) {
            // 判斷當前路由是否需要進行權限控制  
            if (localStorage.getItem('school') === 'dudulu') {
                next()
            } else {
                alert('暫無權限查看')
                // next({name: 'about'})
            }
        } else {
            next()
        }
    }
    ```
- 5.組件內守衛: 
    ```js
    // 進入守衛: 通過路由規則，進入該組件時被調用
    beforeRouteEnter (to, from, next) {
    },
    // 離開守衛: 通過路由規則，離開該組件時被調用
    beforeRouteLeave (to, from, next) {
    }
    ```
  
### 13.路由器的兩種工作模式
- 1.對於一個 url 來說，什麼是 hash 值? —— # 及其後面的內容就是 hash 值。
- 2.hash 值不會包含在 HTTP 請求中，即: hash 值不會帶給伺服器。
- 3.hash 模式: 
    - 1.網址中永遠帶着 # 號，不美觀 。
    - 2.若以後將網址通過第三方手機 app 分享，若 app 校驗嚴格，則地址會被標記爲不合法。
    - 3.兼容性較好。
- 4.history 模式: 
    - 1.網址乾淨，美觀 。
    - 2.兼容性和 hash 模式相比略差。
    - 3.應用部署上線時需要後端人員支援，解決重新整理頁面伺服器 404 的問題。
   
    
### 14.Vue UI 組件庫
- 1.手機端常用 UI 組件庫
    - 1.Vant https://youzan.github.io/vant
    - 2.Cube UI https://didi.github.io/cube-ui
    - 3.Mint UI http://mint-ui.github.io
- 2.PC 端常用 UI 組件庫
    - 1.Element UI https://element.eleme.cn
    - 2.IView UI https://www.iviewu
    - 3.Ant Design Vue https://antdv.com/docs/vue/introduce-cn/