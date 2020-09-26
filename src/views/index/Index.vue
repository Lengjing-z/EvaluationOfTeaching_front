<template>
  <div>
<!--    导航栏-->
    <NavBar></NavBar>
    <aside class="slide d-none d-md-block">
      <!--  图片轮播   -->
      <pic-slide></pic-slide>
    </aside>
    <!--  main start  -->
    <main>
      <div class="container">
        <div class="row">
          <div class="span10 col-md-9">
            <!--主体内容-->
            <function-list></function-list>
          </div>
          <div class="span2 d-none d-md-block col-md-3">
            <!--边栏内容-->
          </div>
        </div>
      </div>
      <aside></aside>
    </main>
    <!--    main end -->
    <!--    footer stard -->
    <Footer></Footer>

  </div>

</template>

<script>
import NavBar from "components/content/nav/NavBar";
import PicSlide from "components/content/index/slide/PicSlide";
import Footer from "../../components/content/footer/Footer";
import Function from "components/common/function/Function";
import FunctionList from "../../components/content/index/funlist/FunctionList";

export default {
  name: 'Index',
  components: {
    NavBar,
    PicSlide,
    Footer,
    Function,
    FunctionList
  },
  data(){
    return {

    }
  },
  mounted() {
    let data = [
      {
      name:'add1',
      pub: true
    },{
      name:'add2',
      pub: true
    },{
      name:'add3',
      pub: true
    },{
      name:'add4',
      pub: true
    }]
    this.$store.commit('admin/class/addCreations',data)
    this.$store
      .dispatch('admin/class/create')
      .then(res=>{
        window.console.log(res)
      })
  }
};
</script>

<style scoped>
@import url('~@/assets/css/index.css');
</style>
