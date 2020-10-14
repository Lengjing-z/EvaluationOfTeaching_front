import myAxios from "network/request"
import post from "../util";
import finished from './finished'
import progressing from './progressing'
import institute from './institute'
import course from './course'
export default {
  namespaced:true,
  state:{

  },
  mutations:{},
  actions:{},
  modules:{
    finished,
    progressing,
    institute,
    course
  },
  getters:{}
}
