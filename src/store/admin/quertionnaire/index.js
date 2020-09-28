import myAxios from "../../../network/request";
import post from "../../util";
export default {
  namespaced:true,
  state:{
    questionnaire:[]
  },
  mutations:{
    updatenaire(state,data){
      state.quertionnaire = data
    }
  },
  actions:{
    loadGetAllNaire(){
      return post('')
    }
  },
  modules:{},
  getters:{}
}
