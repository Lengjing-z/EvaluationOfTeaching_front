import myAxios from "../../../network/request";
import post from "../../util";
import qs from "qs";
const baseUrl = 'admin/questionnaire/'
export default {
  namespaced:true,
  state:{
    questionnaireAll:[],
    q:{
      questions:[],
      indicators:[],
    }
  },
  mutations:{
    updateQuestionnaireAll(state,data){
      state.questionnaireAll = data
    },
    updateQuery(state,data){
      state.q = data
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
    detail({commit},qnId){
      return post(baseUrl+'detail',qs.stringify({qnId}),res=>{
        console.log('success');
        console.log(res.data);
        commit('updateQuery',res.data)
        return res.data
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
    }
  },
  modules:{},
  getters:{}
}
