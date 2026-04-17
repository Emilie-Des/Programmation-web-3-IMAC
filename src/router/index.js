import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/Home.vue";
import Simulation from '@/components/Simulation.vue';
// import process from vue;


const routes = [
    {path: "/", component: Home},
    {path: "/simulator", component: Simulation}
    // {path: "*", redirection:"/"}
];

export default createRouter({
history: createWebHistory(),
routes,
});