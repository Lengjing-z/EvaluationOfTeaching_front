import myAxios from "../../network/request";
export default {
  namespaced:true,
  state:{
    mine:{}
  },
  mutations:{
    updateMine(state,data){
      state.mine = data
    }
  },
  actions:{
    loadMyInfo({state,commit}){
      return myAxios
        .post('info/mine',{})
        .then(response=>{
          commit('updateMine',response.data)
        }).catch(err=>{})
    }
  }
}
