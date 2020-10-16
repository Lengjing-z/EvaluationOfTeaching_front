import myAxios from "network/request"
import post from "../../util";
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    userList: [],
    q:[]
  },
  mutations: {
    updateUserList(state, data) {
      state.userList = data
    },
    updateQuery(state,data){
      state.q = data
    }
  },
  actions: {
    allStudent({commit}){
      return post('admin/user/allStudent',{},res=>{
        console.log('success');
        console.log(res.data);
        commit('updateQuery',res.data)
        return res.data
      })
    },
    queryUserByCode({commit}, code) {
      // console.log(code)
      return post(
        "admin/user/query",
        qs.stringify({"code": code}),
        res => {
          // console.log(res.data);
          commit("updateUserList", res.data)
          console.log("queryUserByCode success")
          return res.data
        });

    }
  },
  modules: {},
  getters: {}
}
