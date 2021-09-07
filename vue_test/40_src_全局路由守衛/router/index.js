// 此文件專門應用於創建整個應用的路由器
import VueRouter from 'vue-router'
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// 創建路由器
const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta: {
                title: '關於',
            },
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {
                title: '首頁',
            },
            children: [
                {
                    name: 'news',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新聞',
                    },
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: '訊息',
                    },
                    children: [
                        {
                            name: 'detail',
                            // query 的 path 寫法，Detail 組件的 router-link 要記得改成 query
                            path: 'detail',
                            meta: {
                                title: '細節',
                            },
                            // params 的 path 寫法，Detail 組件的 router-link 要記得改成 query
                            // path: 'detail/:id/:title',
                            component: Detail,
                            // props 的第一種寫法，值為對象，若布林值為所有 key-value 會以 props 的形式傳給 Detail 組件。
                            // props: {'a': 1, 'b': 2}

                            // props 的第二種寫法，值為布林值，若布林值為真，就會把該路由組件收到的所有 params 參數，以 props 的形式傳給 Detail 組件。
                            // props: true

                            // props 的第三種寫法，值為函數。
                            // props($route) {
                            //     return {id: $route.query.id, title: $route.query.title}
                            // },

                            // es6 寫法1
                            props({query}) {
                                return {id: query.id, title: query.title, a: 1, b: 'Hello'}
                            },

                            // es6 寫法2
                            // props({query: {id, title}}) {
                            //     return {id: id, title: title}
                            // }
                        }
                    ]
                },
            ]
        },
    ]
})

// 全局前置路由守衛 => 初始化的時候被調用，每次路由切換之前被調用
router.beforeEach((to, from, next) => {
    console.log('router beforeEach')
    console.log('to =>', to)
    console.log('from =>', from)
    console.log('next =>', next)
    console.log(['news', 'message'].includes(to.name))
    // 判斷是否需要鑒權
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'dudulu1') {
            next()
        } else {
            alert('學校名字不是 dudulu 不能看!')
        }
    } else {
        next()
    }
})

// 全局後置路由守衛 => 初始化的時候被調用，每次路由切換之後被調用
router.afterEach((to, from,) => {
    document.title = to.meta.title || 'dudulu'
    console.log(to, from)
})

export default router