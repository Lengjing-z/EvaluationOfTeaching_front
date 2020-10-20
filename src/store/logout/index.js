import myAxios from "../../network/request";
import qs from 'qs'
export default {
  state:{
    loginForm: {
      username: '',
      password:''
    },
    loginStatus: '',
  },
  mutations:{
    updateLoginForm(state,data){
      state.loginForm = data
    },
    updateLoginStatus(state,data){
      state.loginStatus = data
    }
  },
  actions:{
    logout({commit,state}){
      return myAxios
        .post('logout')
        .then(res=>{
          console.log("success");
          commit('updateLoginStatus',res.data)
          return res.data
        }).catch(err=>{
          return err
        })
    },

  }
}
