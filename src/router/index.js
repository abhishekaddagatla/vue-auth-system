import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/LoginView.vue"
import SignUp from "../views/SignupView.vue"
import Home from "../views/Home.vue"

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
