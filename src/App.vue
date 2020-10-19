<template id="index">
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Login from 'views/login/Login.vue';
import Footer from "components/content/footer/Footer";
export default {
  name: 'app',
  components: {
    Login,
    Footer
  },
  created() {
//在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }

//在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  }
}
</script>


<style>
@import url("./assets/css/base.css");
#app{
  min-height:100%;
  position:relative;
}
#footer{

}
</style>
