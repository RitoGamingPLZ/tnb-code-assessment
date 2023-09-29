import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: '/', component: () => import('@/pages/Main.vue') },
  { path: '/courses', component: () => import('@/pages/Course.vue') },
]
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;