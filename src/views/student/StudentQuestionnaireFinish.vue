<template>
<div>
  <nav-bar></nav-bar>
  <manager-setting :manager="manager"></manager-setting>
  <div class="container mb-5">
    <questionnaire-list></questionnaire-list>
  </div>
  <Footer></Footer>

</div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import ManagerSetting from "components/common/Manager/ManagerSetting";
import Footer from "components/content/footer/Footer";
import Questionnaire from "components/content/questionnaire/Questionnaire";
import QuestionnaireList from "components/content/questionnaire/QuestionnaireList";

export default {
  name: "StudentQuestionnaireFinish",
   data(){
    return{
      manager:[{name:"评教结果"}]
    }
   },
  components:{
    QuestionnaireList,
    NavBar,
    Footer,
    Questionnaire,
    ManagerSetting
  },

}
</script>

<style scoped>

</style>
