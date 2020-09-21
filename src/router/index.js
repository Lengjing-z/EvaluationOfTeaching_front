import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from "../views/manager/Manager";
import Mess from "../views/mess/Mess";
const Login = () => import('../views/login/Login.vue');
const Index = () => import('../views/index/Index.vue');


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/manager',
      name: 'Manager',
      component: Manager
    },
    {
      path: '/mess',
      name: 'Mess',
      component: Mess
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
