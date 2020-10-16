import myAxios from "network/request"
import qs from 'qs'
import post from "@/store/util";

let baseUrl = 'http://localhost:8080/back/'
export default {
  namespaced: true,
  state: {
    all: [],
    detail: [],
    progress: [],
    currentRowTarget:[]
  },
  mutations: {
    updateAll(state, data) {
      state.all = data
    },
    updateDetail(state, data) {
      state.detail = data
    },
    updateProgress(state, data) {
      state.progress = data
    }
  },
  actions: {
    getAll({dispatch,commit,state}) {
      // 获得所有同行跑评教列表
      return myAxios.post(baseUrl + "/beEvaluation/course/all")
        .then(res => {
          commit("updateAll", res.data)
          console.log("beEvaluation/course/all", res.data)
        }).catch(err => {
          console.log(err)
          return false
        })
    },
    getDetail({commit}, sttId) {
      return post(baseUrl + "beEvaluation/course/detail", qs.stringify({sttId}), res => {
        commit("updateAll", res.data)
        console.log("beEvaluation/course/detail", res.data)
        return res.data
      })
    },
    getProgress({commit}, sttId) {
      return post(baseUrl + "beEvaluation/course/progress", qs.stringify({sttId: sttId}), res => {
        commit("updateProgress", res.data)
        // console.log("beEvaluation/course/progress", res.data)
        return res.data
      })
    }
  },
  modules: {},
  getters: {}
}
