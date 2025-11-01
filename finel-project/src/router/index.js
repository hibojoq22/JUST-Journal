import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login.vue'
import Signup from '../components/signup.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
