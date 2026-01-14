import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BoardView from '@/views/BoardView.vue'
import LoginView from '@/views/LoginView.vue'
import ArticleView from '@/views/ArticleView.vue'

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
    path: '/:board(chat|love|homework)',
    name: 'board',
    component: BoardView
  }, {
    path: '/article/:id',
    name: 'article',
    component: ArticleView
  }, { 
    path: '/:pathMatch(.*)*', 
    redirect: '/' 
  }],
})

export default router
