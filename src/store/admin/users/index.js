import myAxios from "network/request"
import post from "../../util";
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    userList: [],
    q:[],
    allTeacher: []
  },
  mutations: {
    updateUserList(state, data) {
      state.userList = data
    },
    updateQuery(state,data){
      state.q = data
    },
    updateAllTeacher(state, data) {
      state.allTeacher = data
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
          // console.log("queryUserByCode success")
          return res.data
        });

    },
    queryAllTeacher({commit}) {
      // console.log(code)
      return myAxios.post("admin/user/allTeacher")
        .then(res => {
          console.log("admin/user/allTeacher", res.data);
          commit("updateAllTeacher", res.data)
          return res.data
        }).catch(err => {
          console.log(err)
        });

    }
  },
  modules: {},
  getters: {}
}
