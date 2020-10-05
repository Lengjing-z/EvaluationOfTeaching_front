import Vue from 'vue'
import Vuex from 'vuex'
import info from './info'
import login from './login'
import clazz from "./class";
import admin from "./admin";
import course from './course'
import evaluation from './evaluation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    info,
    login,
    clazz,
    admin,
    course,
    evaluation
  }
})
