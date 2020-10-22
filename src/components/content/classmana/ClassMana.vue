<template>
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <manager-setting style="width: 75%;margin: 0 auto" :manager="manager"></manager-setting>
    <ClassManager style="width: 70%;margin: 0 auto"></ClassManager>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import ClassManager from "components/content/classmanager/ClassManager";
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
import ManagerSetting from "components/common/Manager/ManagerSetting";
export default {
  name: "ClassMana",
  data(){
    return{
      manager: [{name: "班级管理"}],
    }
  },
  components:{
    ClassManager,
    NavBar,
    Footer,
    ManagerSetting
  },
  methods:{
    toIndex(){
      this.$router.push('./index');
    },
  }
}
</script>

<style scoped>
#nav_manager-user{
  width: 80%;
  margin: 0 auto;
}
</style>
