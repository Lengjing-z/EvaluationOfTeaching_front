import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from "views/manager/Manager";
import Mess from "views/mess/Mess";

const Login = () => import('views/login/Login.vue');
const Index = () => import('views/index/Index.vue');
const Limits = () => import('views/limits/Limits.vue')
const StudentQuestionnaireFinish = () => import('views/student/StudentQuestionnaireFinish')
const QuestionnaireManager= () => import('views/admin/questionnaire/QuestionnaireManager')
const  QuestionnaireProgress = ()=> import('views/admin/questionnaire/QuestionnaireProgress')
const  QuestionnaireIssue = ()=> import('views/admin/questionnaire/QuestionnaireIssue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: {
      title: '首页'
    }

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
  },
  {
    path: '/limits',
    name: 'Limits',
    component: Limits
  },
 {
    path: '/questionnaireManager',
    name: 'QuestionnaireManager',
    component: QuestionnaireManager
  },
  {
    path: '/questionnaireProgress',
    name: 'QuestionnaireProgress',
    component: QuestionnaireProgress
  },
  {
    path: '/questionnaireIssue',
    name: 'QuestionnaireIssue',
    component: QuestionnaireIssue
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
