
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import MainManager from "./components/listers/MainCards"
import MainDetail from "./components/listers/MainDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/mains',
                name: 'MainManager',
                component: MainManager
            },
            {
                path: '/mains/:id',
                name: 'MainDetail',
                component: MainDetail
            },



    ]
})
