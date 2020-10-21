import myAxios from "../../../network/request";
import post from "../../util";
import qs from 'qs'
const baseUrl = 'admin/class/'
export default {
  namespaced:true,
  state:{
    query:[],
    creations:[],
    q:[],
    query2:[]
  },
  mutations:{
    updateQuery(state,data){
      state.query = data
    },
    updateQuery2(state,data){
      state.query2 = data
    },
    addCreations(state,data){
      state.creations = data
    },
    updateQuery1(state,data){
      state.q = data
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
        // console.log('success');
        return res.data
      })
    },
    allStudent({commit},cid){
      // console.log(cid);
      return post('admin/class/allStudent',qs.stringify({cid:cid}),res=>{
        // console.log('success');
        // console.log(res.data);
        commit('updateQuery1',res.data)
        return res.data
      })
    },
    query({commit},classname){
      // console.log(classname + '1111');
      return post(baseUrl+'query',qs.stringify({name:''}),res=>{
        // console.log("queryClazz",res.data);
        commit('updateQuery',res.data)
        return res.data
      })
    },
    queryC({commit},classname){
      console.log(classname , 'classname');
      return post(baseUrl+'query',qs.stringify(classname),res=>{
        // console.log("queryClazz",res.data);
        commit('updateQuery2',res.data)
        return res.data
      })
    },

  },
  modules:{},
  getters:{}
}
