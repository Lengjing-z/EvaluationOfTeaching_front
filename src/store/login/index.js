import myAxios from "../../network/request";
import qs from 'qs'
export default {
  state:{
    loginForm: {
      username: '',
      password:''
    },
    loginStatus: ''
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

      let devAccount={
        username: '10100114',
        password: '654321'
      }

      return myAxios
        .post('login',qs.stringify(devAccount))
        .then(res=>{
          commit('updateLoginStatus',res.data)
          return res.data
        }).catch(err=>{
          return err
      })
    }
  }
}
