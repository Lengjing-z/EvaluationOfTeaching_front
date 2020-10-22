import myAxios from "../../network/request";
const baseUrl = 'class/'
import post from "../util";
import qs from "qs";


export default {
  namespaced:true,
  state:{
    enrolled:[],
    taught:[],
    query:[]
  },
  mutations:{
    updateEnrolled(state,data){
      state.enrolled = data
    },
    updateTaught(state,data){
      state.taught = data
    },
    updateQuery(state,data){
      state.query = data
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
    },
    allEvaluations({commit},cId){
      return post(baseUrl+'allEvaluations',qs.stringify({cId}),res=>{
        // console.log('success');
        console.log(res.data);
        commit('updateQuery',res.data)
        return res.data
      })
    }
  },
  modules:{},
  getters:{}
}
