import myAxios from "network/request"
import post from "../../util";
const baseUrl = 'evaluation/student/'
export default {
  // 学生
  namespaced:true,
  state:{
    progressingQuestionnaireList:[], //所有待评教问卷列表
    questionnaireDetail:{} // 问卷详情
  },
  mutations:{
    updateProgressingQuestionnaireList(state,data){
      state.progressingQuestionnaireList = data
    },
    updateQuestionnaireDetail(state,data){
      state.questionnaireDetail = data
    }
  },
  actions:{
    getProgressingQuestionnaireList({commit}){
      return myAxios
        .post(baseUrl+'finishedList')
        .then(res => {
          commit('updateProgressingQuestionnaireList', res.data)
          console.log(res)
          return true
        }).catch(reason => {
          return false
        })
    },
    getQuestionnaireDetail({commit},id){
      return myAxios
        .post(baseUrl+'detail',id)
        .then(res => {
          commit('updateQuestionnaireDetail', res.data)
          console.log(res)
          return true
        }).catch(err => {
          console.log(err)
          return false
        })
    },
    submitQuestionnaire({commit},answer){
      //  ```id（具体某一次评教id） list:id(具体某个问题id) answer```
      return myAxios
        .post(baseUrl+'submit',answer)
        .then(res => {
          console.log(res)
          return true
        }).catch(err => {
          console.log(err)
          return false
        })
    }
  },
  modules:{

  },
  getters:{}
}
