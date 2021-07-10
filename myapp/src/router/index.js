import { createRouter, createWebHistory } from 'vue-router'
import Center from '@/views/Center'
import Cinema from '@/views/Cinema'
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Detail from '@/views/Detail'
import Login from '@/views/Login'

// const auth = {
//   isLogin () {
//     return false
//   }
// }

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail',
    // component: Detail
    redirect: '/film'
  },
  {
    path: '/detail/:id',
    name: 'detailId',
    component: Detail,
    props: true
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/film'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next)
//   if (to.path === '/center') {
//     console.log('檢查')
//     if (auth.isLogin()) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
