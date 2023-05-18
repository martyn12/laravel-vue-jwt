import {createRouter, createWebHistory} from "vue-router";
import TestComponent from "@/components/Test/TestComponent.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/test', component: TestComponent
        },
        {
            path: '/fruit',
            name: 'fruit.index',
            component: () => import('./components/Fruit/IndexComponent.vue')
        },
        {
            path: '/users/login',
            name: 'user.login',
            component: () => import('./components/User/Login.vue')
        },
        {
            path: '/users/registration',
            name: 'user.registration',
            component: () => import('./components/User/Registration.vue')
        },
        {
            path: '/users/personal',
            name: 'user.personal',
            component: () => import('./components/User/Personal.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: () => import('./components/404.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {

        const accessToken = localStorage.getItem('access_token')

        if (!accessToken) {
            if (to.name === 'user.login' || to.name === 'user.registration') {
                return next()
            }
        }
        if (to.name === 'user.login' || to.name === 'user.registration' && accessToken) {
            return next({
                name: 'user.personal'
            })
        }
        next()
    }
)

export default router
