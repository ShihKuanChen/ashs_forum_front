import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BoardView from '@/views/BoardView.vue'
import LoginView from '@/views/LoginView.vue'
import ArticleView from '@/views/ArticleView.vue'
import axios from 'axios'
import WriteView from '@/views/WriteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/about',
    name: 'about',
    component: AboutView
  }, {
    path: '/login',
    name: 'login',
    component: LoginView
  }, {
    path: '/logout',
    name: 'logout',
    beforeEnter: (to, from) => {
      axios.post('/api/logout');
    },
    redirect: '/'
  }, {
    path: '/:board(chat|love|homework)',
    name: 'board',
    component: BoardView
  }, {
    path: '/article/:id',
    name: 'article',
    component: ArticleView
  }, {
    path: '/write',
    name: 'write',
    component: WriteView
  }, , { 
    path: '/:pathMatch(.*)*', 
    redirect: '/' 
  }],
})

export default router
