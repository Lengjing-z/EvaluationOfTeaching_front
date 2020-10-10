import myAxios from "network/request"
import post from "../util";
import questionnaire from  './questionnairefinish'
export default {
  namespaced:true,
  state:{
    questionnairelist:null
  },
  mutations:{
    updateNaire(state,data){
      state.questionnairelist = data
    }
  },
  actions:{
    selectAllFinishNaire({commit}){
      return myAxios
        .post('evaluation/finishedList')
        .then(res => {
          // 查询结果进行提交
          commit('updateNaire',res.data)
          console.log('log')
          console.log(res)
          return true
        }).catch(reason => {
          return false
        })
    }
  },
  modules:{
    questionnaire
  },
  getters:{}
}
