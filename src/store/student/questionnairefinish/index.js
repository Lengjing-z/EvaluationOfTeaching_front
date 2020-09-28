import myAxios from "network/request"
import post from "../../util";
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
    // 查询所有已评教的问卷信息
    selectAllFinishNaire({commit}){
      return myAxios
        .post('evaluation/finishedList')
        .then(res => {
          commit('updateNaire',res.data)
          // console.log(res)
          console.log(JSON.stringify(res))
          return true
        }).catch(reason => {
          return false
        })
    }
  },
  modules:{},
  getters:{}
}
