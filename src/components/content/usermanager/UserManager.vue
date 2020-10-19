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
        <b-breadcrumb-item href="#foo">用户管理</b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <MessCard></MessCard>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import MessCard from "components/content/messcard/MessCard";
import Footer from "components/content/footer/Footer";
export default {
  name: "UserManager",
  components:{
    MessCard,
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
.show{
  padding-bottom: 56.25rem  /* 900/16 */;
}
header{
  background-color: #0a408a;
  margin-bottom: 1.25rem  /* 20/16 */;
}
#nav_manager-user{
  width: 80%;
  color: black;
  margin:0 auto;
}
</style>
