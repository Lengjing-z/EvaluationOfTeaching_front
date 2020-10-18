import myAxios from "network/request"
import qs from 'qs'
import post from "@/store/util";
let baseUrl = 'http://localhost:8080/back/'
export default {
  namespaced:true,
  state:{
    studentAllList: [],
    studentDetail: [],
    teacherAllList: [],
    teacherDetail: []
  },
  mutations:{
    updateStudentAllList(state,data){
      state.studentAllList = data
    },
    updateTeacherAllList(state,data){
      state.teacherAllList = data
    },
    updateStudentDetail(state,data){
      state.teacherAllList = data
    },
    updateTeacherDetail(state,data){
      state.teacherDetail = data
    },
  },
  actions:{
    getStudentAllList({commit}){
      return myAxios.post(baseUrl+"admin/student/evaluation/list")
        .then(res =>{
          commit("updateStudentAllList",res.data)
          console.log("admin/student/evaluation/list",res.data)
          return true
        })
    },
    getTeacherAllList({commit}){
      return myAxios.post(baseUrl+"admin/teacher/evaluation/list")
        .then(res =>{
          commit("updateTeacherAllList",res.data)
          console.log("admin/teacher/evaluation/list",res.data)
          return true
        })
    },
    getStudentDetail({commit},id){
      return myAxios.post(baseUrl+"evaluation/student/detail",qs.stringify({sttId:id}))
        .then(res =>{
          commit("updateStudentDetail",res.data)
          console.log("evaluation/student/detail",res.data)
          return true
        })
    },
    getTeacherDetail({commit}){
      return myAxios.post(baseUrl+"evaluation/teacher/detail",qs.stringify({id:id}))
        .then(res =>{
          commit("updateTeacherDetail",res.data)
          console.log("evaluation/teacher/detail",res.data)
          return true
        })
    },
  },
  modules:{},
  getters:{}
}
