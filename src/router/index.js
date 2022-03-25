import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "./../views/Layout.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'search',
                component: () => import('./../views/Search.vue')
            },
            {
                path: '/flights',
                name: 'flights',
                component: () => import('./../views/Flights.vue')
            },
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    routes
})

export default router