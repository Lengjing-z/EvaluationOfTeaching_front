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
      return myAxios.post(baseUrl+"admin/student/evaluation/detail",qs.stringify({sttId:id}))
        .then(res =>{
          commit("updateStudentDetail",res.data)
          console.log("admin/student/evaluation/detail",res.data)
          return res.data
        })
    },
    getTeacherDetail({commit},id){
      return myAxios.post(baseUrl+"admin/teacher/evaluation/detail",qs.stringify({tttId:id}))
        .then(res =>{
          commit("updateTeacherDetail",res.data)
          console.log("admin/teacher/evaluation/detail",res.data)
          return res.data
        })
    },
    getStudentProgress({commit}, sttId) {
      return post(baseUrl + "admin/student/evaluation/progress", qs.stringify({sttId: sttId}), res => {
        console.log("admin/student/evaluation/progress", res.data)
        return res.data
      })
    },
    getTeacherProgress({commit}, tttId) {
      return post(baseUrl + "admin/teacher/evaluation/progress", qs.stringify({tttId: tttId}), res => {
        console.log("admin/teacher/evaluation/progress", res.data)
        return res.data
      })
    },
  },
  modules:{},
  getters:{}
}
