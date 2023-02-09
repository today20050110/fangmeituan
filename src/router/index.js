import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component: () => import('../pages/myHome/MyHome.vue'),
        },
        {
            path: '/home',
            component: () => import('../pages/myHome/MyHome.vue'),
        },
        {
            path: '/cart',
            component: () => import('../pages/myCart/MyCart.vue'),
        },
        {
            path: '/order',
            component: () => import('../pages/myOrder/MyOrder.vue'),
        },
        {
            path: '/mine',
            component: () => import('../pages/mine/Mine.vue'),
        },
    ],
});

export default router;