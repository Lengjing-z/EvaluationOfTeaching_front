<template>
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <div id="nav_manager-user">
      <b-breadcrumb>
        <b-breadcrumb-item @click="toIndex()" href="#home">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
          首页
        </b-breadcrumb-item>
        <b-breadcrumb-item href="#foo">课程管理</b-breadcrumb-item>
      </b-breadcrumb>
    </div>
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
export default {
  name: "CourseManager",
  components:{
    Curriculum,
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
