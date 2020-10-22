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
      <div class="container-lg overflow-hidden">
        <div class="row">
          <div class="span10 col-md-12 col-lg-9">
            <!--主体内容-->
            <function-list></function-list>
          </div>
          <div class="span2 col-md-12 col-lg-3 d-none pl-0 d-lg-block overflow-hidden">
            <div>
              <canvas class="w-100" height="400" id="myCanvas">
                <p>Anything in here will be replaced on browsers that support the canvas element</p>
              </canvas>
            </div>

            <div id="tags">
              <ul class="weighted" style="font-size: 50%" id="weightTags">
                <li><a href="#" data-weight="14" style="font-size: 2.83ex">1000</a></li>
                <li><a href="#" data-weight="18" style="font-size: 3.61ex">background</a></li>
                <li><a href="#" data-weight="40" style="font-size: 9.64ex">canvas</a></li>
                <li><a href="#" data-weight="22" style="font-size: 4.47ex">chart</a></li>
                <li><a href="#" data-weight="18" style="font-size: 3.46ex">charts</a></li>
                <li><a href="#" data-weight="60" style="font-size: 12.32ex">cloud</a></li>
                <li><a href="#" data-weight="18" style="font-size: 3.74ex">clouds</a></li>
                <li><a href="#" data-weight="17" style="font-size: 3.16ex">example</a></li>
                <li><a href="#" data-weight="18" style="font-size: 3.74ex">goat</a></li>
                <li><a href="#" data-weight="17" style="font-size: 3.16ex">goat1000</a></li>
                <li><a href="#" data-weight="30" style="font-size: 8.36ex">graph</a></li>
                <li><a href="#" data-weight="21" style="font-size: 4.36ex">graphs</a></li>
                <li><a href="#" data-weight="17" style="font-size: 3.32ex">html</a></li>
                <li><a href="#" data-weight="50" style="font-size: 10.68ex">html5</a></li>
                <li><a href="#" data-weight="23" style="font-size: 4.69ex">image</a></li>
                <li><a href="#" data-weight="24" style="font-size: 4.8ex">javascript</a></li>
                <li><a href="#" data-weight="26" style="font-size: 5.47ex">jpeg</a></li>
                <li><a href="#" data-weight="13" style="font-size: 2.65ex">jpegsaver</a></li>
                <li><a href="#" data-weight="32" style="font-size: 8.77ex">jquery</a></li>
                <li><a href="#" data-weight="13" style="font-size: 2.65ex">lib</a></li>
                <li><a href="#" data-weight="27" style="font-size: 5.92ex">library</a></li>
                <li><a href="#" data-weight="17" style="font-size: 3.32ex">link</a></li>
                <li><a href="#" data-weight="65" style="font-size: 13.23ex">php</a></li>
                <li><a href="#" data-weight="14" style="font-size: 2.83ex">plugin</a></li>
                <li><a href="#" data-weight="22" style="font-size: 4.58ex">saver</a></li>
                <li><a href="#" data-weight="17" style="font-size: 3.32ex">screensaver</a></li>
                <li><a href="#" data-weight="13" style="font-size: 2.65ex">script</a></li>
                <li><a href="#" data-weight="65" style="font-size: 13ex">svg</a></li>
                <li><a href="#" data-weight="21" style="font-size: 4.47ex">svggraph</a></li>
                <li><a href="#" data-weight="62" style="font-size: 12.44ex">tag</a></li>
                <li><a href="#" data-weight="13" style="font-size: 2.65ex">tagcanvas</a></li>
                <li><a href="#" data-weight="17" style="font-size: 3.46ex">tagcloud</a></li>
                <li><a href="#" data-weight="13" style="font-size: 2.65ex">text</a></li>
                <li><a href="#" data-weight="17" style="font-size: 3.16ex">word</a></li>

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
  mounted() {
    this.$store.dispatch('admin/power/loadAll')
    // console.log(this.$store.state.info.mine.id);

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
