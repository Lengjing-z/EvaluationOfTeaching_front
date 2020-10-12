import myAxios from "../../../network/request";
import post from "../../util";
export default {
  namespaced:true,
  state:{
    questionnaireAll:[]
  },
  mutations:{
    updateQuestionnaireAll(state,data){
      state.questionnaireAll = data
    }
  },
  actions:{
    loadGetAllNaire({commit}){
      return myAxios.post("admin/questionnaire/all/0/100")
        .then(res =>{
          commit("updateQuestionnaireAll",res.data)
          console.log("get questionnaireAll",res.data)
          return true
        }).catch(err =>{
          console.log(err)
          return false
        })
    },
    deleteQuestionnaireById({commit},id){
      console.log("deleteid",id)
      return myAxios.post("admin/questionnaire/delete",id)
        .then(res =>{
          console.log("deleteQuestionnaire success",res)
          return true
        }).catch(err =>{
          console.log(err)
          return false
        })
    },
    queryAllNaire({commit}){
      return myAxios.post("admin/institute/all")
        .then(res =>{
          console.log("admin/institute/all",res.data)
          return true
        }).catch(err =>{
          console.log(err)
          return false
        })
    },
    queryAllNaire2({commit}){
      return myAxios.post("admin/course/all")
        .then(res =>{
          console.log("admin/course/all",res.data)
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
