import myAxios from "network/request"
import post from "../../util";
const baseUrl = 'beEvaluation/finished/'
export default {
  namespaced:true,
  state:{
    finishedList:[],
    instituteDetail:{},
  },
  mutations:{
    updateFinishedList(state,data){
      state.finishedList = data
    },
    updateInstituteDetail(state,data){
      state.instituteDetai = data
    }
  },
  actions:{
    getfinishedList({commit},id){
      // 查看被评教结果信息列表
      return myAxios
        .post(baseUrl+'list')
        .then(res => {
          commit('updateFinishedList', res.data)
          console.log(res)
          return true
        }).catch(err => {
          console.log(err)
          return false
        })
    },
    getInstituteDetail({commit},id){
      // 查看被同行评教结果详情
      return myAxios
        .post(baseUrl+'institute/detail',id)
        .then(res => {
          commit('updateInstituteDetail', res.data)
          console.log(res)
          return true
        }).catch(err => {
          console.log(err)
          return false
        })
    }
  },
  modules:{},
  getters:{}
}
