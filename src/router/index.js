import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/Home.vue";
// import process from vue;


const routes = [
    {path: "/", component: Home},
    // {path: "*", redirection:"/"}
];

export default createRouter({
history: createWebHistory(),
routes,
});