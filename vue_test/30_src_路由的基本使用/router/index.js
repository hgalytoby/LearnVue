// 此文件專門應用於創建整個應用的路由器
import VueRouter from 'vue-router'
import About from "../components/About";
import Home from "../components/Home";

// 創建路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
})