<template id="index">
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  import Login from 'views/login/Login.vue';
  export default {
    name:'app',
    components: {
      Login
    }
  }
</script>


<style>
@import url("./assets/css/base.css");

</style>
