import myAxios from "../../../network/request";
import post from "../../util";
import qs from 'qs'
const baseUrl = 'admin/power/'
export default {
  namespaced:true,
  state:{
    all:[],
    query:[],
    update:[]
  },
  mutations:{
    updateAll(state,data){
      state.all = data
    },
    updateQuery(state,data){
      state.query = data
    },
    updateUp(state,data){
      state.update = data
    }
  },
  actions:{
    loadAll({commit}){
      return post(baseUrl+'all',{},res=>{
        commit('updateAll',res.data)
      })
    },
    loadQuery({commit},condition){
      return post(baseUrl+'query',condition,res=>{
        commit('updateQuery',res.data)
      })
    },
    updateUserPowers({commit,state}){
      let del = state.query.filter( item=> !state.update.some(up=>up.id == item.id))
      let add = state.update.filter(item=>item.id === undefined)
      return Promise.all([
        post(baseUrl+'del',del,res=>res.data),
        post(baseUrl+'add',add,res=>res.data)
      ])
    }
  },
  modules:{},
  getters:{
    
  }
}
