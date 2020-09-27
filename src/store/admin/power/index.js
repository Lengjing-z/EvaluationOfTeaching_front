import myAxios from "../../../network/request";
import post from "../../util";
const baseUrl = 'admin/power/'
export default {
  namespaced:true,
  state:{
    all:[]
  },
  mutations:{
    updateAll(state,data){
      state.all = data
    }
  },
  actions:{
    loadAll({commit}){
      return post(baseUrl+'all',{},res=>{
        commit('updateAll',res.data)
      })
    }
  },
  modules:{},
  getters:{}
}
