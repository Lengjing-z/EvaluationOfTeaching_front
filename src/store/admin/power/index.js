import myAxios from "../../../network/request";
import post from "../../util";
import qs from 'qs'
const baseUrl = 'admin/power/'
function translateTreeToList(tree) {
  const li = [];
  li.push(tree)
  tree.children.forEach(child=>{
    child.parent = tree
    translateTreeToList(child,li)
  })
  return li;
}

function transalteListToTree(li) {
  let tree = {
    id:0,
    name:'root',
    end:false,
    pnode:null,
    role:false,
    children:[]
  }
  dfs(tree, li)
  return tree
}

function queryNodeByPa(li, paId) {
  return li.filter(item => { return item.pnode === paId })
}

function dfs(node, li) {
  node.children = queryNodeByPa(li, node.id)
  node.children.forEach(item => dfs(item, li))
}


export default {
  namespaced:true,
  state:{
    all:[],
    query:[],
    update:[]
  },
  mutations:{
    updateAll(state,data){
      state.all = data
    },
    updateQuery(state,data){
      state.query = data
    },
    updateUp(state,data){
      state.update = data
    }
  },
  actions:{
    loadAll({commit}){
      commit('updateAll',[])
      return post(baseUrl+'all',{},res=>{
        commit('updateAll',res.data)
        // console.log(res.data)
        return true
      })
    },
    loadQuery({commit},condition){
      return post(baseUrl+'query',condition,res=>{
        commit('updateQuery',res.data)
      })
    },
    updateUserPowers({commit,state}){
      let del = state.query.filter( item=> !state.update.some(up=>up.id == item.id))
      let add = state.update.filter(item=>item.id === undefined)
      return Promise.all([
        post(baseUrl+'del',del,res=>res.data),
        post(baseUrl+'add',add,res=>res.data)
      ])
    }
  },
  modules:{},
  getters:{
    getAllPowerTree(state){
      // console.log("li>"+li);
      // console.log(transalteListToTree(state.all))
      return transalteListToTree(state.all);
    },
  }
}
