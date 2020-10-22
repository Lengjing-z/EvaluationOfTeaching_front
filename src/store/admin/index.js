import myAxios from "../../network/request";
import post from "../util";
import power from "./power";
import clazz from './class'
import student from './student'
import indicator from './indicator'
import questionnaire from './questionnaire'
import users from './users'
import course from './course'
import insertInfo from './insertInfo'
import evaluation from './evaluation'
import user from './user'
import institute from './institute'
export default {
  namespaced: true,
  mutations:{

  },
  state:{},
  actions:{},
  modules:{
    power,
    'class': clazz,
    student,
    indicator,
    questionnaire,
    users,
    course,
    insertInfo,
    user,
    institute,
    evaluation
  },
  getters:{
    generateDiagramData(){
      return (indicators, answers)=>{
        let data = [];
        (function dfs(indicators, answers,children){
          indicators.forEach(indi=>{
            let ans = answers.filter(item=>indi.id==item.indexId);
            children.push({
              name: indi.name,
              value:ans.length>0?ans.reduce((total,current)=>total+parseFloat(current.answer),0)*parseFloat(indi.rate):0,
              children:[]
            })
            dfs(indi.children,answers,children[children.length-1].children)
            if(children[children.length-1].children.length>0) children[children.length-1].value = children[children.length-1].children.reduce((total,pre)=>total+pre.value,0)
          })
        })(indicators,answers,data)
        return data
      }
    },
    getTotal(){
      return (indicators, answers)=>{
        let data = [];
        (function dfs(indicators, answers,children){
          indicators.forEach(indi=>{
            let ans = answers.filter(item=>indi.id==item.indexId);
            children.push({
              name: indi.name,
              value:ans.length>0?ans.reduce((total,current)=>total+parseFloat(current.answer),0):0,
              children:[]
            })
            dfs(indi.children,answers,children[children.length-1].children)
            if(children[children.length-1].children.length>0) children[children.length-1].value = children[children.length-1].children.reduce((total,pre)=>total+pre.value,0)
          })
        })(indicators,answers,data)
        return data
      }
    },
    getScore(){
      return (data) =>{return data.reduce((sum,pre)=>pre.value+sum,0)}
    }
  }
}
