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
    login({commit,state}){
      return myAxios
        .post('login',qs.stringify(state.loginForm))
        .then(res=>{
          commit('updateLoginStatus',res.data)
          return res.data
          console.log('login'  + res);
        }).catch(err=>{
          return err
      })
    },

  }
}
