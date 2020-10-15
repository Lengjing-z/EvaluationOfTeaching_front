import segment from './segment'
import post from "../../util";
import myAxios from "network/request";
export default {
  namespaced: true,
  mutations:{

  },
  state:{},
  actions:{
    insertUser({commit},data){

      return myAxios.post("admin/insertInfo/user",data)
        .then(res =>{
          console.log("admin/insertInfo/user", res.data);
          return true
        })
        .catch(err =>{
          console.log(err);
          return false;
        })
    }

  },
  modules:{
    segment
  },
  getters:{}
}
