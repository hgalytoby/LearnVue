// 此文件專門應用於創建整個應用的路由器
import VueRouter from 'vue-router'
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// 創建路由器
export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            // query 的 path 寫法，Detail 組件的 router-link 要記得改成 query
                            path: 'detail',
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