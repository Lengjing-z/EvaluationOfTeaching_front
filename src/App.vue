<template id="index">
  <div id="app">
    <introduce></introduce>
  </div>
</template>
<script>
  import Login from 'views/login/login.vue';
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

</style>
