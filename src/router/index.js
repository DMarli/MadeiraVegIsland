// Ligações entre as páginas
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404View.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/veg',
    name: 'ver',
    component: () => import('../views/SerVegView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
