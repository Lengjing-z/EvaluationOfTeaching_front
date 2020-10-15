<template>
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <manager-setting :manager="manager"></manager-setting>
    <Curriculum></Curriculum>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Curriculum from "components/content/curriculum/Curriculum";
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
import ManagerSetting from "components/common/Manager/ManagerSetting";
export default {
  name: "CourseManager",
  data(){
    return{
      manager:[{name:'课程管理'}]
    }
  },
  components:{
    Curriculum,
    ManagerSetting,
    NavBar,
    Footer
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
