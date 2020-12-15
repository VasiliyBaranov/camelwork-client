import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/modify',
        name: 'modify',
        component: () =>
            import(/* webpackChunkName: "ModifyBlog" */ '@/views/ModifyBlog.vue')
    },
    {
        path: '/phone-book-edit',
        name: 'phoneBookEdit',
        component: () =>
            import(/* webpackChunkName: "ModifyBlog" */'@/views/PhoneBookEdit.vue')
    },
    {
        path: '/work-book-create',
        name: 'workBookCreate',
        component: () =>
            import(/* webpackChunkName: "ModifyBlog" */'@/views/WorkBookCreate.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/WorkBookCreate.vue')
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import(/* webpackChunkName: "about" */ '@/views/404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
