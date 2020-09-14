<template>
  <div id="app">
    <!-- <login></login> -->
    <router-view />
  </div>
</template>
<script>
  import Login from '@/views/login/Login.vue'
  export default {
    name:'app',
    components: {
      Login
    },
    computed:{},
    methods:{
      
    }
  }
</script>


<style>
@import url("./assets/css/base.css");

</style>
