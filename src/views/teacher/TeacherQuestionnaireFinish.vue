<template>
<div>
  <nav-bar></nav-bar>
  <manager-setting :manager="manager"></manager-setting>
  <div class="container mb-5">
    <questionnaire-list :questionnairelist="questionnairelist" ></questionnaire-list>
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
  name: "TeacherQuestionnaireFinish",
  data(){
    return{
      manager:[{name:"评教结果"}]
    }
  },
  computed:{
    questionnairelist() {
      // const nairelist = [];
      const list = this.$store.state.student.questionnaire.questionnairelist;
      // list.forEach(item => {
      //   nairelist.push({title:item.title,teacher:item.beEvaUsers[0].name})
      // })
      // console.log(list)
      return list
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
