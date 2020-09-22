<template>
<div>
<header>
  <NavBar></NavBar>
</header>
  <div id="nav_manager-user">
    <b-breadcrumb>
      <b-breadcrumb-item @click="user" href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        用户管理
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">管理员</b-breadcrumb-item>
      <b-breadcrumb-item href="#bar">教师</b-breadcrumb-item>
      <b-breadcrumb-item active>学生</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
  <div id="nav_manager-department">
    <b-breadcrumb>
      <b-breadcrumb-item @click="department" href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        院系管理
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">学院管理</b-breadcrumb-item>
      <b-breadcrumb-item href="#bar">老师管理</b-breadcrumb-item>
      <b-breadcrumb-item active>班级管理</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
  <div id="nav_manager_subject">
    <b-breadcrumb>
      <b-breadcrumb-item @click="Examination1" href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        指标管理
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">题目管理</b-breadcrumb-item>
      <b-breadcrumb-item href="#bar">老师管理</b-breadcrumb-item>
      <b-breadcrumb-item active>班级管理</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
  <div>
    <MessCard v-if="isUser"></MessCard>
    <DepartmentCard v-if="isDepartment"></DepartmentCard>
    <Examination v-if="isExamination"></Examination>
  </div>
<!--  <div class="show"></div>-->
  <footer>
    <Footer></Footer>
  </footer>
</div>
</template>
<script>
  import NavBar from "components/content/nav/NavBar";
  import Footer from "components/content/footer/Footer";
  import BreadcrumbNav from "components/common/breadcrumbnav/BreadcrumbNav";
  import MessCard from "components/content/messcard/MessCard";
  import DepartmentCard from "components/content/departmentcard/DepartmentCard";
  import Examination from "components/content/examination/Examination";
  export default {
    name: "Manager",
    components:{
      NavBar,
      Footer,
      BreadcrumbNav,
      MessCard,
      DepartmentCard,
      Examination
    },
    data() {
      return {
        isUser:true,
        isDepartment:false,
        isExamination:false
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      user(){
        this.isUser = true;
        this.isDepartment = false;
        this.isExamination = false
      },
      department(){
        this.isUser = false;
        this.isDepartment = true;
        this.isExamination = false
      },
      Examination1(){
        this.isUser = false;
        this.isDepartment = false;
        this.isExamination = true
      }
    }
  }

</script>
<style  scoped="scoped">
.show{
  padding-bottom: 900px;
}
header{
  background-color: #0a408a;
  margin-bottom: 20px;
}
#nav_manager-user,#nav_manager_subject,#nav_manager-department{
  width: 80%;
  color: black;
  margin:0 auto;
}
</style>
