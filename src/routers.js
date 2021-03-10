import { createWebHistory, createRouter } from "vue-router";
import Detail from "./view/Detail.vue";
import Home from "./view/Home.vue";
import Login from "./view/LoginPage.vue";

const routes = [
    {
        path: "/detail",
        name: "detail",
        component: Detail,
    },

    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;