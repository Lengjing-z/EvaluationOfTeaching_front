<template>
  <el-container>
    <el-header><Nav></Nav></el-header>
    <div>
      <pic-slide></pic-slide>
    </div>
    <div class="el-container container">
      <el-main>Main</el-main>
      <el-aside width="200px">Aside</el-aside>
    </div>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  import Nav from "components/content/nav/Nav.vue";
  import PicSlide from "components/content/index/slide/PicSlide";

  export default {
    name: 'Index',
    components: {
      Nav,
      PicSlide
    }
  };
</script>

<style scoped>
  @import url("~@/assets/css/index.css");
</style>
