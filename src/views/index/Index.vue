<template>
  <el-container>
    <el-header><Nav></Nav></el-header>
    <div class="d-none d-md-block">
      <pic-slide></pic-slide>
    </div>
    <div id="main" class="container row">
      <el-main class="container col-sm-12 col-md-12 col-lg-9">
        <function-list></function-list>
      </el-main>
      <el-aside  class="d-sm-none d-lg-block col-lg-2 offset-md-1"></el-aside>
    </div>
    <el-footer><Footer></Footer></el-footer>
  </el-container>
</template>

<script>
  import Nav from "components/content/nav/Nav.vue";
  import PicSlide from "components/content/index/slide/PicSlide";
  import Footer from "../../components/content/footer/Footer";
  import Function from "components/common/function/Function";
  import FunctionList from "../../components/content/index/funlist/FunctionList";

  export default {
    name: 'Index',
    components: {
      Nav,
      PicSlide,
      Footer,
      Function,
      FunctionList
    }
  };
</script>

<style scoped>
  @import url("~@/assets/css/index.css");
</style>
