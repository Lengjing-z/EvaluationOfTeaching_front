import myAxios from "network/request"
import qs from 'qs'
import post from "@/store/util";

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
      return myAxios.post("/beEvaluation/institute/all")
        .then(res => {
          commit("updateAll", res.data)
          console.log("beEvaluation/institute/all", res.data)
          return true
        }).catch(err => {
          console.log(err)
          return false
        })

    },
    getDetail({commit}, root) {
      return post("beEvaluation/institute/detail", {}, res => {
        commit("updateAll", res.data)
      })
    },
    getProgress({commit}, sttId) {
      return post("beEvaluation/institute/progress", qs.stringify({sttId: sttId}), res => {
        commit("updateProgress", res.data)
        console.log("beEvaluation/institute/progress", res.data)
        return true
      })
    }
  },
  modules: {},
  getters: {}
}
