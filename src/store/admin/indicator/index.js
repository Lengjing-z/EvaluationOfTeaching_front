import myAxios from "network/request"
import qs from "qs"
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
  let tree = queryNodeByPa(li, null)[0]
  dfs(tree, li)
  return tree
}

function queryNodeByPa(li, paId) {
  return li.filter(item => { return item.paNode === paId })
}

function dfs(node, li) {
  node.children = queryNodeByPa(li, node.id)
  node.children.forEach(item => dfs(item, li))
}

export default {
  namespaced:true,
  state:{
    indicatorAll:[],
    indicatorDetail:[],
    indicatorTemp:[],
    current:{}, // 添加指标的当前指标
    currentRow:{}, // 问题当前行
  },
  mutations:{
    updateindicatorAll(state,data){
      state.indicatorAll = data
    },
    updateindicatorDetail(state,data){
      state.indicatorDetail = data
    },
    updateindicatorTemp(state,data){
      state.indicatorTemp = data
    },
    addCurrent(state, data) {
      // state.current.push(data)
      state.current = data
      console.log(state.current)
    },
    clearCurrent(state){
      state.current = [];
    },
    updateCurrentRow(state,data){
      state.currentRow = data
    }
  },
  actions:{
    getAll({commit}){
      return myAxios.post("admin/indicator/all")
        .then(res =>{
          commit("updateindicatorAll",res.data)
          console.log("indicatorAll",res.data)
          return "get indicatorAll success"
        })
    },
    getDetail({commit}, root) {
      return myAxios.post("admin/indicator/detail",root)
        .then(res =>{
          commit("updateindicatorDetail",res.data)
          // console.log(res.data)
          let maxid = 0
          res.data.forEach(item =>{
            if(Number(item.id)> maxid)
              maxid = Number(item.id)
          })
          return maxid
        })
    },
    getTemp({commit}, root){
      return myAxios.post("admin/indicator/detail",root)
        .then(res =>{
          commit("updateindicatorTemp",res.data)
          return "updateindicatorTemp success"
        })
    },
    createIndicator({commit},newIndicator){
      const list = translateTreeToList(newIndicator)
      console.log("list")
      console.log(list)
      return myAxios.post("admin/indicator/create",qs.stringify(list))
        .then(res =>{
          console.log(res)
          return "createIndicator success"
        }).catch(err =>{
          console.log(err)
        })
    },
    createQuestionnaire({commit},data){
      return myAxios.post("admin/questionnaire/create",data)
        .then(res =>{
          console.log(res)
          return true
        }).catch(err =>{
          console.log(err);
          return false
        })
    }
  },
  modules:{},
  getters:{
    // getTndicatorList(state,tree){
    //   return translateTreeToList(tree);
    // },
    getTndicatorTree(state){
      // console.log("li>"+li);
      return transalteListToTree(state.indicatorDetail);
    },
    getTndicatorTempTree(state){
      // console.log("li>"+li);
      return transalteListToTree(state.indicatorTemp);
    },
  }
}