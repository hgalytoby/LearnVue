# Vue3快速上手
<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px" />

## 1.Vue3簡介
- 2020 年 9 月 18 日，Vue.js 發佈 3.0 版本，代號: One Piece(海賊王)
- 耗時2年多、[2600+次提交](https://github.com/vuejs/vue-next/graphs/commit-activity)、[30+個RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs)、[600+次PR](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+)、[99位貢獻者](https://github.com/vuejs/vue-next/graphs/contributors) 
- github上的tags地址: https://github.com/vuejs/vue-next/releases/tag/v3.0.0

## 2.Vue3帶來了什麼
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

# 一、創建Vue3.0工程
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

## 1.拉開序幕的setup
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
