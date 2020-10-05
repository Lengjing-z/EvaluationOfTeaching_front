import myAxios from "../../network/request";
import post from "@/store/util";
export default {
  namespaced:true,
  state:{
    mine:{},
    powers:[]
  },
  mutations:{
    updateMine(state,data){
      state.mine = data
    },
    updatePowers(state,data){
      state.powers = data
    }
  },
  actions:{
    loadMyInfo({state,commit}){
      return myAxios
        .post('info/mine',{})
        .then(response=>{
          commit('updateMine',response.data)
          post("power/mine",{},res =>{
            commit("updatePowers",res.data)
          })
        }).catch(err=>{})
    }
  }
}
