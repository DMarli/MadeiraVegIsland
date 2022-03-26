// Ligações entre as páginas
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {getAuth} from 'firebase/auth'
import PathNotFound from '../views/404View.vue'

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
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    meta: {
      requiresAuth: true, //Só pode ver esta página quem estiver logged
  }
},
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/:pathMatch(.*)*', 
    component: PathNotFound 
  },
  {
    path: '/comentarios',
    name: 'comentarios',
    component: () => import('../views/ComentariosView.vue'),
    meta: {
      requiresAuth: true, //Só pode ver esta página quem estiver logged
  }
},
  {
    path: '/veg',
    name: 'veg',
    component: () => import('../views/SerVegView.vue'),
    meta: {
      requiresAuth: true, //Só pode ver esta página quem estiver logged
    },
    
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth))
  {
    if (getAuth().currentUser) //se tiver conta, pode ir para a próxima route
    {
      next();
    } else {
      // alert("Não tem acesso a esta página!"); //mensagem de erro
      next('/');
    }
  }
    else {
      next();
}
});

export default router