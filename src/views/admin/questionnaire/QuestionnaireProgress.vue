<template>
  <div>
    <nav-bar></nav-bar>
    <manager-setting :manager = "manager"></manager-setting>
    <div class='all d-none d-lg-block'>
      <div class='box'>
          <div class='card bg-01'><span class='card-content' @click="toStudent">student
          </span></div>
      </div>
      <div class='box'>
          <div class='card bg-02'><span class='card-content' @click="toTeacher">teacher
          </span></div>
      </div>
    </div>
    <div class="container mt-3 mb-5">
      <header>
        <h3>评教管理</h3>
      </header>
      <div class="mb-3 mt-3 d-md-block d-lg-none">
        <b-button id="button-3" variant="outline-success" @click="toStudent">student</b-button>
        <b-button id="button-2" variant="outline-success" @click="toTeacher">teacher</b-button>
      </div>

      <router-view></router-view>
    </div>


    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
import ManagerSetting from "components/common/Manager/ManagerSetting";
export default {
  //  评教管理
  //  查看问卷的状态
  name: "QuestionnaireProgress",
  data() {
    return {
      manager:[{name:"评教管理"}]
    }
  },
  created() {
    this.$store.dispatch("admin/evaluation/getStudentAllList")
    .then(res =>{
      // console.log(res)
      let studentAll = this.$store.state.admin.evaluation.studentAllList;
      // 数据进行处理  加入进度
      studentAll.forEach(item => {
        this.$store.dispatch("admin/evaluation/getStudentProgress", item.stId)
          .then(re => {
            let finishNum = 0;
            re.forEach(ite => {
              // console.log(ite);
              if (ite.isFinished) finishNum++
            });
            // item.ppp = finishNum;
            this.$set(item,'pro',finishNum+"/"+re.length)
          })
      })
      this.$store.commit("admin/evaluation/updateStudentAllList",studentAll)
      this.$router.push({path:'/questionnaireProgress/student'})
    })
  },
  components:{
    NavBar,
    Footer,
    ManagerSetting,
  },
  methods:{
    toStudent(){
      this.$store.dispatch("admin/evaluation/getStudentAllList")
        .then(res =>{
          let studentAll = this.$store.state.admin.evaluation.studentAllList;
          // 数据进行处理  加入进度
          studentAll.forEach(item => {
            this.$store.dispatch("admin/evaluation/getStudentProgress", item.stId)
              .then(re => {
                let finishNum = 0;
                re.forEach(ite => {
                  if (ite.isFinished) finishNum++
                });
                this.$set(item,'pro',finishNum+"/"+re.length)
              })
          })
          this.$store.commit("admin/evaluation/updateStudentAllList",studentAll)
          this.$router.push({path:'/questionnaireProgress/student'})
        })
    },
    toTeacher(){
      this.$store.dispatch("admin/evaluation/getTeacherAllList")
        .then(res =>{
          let teacherAll = this.$store.state.admin.evaluation.teacherAllList;
          // 数据进行处理  加入进度
          teacherAll.forEach(item => {
            this.$store.dispatch("admin/evaluation/getTeacherProgress", item.id)
              .then(re => {
                let finishNum = 0;
                re.forEach(ite => {
                  if (ite.isFinished) finishNum++
                });
                this.$set(item,'pro',finishNum+"/"+re.length)
              })
          })
          this.$store.commit("admin/evaluation/updateTeacherAllList",teacherAll)
          this.$router.push({path:'/questionnaireProgress/teacher'})
        })
    }
  }

}
</script>

<style scoped>
.all {
  position: fixed;
  width: 0;
  overflow: visible;
  z-index: 9999;
}
.box {
  display: inline-block;
  float: right;
  clear: both
}
.card {
  position: relative;
  left: 2.5rem  /* 40/16 */;
  padding: 1rem  /* 16/16 */ 2rem  /* 32/16 */ 1rem  /* 16/16 */ 4rem  /* 64/16 */;
  margin: 0.5rem  /* 8/16 */;
  x-box-shadow: 0 0 0.5rem  /* 8/16 */ 0 rgba(0, 0, 0, .5);
  box-shadow: 0.5rem  /* 8/16 */ 0 0.5rem  /* 8/16 */ -0.5rem  /* -8/16 */ rgba(0, 0, 0, .5);
  background: #fff;
  transition: all .3s ease-in-out .1s;
  z-index: 999;

}

.card:hover {
  position: relative;
  left: 100%;
  margin-left: -2rem  /* -32/16 */;
  box-shadow: 0 -0.5rem  /* -8/16 */ 0.5rem  /* 8/16 */ -0.5rem  /* -8/16 */ rgba(0, 0, 0, .5), 0 0.5rem  /* 8/16 */ 0.5rem  /* 8/16 */ -0.5rem  /* -8/16 */ rgba(0, 0, 0, .5);
  transition: all .3s ease-in-out
}
.card-content {
  color: #fff;
  font-family: droid sans, sans-serif;
  font-size: 1rem  /* 16/16 */;
  font-weight: 700;
  white-space: nowrap
}
.bg-01 {
  background: #539770
}

.bg-02 {
  background: #be7467
}

</style>
