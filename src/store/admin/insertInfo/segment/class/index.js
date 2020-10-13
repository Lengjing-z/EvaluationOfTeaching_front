import post from "../../../../util";
import qs from 'qs'
const baseUrl = 'admin/insertInfo/segment/class/'
export default {
  namespaced:true,
  state:{
    query:[],
    creations:[]
  },
  mutations:{
    updateQuery(state,data){
      console.log(state)
      state.creations = data
    },
    addCreations(state,data){
      state.creations = data
    }
  },
  actions:{
    create({state},init){
      console.log(init);
      return post(baseUrl+'create',init,res=>{
        console.log('success');
        return res.data
      })
    },
    submit({status},init){
      console.log(init);
      return post(baseUrl+'submit',init,res=>{
        console.log('success');
        return res.data
      })
    },
  },
  modules:{},
  getters:{}
}
