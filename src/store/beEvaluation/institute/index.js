import myAxios from "network/request"
import qs from 'qs'
import post from "@/store/util";
let baseUrl = 'http://localhost:8080/back/'
export default {
  namespaced: true,
  state: {
    all: [],
    detail: "",
    progress: []
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
    getAll({commit}) {
      // 获得所有同行跑评教列表
      return myAxios.post(baseUrl+"beEvaluation/institute/all")
        .then(res => {
          commit("updateAll", res.data)
          console.log("beEvaluation/institute/all", res.data)
          return true
        }).catch(err => {
          console.log(err)
          return false
        })

    },
    getDetail({commit}, tttId) {
      console.log(tttId)
      return post(baseUrl+"beEvaluation/institute/detail", qs.stringify({tttId: tttId}), res => {
        commit("updateDetail", res.data)
        console.log("beEvaluation/institute/detail",res.data)
        return res.data.answers
      })
    },
    getProgress({commit}, tttId) {
      console.log(tttId);
      return post(baseUrl+"beEvaluation/institute/progress", qs.stringify({tttId: tttId}), res => {
        commit("updateProgress", res.data)
        console.log("beEvaluation/institute/progress", res.data)
        return res.data
      })
    }
  },
  modules: {},
  getters: {}
}
