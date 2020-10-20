<template>
  <div>
    <nav-bar></nav-bar>
    <manager-setting :manager="manager"></manager-setting>
    <div class='all d-none d-lg-block'>
      <div class='box' @click="toStudent">
        <a>
          <div class='card bg-01'><span class='card-content'>student
          </span></div>
        </a>
      </div>
      <div class='box' @click="toTeacher">
        <a>
          <div class='card bg-02'><span class='card-content'>teacher
          </span></div>
        </a>
      </div>
    </div>
    <div class="container mt-3 mb-5" style="min-height: 564px">
      <header>
        <h3>查看结果</h3>
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
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

export default {
  name: "TeacherQuestionnaireFinish",
  data() {
    return {
      manager: [{name: "学生评教进度"}],
      questionnaireList: [],
    }
  },
  created() {
    this.$store.dispatch("beEvaluation/course/getAll")
      .then(res => {
        let courseAll = this.$store.state.beEvaluation.course.all;
        courseAll.forEach(item => {
          this.$store.dispatch("beEvaluation/course/getProgress", item.sttId)
            .then(re => {
              let finishNum = 0;
              re.forEach(ite => {
                // console.log(ite);
                if (ite.isFinished) finishNum++
              });
              // item.ppp = finishNum;
              this.$set(item,'ppp',finishNum+"/"+re.length)
            })
        })
        this.$store.commit("beEvaluation/course/updateAll",courseAll)
        console.log("courseAll",courseAll)
        this.$router.push({
          path: '/teacherQuestionnaireFinishStatistics/student'
        })
      })
  },
  methods: {
    toStudent() {
      this.$store.dispatch("beEvaluation/course/getAll")
        .then(res => {
          let courseAll = this.$store.state.beEvaluation.course.all;
          courseAll.forEach(item => {
            this.$store.dispatch("beEvaluation/course/getProgress", item.sttId)
              .then(re => {
                let finishNum = 0;
                re.forEach(ite => {
                  // console.log(ite);
                  if (ite.isFinished) finishNum++
                });
                // item.ppp = finishNum;
                this.$set(item,'ppp',finishNum+"/"+re.length)
              })
          })
          this.$store.commit("beEvaluation/course/updateAll",courseAll)
          console.log("courseAll",courseAll)
          this.$router.push({
            path: '/teacherQuestionnaireFinishStatistics/student'
          })
        })
    },
    toTeacher() {
      this.$store.dispatch("beEvaluation/institute/getAll")
        .then(res => {
          // this.questionnaireList = this.$store.state.beEvaluation.institute.all
          this.$router.push({
            path: '/teacherQuestionnaireFinishStatistics/teacher'
          })
          // console.log(this.questionnaireList)
        })
    }
  },
  components: {
    NavBar,
    Footer,
    ManagerSetting,
  },
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
  left: 40px;
  padding: 16px 32px 16px 64px;
  margin: 8px;
  x-box-shadow: 0 0 8px 0 rgba(0, 0, 0, .5);
  box-shadow: 8px 0 8px -8px rgba(0, 0, 0, .5);
  background: #fff;
  transition: all .3s ease-in-out .1s;
  z-index: 999;

}

.card:hover {
  position: relative;
  left: 100%;
  margin-left: -32px;
  box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, .5), 0 8px 8px -8px rgba(0, 0, 0, .5);
  transition: all .3s ease-in-out
}

.card-content {
  color: #fff;
  font-family: droid sans, sans-serif;
  font-size: 16px;
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
