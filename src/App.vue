<template id="index">
  <div id="app">
<!--    <login></login>-->
    <router-view />
  </div>
</template>
<script>
  import Login from 'views/login/Login.vue';
  import Introduce from 'views/introduce/introduce.vue'
  export default {
    name:'app',
    components: {
      Login,
      Introduce
    }
  }
</script>


<style>
@import url("./assets/css/base.css");
.el-header{
  padding: 0;
}

</style>
