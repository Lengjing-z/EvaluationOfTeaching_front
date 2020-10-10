import myAxios from "network/request"
import post from "../util";
import finished from './finished'
import progressing from './progressing'
export default {
  namespaced:true,
  state:{

  },
  mutations:{},
  actions:{},
  modules:{
    finished,
    progressing
  },
  getters:{}
}
