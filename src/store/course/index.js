import myAxios from "../../network/request";
const baseUrl = 'course/'
import post from "../util";


export default {
  namespaced:true,
  state:{
    enrolled:[],
    taught:[]
  },
  mutations:{
    updateEnrolled(state,data){
      state.enrolled = data
    },
    updateTaught(state,data){
      state.taught = data
    }
  },
  actions:{
    loadEnrolled({commit}){
      return post(baseUrl+'enrolled',{}, response=>{
        window.console.log(response.data)
        commit('updateEnrolled',response.data)
      })
    },
    loadTaught({commit}){
      return post(baseUrl+'taught',{},res=>{
        window.console.log(res.data)
        commit('updateTaught',res.data)
      })
    }
  },
  modules:{},
  getters:{}
}
