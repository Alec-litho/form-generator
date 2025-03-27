import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimpleFormView from '../views/SimpleFormView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/simple-form', component: SimpleFormView },
  { path: '/advanced-form', component: () => import('../views/AdvancedFormView.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})