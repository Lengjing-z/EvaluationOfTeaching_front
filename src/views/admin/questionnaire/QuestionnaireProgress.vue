<template>
  <div>
    <nav-bar></nav-bar>
    <manager-setting :manager = "manager"></manager-setting>
    <div class='all d-none d-lg-block'>
      <div class='box'>
        <a href='#'>
          <div class='card bg-01'><span class='card-content' @click="toStudent">student
          </span></div>
        </a>
      </div>
      <div class='box'>
        <a href='#'>
          <div class='card bg-02'><span class='card-content' @click="toTeacher">teacher
          </span></div>
        </a>
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
      manager:[{name:"评教管理"}],
      progressQuestionnaires:[]
    }
  },
  created() {
    this.$store.dispatch("admin/evaluation/getStudentAllList")
    .then(res =>{
      console.log(res)
      this.progressQuestionnaires = this.$store.state.admin.evaluation.studentAllList
      this.$router.push({path:'/questionnaireProgress/student/data',query:{data:this.progressQuestionnaires}})
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
          console.log(res)
          this.progressQuestionnaires = this.$store.state.admin.evaluation.studentAllList
          this.$router.push({path:'/questionnaireProgress/student/data',query:{data:this.progressQuestionnaires}})
        })
    },
    toTeacher(){
      this.$store.dispatch("admin/evaluation/getTeacherAllList")
        .then(res =>{
          console.log(res)
          this.progressQuestionnaires = this.$store.state.admin.evaluation.teacherAllList
          this.$router.push({path:'/questionnaireProgress/teacher/data',query:{data:this.progressQuestionnaires}})
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
