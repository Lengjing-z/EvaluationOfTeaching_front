import myAxios from "../../network/request";
import post from "../util";
import power from "./power";
import clazz from './class'
import student from './student'
import indicator from './indicator'
import quertionnaire from './quertionnaire'
export default {
  namespaced: true,
  mutations:{

  },
  state:{},
  actions:{},
  modules:{
    power,
    'class': clazz,
    student,
    indicator,
    quertionnaire
  },
  getters:{}
}
