<template>
  <div>
    <nav-bar></nav-bar>
    <manager-setting :manager = "manager"></manager-setting>
    <Questionnaire></Questionnaire>

    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
import ManagerSetting from "components/common/Manager/ManagerSetting";
import Questionnaire from "components/content/questionnaire/Questionnaire";

export default {
  name: "QuertionnaireManager",
  data(){
    return{
      manager: [{name:'问卷管理'}]
    }
  },
  components: {
    NavBar,
    Footer,
    ManagerSetting,
    Questionnaire
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
