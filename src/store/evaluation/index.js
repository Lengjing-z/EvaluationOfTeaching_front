import myAxios from "network/request"
import post from "../util";
import qs from "qs";

export default {
  namespaced: true,
  state: {
    questionnairefinishedList: null, // 已评教列表
    finishedlist:null
  },
  mutations: {
    updateNaire(state, data) {
      state.questionnairefinishedList = data
    },
    updatefinishedlist(state,data){
      state.finishedlist=data
    }
  },
  actions: {
    // 查询学生已评教的问卷信息
    getStudentFinishedList({commit}) {
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
    getStudentDetail({commit}, id) {
      // console.log("id="+id)
      // return post("evaluation/student/progressing",id,res =>{
      //   return res
      // })

      return myAxios
        .post('evaluation/detail', qs.stringify({id: id}))
        .then(res => {
          // console.log(res)
          commit("updatefinishedlist",res.data)
          return 'success'
        }).catch(err => {
          console.log(err)
          return "false"
        })
    }
  },
  modules: {
  },
  getters: {}
}
