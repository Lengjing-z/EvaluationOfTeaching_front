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
        <b-breadcrumb-item href="#foo">学院管理</b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <DepartmentCard></DepartmentCard>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import DepartmentCard from "components/content/departmentcard/DepartmentCard";
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
export default {
  name: "DepartmentMana",
  components:{
    NavBar,
    Footer,
    DepartmentCard
  }
}
</script>

<style scoped>
#nav_manager-user{
  width: 80%;
  margin: 0 auto;
}
</style>
