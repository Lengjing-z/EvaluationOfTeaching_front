<template xmlns="">
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
          <div class="span10 col-md-12 col-lg-9">
            <!--主体内容-->
            <function-list></function-list>
          </div>
          <div class="span2 d-none d-lg-block ">
            <div id="myCanvasContainer">
              <canvas width="270" height="400" id="myCanvas">
                <p>Anything in here will be replaced on browsers that support the canvas element</p>
              </canvas>
            </div>
            <div id="tags">
              <ul>
                <li><a href="http://www.google.com" target="_blank">Google</a></li>
                <li><a href="/fish">Fish</a></li>
                <li><a href="/chips">Chips</a></li>
                <li><a href="/salt">Salt</a></li>
                <li><a href="/vinegar">Vinegar</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
import Function from "components/common/function/Form";
import FunctionList from "../../components/content/index/funlist/FunctionList";

import("assets/icon/school/iconfont")
import "assets/tagcanvas.min"

export default {
  name: 'Index',
  components: {
    NavBar,
    PicSlide,
    Footer,
    Function,
    FunctionList
  },
  data() {
    return {}
  },
  created: function () {

  },
  mounted() {
    this.$store.dispatch('admin/power/loadAll')

    this.$store.dispatch('admin/power/loadQuery', {uId: this.$store.state.info.mine.id}).then(() => {
      // window.console.log(this.$store.state.admin.power.query)
    })
    TagCanvas.Start('myCanvas', 'tags', {
      textColour: '#ff0000',
      outlineColour: '#ff00ff',
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05
    });

  }
};
</script>

<style scoped>
@import url('~@/assets/css/index.css');

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#tags{
  display: none;
}
</style>
