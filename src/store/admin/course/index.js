import myAxios from "../../../network/request";
import post from "../../util";
import qs from 'qs'
const baseUrl = 'admin/course/'
export default {
  namespaced:true,
  state:{
    query:[],
    creations:[],
    currentCCT:[]
  },
  mutations:{
    updateQuery(state,data){
      // console.log(state)
      state.query = data
    },
    addCreations(state,data){
      state.creations = data
    },
    updatecurrentCCT(state,data){
      state.currentCCT = data
    }
  },
  actions:{
    loadQuery({commit},condition){
      return post(baseUrl+'query',qs.stringify(condition),res=>{
        commit('updateQuery',res.data)
      })
    },
    create({state},init){
      console.log(init);
      return post(baseUrl+'create',init,res=>{
        console.log('success');
        return res.data
      })
    },
    query({commit},coursename){
      // console.log(coursename + '1111');
      return post(baseUrl+'query',qs.stringify(coursename),res=>{
        console.log('success');
        console.log(res.data);
        commit('updateQuery',res.data)
        return res.data
      })
    },
    queryCCT({commit},id){
    //  查询当前课程有哪些老师教哪些班级
      console.log("id=",id)
      return post(baseUrl + 'cct', qs.stringify({id: id}), res => {
        console.log("cct", res.data);
        commit('updatecurrentCCT', res.data)
        return res.data
      });
    }
  },
  modules:{},
  getters:{}
}
