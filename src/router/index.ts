import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/ListWorkBook.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'listWorkBook',
        component: Home
    },
    {
        path: '/phone-book',
        name: 'listPhoneBook',
        component: () => import('@/views/ListPhoneBook.vue')
    },
    {
        path: '/phone-book-edit',
        name: 'phoneBookEdit',
        component: () => import('@/views/PhoneBookEdit.vue')
    },
    {
        path: '/work-book-create',
        name: 'workBookCreate',
        component: () => import('@/views/WorkBookCreate.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/WorkBookCreate.vue')
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('@/views/404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
