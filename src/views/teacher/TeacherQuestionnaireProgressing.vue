<template>
  <div>
    <nav-bar></nav-bar>
    <manager-setting :manager = "manager"></manager-setting>
    <div class="container mt-3 mb-5">
      <header>
        <h3>查看评教结果</h3>
      </header>
      <vxe-table
        stripe
        :data="questionnaireList">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="title" title="Title"></vxe-table-column>
        <vxe-table-column title="操作" width="160">
          <template v-slot="{ row }">
            <vxe-button  >btn</vxe-button>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>


    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
import ManagerSetting from "components/common/Manager/ManagerSetting";
export default {
name: "TeacherQuestionnaireProgressing",
  data() {
    return {
      manager:[{name:"查看评教结果"}],
      questionnaireList:[]
    }
  },
  created() {
    this.$store.dispatch("beEvaluation/finished/getfinishedList")
      .then(res =>{
        if (res){
          this.questionnaireList = this.$store.state.beEvaluation.finished
        }
      })
  },
  components:{
    NavBar,
    Footer,
    ManagerSetting,
  },
  methods:{
    // 发布问卷
    issueQuestionnaire(questionnaire){
      this.$store.dispatch("admin/questionnaire/queryAllNaire")
      this.$store.dispatch("admin/questionnaire/queryAllNaire2")
    }
  }
}
</script>

<style scoped>

</style>
