import myAxios from "../../../network/request";
import post from "../../util";
export default {
  namespaced:true,
  state:{
    questionnaireAll:[]
  },
  mutations:{
    updatequestionnaireAll(state,data){
      state.questionnaireAll = data
    }
  },
  actions:{
    loadGetAllNaire({commit}){
      return myAxios.post("admin/questionnaire/all/0/100")
        .then(res =>{
          commit("updatequestionnaireAll",res.data)
          console.log("get questionnaireAll",res.data)
          return true
        }).catch(err =>{
          console.log(err)
          return false
        })
    }
  },
  modules:{},
  getters:{}
}
