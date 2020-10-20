import myAxios from "network/request"
import post from "../util";
import qs from "qs";
import student from './student'
import teacher from './teacher'

export default {
  namespaced: true,
  state: {
    questionnairefinishedList: [], // 已评教列表
    finishedDetail:""
  },
  mutations: {
    updateNaire(state, data) {
      state.questionnairefinishedList = data
    },
    updatefinishedDetail(state,data){
      state.finishedDetail=data
    }
  },
  actions: {
    // 查询评教结果列表
    getFinishedList({commit}) {
      return myAxios
        .post('evaluation/finishedList')
        .then(res => {
          commit('updateNaire', res.data)
          console.log(res)
          // console.log(JSON.stringify(res))
          return true
        }).catch(reason => {
          return false
        })
    },
    //  查看学生已评教的问卷信息详情
    getFinishQuestionnaireDetail({commit}, id) {
      return myAxios
        .post('evaluation/detail', qs.stringify({id: id}))
        .then(res => {
          // console.log(res)
          commit("updatefinishedDetail",res.data)
          return 'success'
        }).catch(err => {
          console.log(err)
          return "false"
        })
    }
  },
  modules: {
    student,
    teacher
  },
  getters: {}
}
