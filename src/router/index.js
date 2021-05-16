import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "../components/MainPage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage
        }
    ]
})

export default router





