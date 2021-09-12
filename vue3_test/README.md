# Vue3 快速上手
<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px" />

## 1.Vue3 簡介
- 2020 年 9 月 18 日，Vue.js 發佈 3.0 版本，代號: One Piece(海賊王)
- 耗時2年多、[2600+次提交](https://github.com/vuejs/vue-next/graphs/commit-activity)、[30+個RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs)、[600+次PR](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+)、[99位貢獻者](https://github.com/vuejs/vue-next/graphs/contributors) 
- github上的tags地址: https://github.com/vuejs/vue-next/releases/tag/v3.0.0

## 2.Vue3 帶來了什麼
### 1.性能的提升
- 打包大小減少 41%
- 初次渲染快 55%, 更新渲染快 133%
- 記憶體減少 54%
- ......

### 2.源碼的升級
- 使用 Proxy 代替 defineProperty 實現響應式
- 重寫虛擬 DOM 的實現和 Tree-Shaking
    - Tree-Shaking 用不到的就刪掉的意思，可以在 Google 看一下。
- ......

### 3.擁抱 TypeScript
- Vue3 可以更好的支持 TypeScript

### 4.新的特性
- 1.Composition API(組合API)
   - setup 設定
   - ref 與 reactive
   - watch 與 watchEffect
   - provide 與 inject
   - ......
   
- 2.新的內建組件
   - Fragment 
   - Teleport
   - Suspense
   
- 3.其他改變
   - 新的生命週期鉤子
   - data 選項應始終被聲明爲一個函數
   - 移除 keyCode 支持作爲 v-on 的修飾符
   - ......

# 一、創建 Vue3.0 工程
## 1.使用 vue-cli 創建
- 官方文檔: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create
```bash
## 查看 @vue/cli 版本，確保 @vue/cli 版本在 4.5.0 以上
vue --version
## 安裝或者升級你的 @vue/cli
npm install -g @vue/cli
## 創建
vue create vue_test
## 啓動
cd vue_test
npm run serve
```

## 2.使用 vite 創建
- 官方文檔: https://v3.cn.vuejs.org/guide/installation.html#vite
- vite官網: https://vitejs.cn
- 什麼是 vite? —— 新一代前端構建工具。
- 優勢如下:
    - 開發環境中，無需打包操作，可快速的冷啓動。
    - 輕量快速的熱重載 (HMR)。
    - 真正的按需編譯，不再等待整個應用編譯完成。
- 傳統構建 與 vite 構建對比圖

<img src="https://cn.vitejs.dev/assets/bundler.37740380.png" style="width:500px;height:280px;float:left" /><img src="https://cn.vitejs.dev/assets/esm.3070012d.png" style="width:480px;height:280px" />

```bash
## 創建工程
npm init vite-app <project-name>
## 進入工程目錄
cd <project-name>
## 安裝依賴
npm install
## 運行
npm run dev
```

# 二、常用 Composition API
- 官方文檔: https://v3.cn.vuejs.org/guide/composition-api-introduction.html

## 1.拉開序幕的 setup
- 1.理解: Vue3.0 中一個新的設定項，值爲一個函數。
- 2. setup是所有<strong style="color:#DD5145">Composition API(組合API)</strong><i style="color:gray;font-weight:bold">"表演的舞臺"</i>。
- 3. 組件中所用到的: 資料、方法等等，均要設定在 setup 中。
- 4. setup 函數的兩種返回值: 
    - 1.若返回一個對象，則對象中的屬性、方法，在模板中均可以直接使用。(重點注意!!)
    - 2.<span style="color:#aad">若返回一個渲染函數: 則可以自定義渲染內容。(瞭解)</span>
- 5. 注意點: 
    - 1.儘量不要與 Vue2.x 設定混用
        - Vue2.x 設定(data、methos、computed...)中<strong style="color:#DD5145">可以訪問到</strong>setup中的屬性、方法。
        - 但在 setup 中<strong style="color:#DD5145">不能訪問到</strong>Vue2.x設定(data、methos、computed...)。
        - 如果有重名，setup優先。
    - 2.setup 不能是一個 async 函數，因爲返回值不再是 return 的對象, 而是 promise, 模板看不到 return 對象中的屬性。(後期也可以返回一個 Promise 實例，但需要 Suspense 和異步組件的配合)

##  2.ref 函數
- 作用: 定義一個響應式的資料
- 語法: ```const xxx = ref(initValue)``` 
  - 創建一個包含響應式資料的<strong style="color:#DD5145">引用對象(reference對象，簡稱 ref 對象)</strong>。
  - JS中操作資料: ```xxx.value```
  - 模板中讀取資料: 不需要.value，直接: ```<div>{{xxx}}</div>```
- 備註:
  - 接收的資料可以是: 基本類型、也可以是對象類型。
  - 基本類型的資料: 響應式依然是靠``Object.defineProperty()``的```get```與```set```完成的。
  - 對象類型的資料: 內部 <i style="color:gray;font-weight:bold">"求助"</i> 了Vue3.0中的一個新函數—— ```reactive```函數。

## 3.reactive 函數
- 作用: 定義一個<strong style="color:#DD5145">對象類型</strong>的響應式資料(基本類型不要用它，要用```ref```函數)
- 語法: ```const 代理對象= reactive(源對象)```接收一個對象(或陣列)，返回一個<strong style="color:#DD5145">代理對象(Proxy 的實例對象，簡稱 proxy 對象)</strong>
- reactive 定義的響應式資料是"深層次的"。
- 內部基於 ES6 的 Proxy 實現，通過代理對象操作源對象內部資料進行操作。

## 4.Vue3.0 中的響應式原理
### vue2.x 的響應式
- 實現原理: 
    - 對象類型: 通過```Object.defineProperty()```對屬性的讀取、修改進行攔截(資料劫持)。
    - 陣列類型: 通過重寫更新陣列的一系列方法來實現攔截。(對陣列的變更方法進行了包裝)。
    ```js
    Object.defineProperty(data, 'count', {
        get () {}, 
        set () {}
    })
    ```
- 存在問題: 
  - 新增屬性、刪除屬性, 界面不會更新。
  - 直接通過下標修改陣列, 界面不會自動更新。

### Vue3.0 的響應式
- 實現原理: 
    - 通過 Proxy(代理): 攔截對象中任意屬性的變化, 包括: 屬性值的讀寫、屬性的增加、屬性的刪除等。
    - 通過 Reflect(反射): 對源對象的屬性進行操作。
    - MDN 文檔中描述的 Proxy 與 Reflect:
    - Proxy: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    
    - Reflect: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
    ```js
    new Proxy(data, {
        // 攔截讀取屬性值
        get (target, prop) {
            return Reflect.get(target, prop)
        },
        // 攔截設置屬性值或增加新屬性
        set (target, prop, value) {
            return Reflect.set(target, prop, value)
        },
        // 攔截刪除屬性
        deleteProperty (target, prop) {
            return Reflect.deleteProperty(target, prop)
        }
    })
    proxy.name = 'tom'   
    ```

## 5.reactive 對比 ref
-  從定義資料角度對比: 
    - ref 用來定義: <strong style="color:#DD5145">基本類型資料</strong>。
    - reactive 用來定義: <strong style="color:#DD5145">對象(或陣列)類型資料</strong>。
    - 備註: ref也可以用來定義<strong style="color:#DD5145">對象(或陣列)類型資料</strong>, 它內部會自動通過```reactive```轉爲<strong style="color:#DD5145">代理對象</strong>。
-  從原理角度對比: 
   - ref 通過``Object.defineProperty()``的```get```與```set```來實現響應式(資料劫持)。
   - reactive 通過使用<strong style="color:#DD5145">Proxy</strong>來實現響應式(資料劫持), 並通過<strong style="color:#DD5145">Reflect</strong>操作<strong style="color:orange">源對象</strong>內部的資料。
-  從使用角度對比: 
   - ref 定義的資料: 操作資料<strong style="color:#DD5145">需要</strong>```.value```，讀取資料時模板中直接讀取<strong style="color:#DD5145">不需要</strong>```.value```。
   - reactive 定義的資料: 操作資料與讀取資料: <strong style="color:#DD5145">均不需要</strong>```.value```。

## 6.setup 的兩個注意點
- setup 執行的時機
    - 在 beforeCreate 之前執行一次，this 是 undefined。
  
- setup 的參數
    - props: 值爲對象，包含: 組件外部傳遞過來，且組件內部聲明接收了的屬性。
    - context: 上下文對象
        - attrs: 值爲對象，包含: 組件外部傳遞過來，但沒有在 props 配置中聲明的屬性, 相當於 ```this.$attrs```。
        - slots: 收到的插槽內容，相當於 ```this.$slots```。
        - emit: 分發自定義事件的函數，相當於 ```this.$emit```。

## 7.計算屬性與監視
### 1.computed 函數
- 與 Vue2.x中 computed 設定功能一致
- 寫法
    ```js
    import {computed} from 'vue'
    
    setup () {
        ...
        // 計算屬性 —— 簡寫
        let fullName = computed(() => {
             return `${person.firstName}-${person.lastName}`
        })
        // 計算屬性 —— 完整
        let fullName = computed({
            get () {
                 return `${person.firstName}-${person.lastName}`
            },
            set (value) {
                const nameArr = value.split('-')
                person.firstName = nameArr[0]
                person.lastName = nameArr[1]
            }
        })
    }
    ```

### 2.watch 函數
- 與 Vue2.x 中 watch 設定功能一致
- 兩個小'坑': 
    - 監視 reactive 定義的響應式資料時: oldValue 無法正確取得、強制開啓了深度監視(dee設定失效)。
    - 監視 reactive 定義的響應式資料中某個屬性時: deep 設定有效。
  
    ```js
    //情況一: 監視 ref 定義的響應式資料
    watch(sum, (newValue,oldValue) => {
        console.log('sum 變化了', newValue, oldValue)
    }, {immediate: true})
    
    //情況二: 監視多個 ref 定義的響應式資料
    watch([sum,msg], (newValue, oldValue) => {
        console.log('sum 或 msg 變化了', newValue, oldValue)
    }) 
    
    // 情況三: 監視 reactive 定義的響應式資料
    // 若 watch 監視的是 reactive 定義的響應式資料，則無法正確獲得 oldValue!!
    // 若 watch 監視的是 reactive 定義的響應式資料，則強制開啓了深度監視 
    watch(person, (newValue, oldValue) => {
        console.log('person 變化了', newValue, oldValue)
    }, {immediate: true, deep: false}) // 此處的 deep 設定不會奏效
    
    //情況四: 監視 reactive 定義的響應式資料中的某個屬性
    watch(() => person.job, (newValue, oldValue) => {
        console.log('person 的 job 變化了', newValue, oldValue)
    }, {immediate: true, deep: true}) 
    
    //情況五: 監視 reactive 定義的響應式資料中的某些屬性
    watch([() => person.job, () => person.name], (newValue, oldValue) => {
        console.log('person 的 job 變化了', newValue, oldValue)
    }, {immediate: true, deep: true})
    
    //特殊情況
    watch(() => person.job, (newValue, oldValue) => {
        console.log('person 的 job 變化了', newValue, oldValue)
    }, {deep: true}) // 此處由於監視的是 reactive 所定義的對象中的某個屬性，所以 deep 設定有效，但依然拿不到 oldValue
    ```

### 3.watchEffect 函數
- watch 的套路是: 既要指明監視的屬性，也要指明監視的回調。
- watchEffect 的套路是: 不用指明監視哪個屬性，監視的回調中用到哪個屬性，那就監視哪個屬性。
- watchEffect 有點像 computed: 
    - 但 computed 注重的計算出來的值(回調函數的返回值)，所以必須要寫返回值。
    - 而 watchEffect 更注重的是過程(回調函數的函數體)，所以不用寫返回值。
    ```js
    // watchEffect 所指定的回調中用到的資料只要發生變化，則直接重新執行回調。
    watchEffect(() => {
        const x1 = sum.value
        const x2 = person.age
        console.log('watchEffect 設定的回調執行了')
    })
    ```
