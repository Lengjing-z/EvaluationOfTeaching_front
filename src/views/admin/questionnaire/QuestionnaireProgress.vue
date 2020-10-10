<template>
  <div>
    <nav-bar></nav-bar>
    <manager-setting :manager = "manager"></manager-setting>
    <div class="container mt-3 mb-5">
      <header>
        <h3>问卷信息管理</h3>
      </header>
      <vxe-table
        stripe
        :data="progressQuestionnaires">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
        <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
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
  //  评教管理
  //  查看问卷的状态
  name: "QuestionnaireProgress",
  data() {
    return {
      manager:[{name:"问卷信息管理"}],
      progressQuestionnaires:[]
    }
  },
  created() {
    this.$store.dispatch("beEvaluation/progressing/getProgressingList")
    .then(res =>{
      console.log(res)
      this.progressQuestionnaires = this.$store.state["beEvaluation/progressing/progressingList"]
      console.log(this.progressQuestionnaires)
    })
  },
  components:{
    NavBar,
    Footer,
    ManagerSetting,
  }

}
</script>

<style scoped>

</style>
