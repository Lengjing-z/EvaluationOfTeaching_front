import myAxios from "../../../network/request";
import post from "../../util";
import qs from 'qs'
const baseUrl = 'admin/student/'
export default {
  namespaced:true,
  state:{
    query:[]
  },
  mutations:{
    updateQuery(state,data){
      state.query = data
    }
  },
  actions:{
    loadQuery({commit},condition){
      return post(baseUrl+'query',qs.stringify(condition),res=>{
        commit('updateQuery',res.data)
      })
    }
  },
  modules:{},
  getters:{}
}
