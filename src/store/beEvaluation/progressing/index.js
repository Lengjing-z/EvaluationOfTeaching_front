import myAxios from "network/request"
import post from "../../util";
const baseUrl = 'beEvaluation/progressing/'
export default {
  namespaced:true,
  state:{
    progressingList:[],
    studentDetail:{},
    teacherDetail:{}
  },
  mutations:{
    updateProgressingList(state,data){
      state.progressingList =data
    },
    updateStudentDetail(state,data){
      state.studentDetail =data
    },
    updateTeacherDetail(state,data){
      state.teacherDetail =data
    }
  },
  actions:{
    getProgressingList({commit}){
      return myAxios
        .post(baseUrl+'list')
        .then(res => {
          commit('updateProgressingList', res.data)
          console.log(res)
          return true
        }).catch(err => {
          console.log(err)
          return false
        })
    },
    getProgressingStudentDetail({commit},id){
      return myAxios
        .post(baseUrl+'student/detail',id)
        .then(res => {
          commit('updateStudentDetail', res.data)
          console.log(res)
          return true
        }).catch(err => {
          console.log(err)
          return false
        })
    },
    getProgressingTeacherDetail({commit},id){
      return myAxios
        .post(baseUrl+'teacher/detail',id)
        .then(res => {
          commit('updateTeacherDetail', res.data)
          console.log(res)
          return true
        }).catch(err => {
          console.log(err)
          return false
        })
    },
  },
  modules:{},
  getters:{}
}
