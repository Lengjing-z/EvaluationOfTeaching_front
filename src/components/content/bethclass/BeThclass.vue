<template>
  <div>
  <header>
    <NavBar></NavBar>
  </header>
    <div style="width: 70%;margin: 0 auto">
      <b-breadcrumb id="Na">
        <b-breadcrumb-item @click="toIndex()" href="#home">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25" style="color: black" aria-hidden="true"></b-icon>
          <span style="color: black">首页</span>
        </b-breadcrumb-item>
        <b-breadcrumb-item href="#foo" style="color: black"><span style="color: black">评价同行</span></b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <main style="width: 70%;margin: 0 auto">
      <!--所授班级-->
      <p class="title_class">所授班级</p>
      <div class="single-member effect-1" v-for="(item,index) in ClassData">
        <div class="member-image">
          <!--<img src="" width="150" height="80" alt="">-->
          <div id="img">{{ClassData[index].id}}</div>
        </div>
        <div class="member-info">
          <h4>{{ ClassData[index].name }}</h4>
          <h5>PinYing</h5>
          <!--<p style="color: #2a91d8" @click="test(index)">所有班级</p>-->

          <b-button-group id="dosomeThing">
            <b-button  v-b-modal.my-modal style="width: 60px" variant="outline-primary" @click="showModal(index)">
              <b-icon  icon="tools"></b-icon>
            </b-button>
            <b-button v-b-tooltip.hover v-b-modal.my-modal2 @click="showModal3(index)" title="查看所有班级"  style="width: 60px" variant="outline-primary">
              <b-icon icon="person-fill"></b-icon>
            </b-button>

            <b-button style="width: 60px" variant="outline-primary">
              <b-icon @click="test()" icon="inbox-fill"></b-icon>
            </b-button>
          </b-button-group>
        </div>
      </div>

      <div style="clear: both"></div>
      <!--所授课程-->
      <div class="couer">
        <p class="title_course">所教课程</p>
        <div id="beCourse" class="single-member effect-1" v-for="(item,index) in courseData">
          <div class="member-image">
            <!--<img src="" width="150" height="80" alt="">-->
            <div id="img">{{courseData[index].id}}</div>
          </div>
          <div class="member-info">
            <h4>{{ courseData[index].name }}</h4>
            <h5>PinYing</h5>
            <!--<p style="color: #2a91d8" @click="test(index)">所有班级</p>-->

            <b-button-group id="dosomeThing">
              <b-button  v-b-modal.my-modal style="width: 60px" variant="outline-primary" @click="showModal(index)">
                <b-icon  icon="tools"></b-icon>
              </b-button>
              <b-button v-b-tooltip.hover v-b-modal.my-modal2 @click="showModal3(index)" title="查看所有班级"  style="width: 60px" variant="outline-primary">
                <b-icon icon="person-fill"></b-icon>
              </b-button>

              <b-button style="width: 60px" variant="outline-primary">
                <b-icon @click="test()" icon="inbox-fill"></b-icon>
              </b-button>
            </b-button-group>
          </div>
        </div>
      </div>
    </main>
    <footer>
    <Footer></Footer>
  </footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
export default {
  name: "BeThclass",
  components:{
    NavBar,
    Footer
  },
  methods:{
    toIndex(){
      this.$router.push('./index');
    },
  },
  created() {
    this.$store
      .dispatch('clazz/loadTaught')
      .then(result => {
        if (result==='success')
          console.log(this.$store.state.clazz.taught);
        this.ClassData = this.$store.state.clazz.taught;
      }).then(()=>{

    })
    this.$store
      .dispatch('course/loadTaught')
      .then(result => {
        if (result==='success')
          console.log(this.$store.state.course.taught);
        this.courseData = this.$store.state.course.taught;
      }).then(()=>{
    })
  },
  data(){

    return{
      ClassData:[],
      courseData:[],
    }
  }
}
</script>

<style scoped>
.title_class,.title_course{
  margin-bottom: -1.875rem  /* -30/16 */;
}
main,.couer {
  width: 62.5rem  /* 1000/16 */;
  margin: 0 auto;
}
#beCourse{
  margin-left: -16.875rem  /* -270/16 */;
}
.member-info p{
  margin-top: -0.9375rem  /* -15/16 */;
}
b-icon{
  width: 15.625rem  /* 250/16 */;
}
body{
  font-family:Lato,'Open Sans', sans-sarif;
  font-size:1rem  /* 16/16 */;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.Uname{
  color: #2a8bcb;
}
.test {
  width: 80%;
  height: 81.25rem  /* 1300/16 */;
  margin:0 auto;
}
/*= common css to all effects =*/
.single-member{
  margin-left: -1.25rem  /* -20/16 */;
  width: 17.5rem  /* 280/16 */;
  height: 15.625rem  /* 250/16 */;
  float: left;
  margin: 0.625rem  /* 10/16 */ 2.5%;
  margin-top:5.625rem  /* 90/16 */;
  background-color: #fff;
  text-align: center;
  position: relative;
}
.member-image #img {
  max-width: 100%;
  vertical-align: middle;
  padding-left: 1.5625rem  /* 25/16 */;
  padding-right: 1.5625rem  /* 25/16 */;
  color: white;
}
h3 {font-size: 1.5rem  /* 24/16 */;
  font-weight: normal;
  margin: 0.625rem  /* 10/16 */ 0 0;
  text-transform: uppercase;
}
h5 {
  font-size: 1rem  /* 16/16 */;
  font-weight: 300;
  margin: 0 0 0.9375rem  /* 15/16 */;
  line-height: 1.375rem  /* 22/16 */;
}
p {
  font-size: 0.875rem  /* 14/16 */;
  font-weight: 300;
  line-height: 1.375rem  /* 22/16 */;
  padding: 0 1.875rem  /* 30/16 */;
  margin-bottom: 0.625rem  /* 10/16 */;
}
.social-touch a{
  display: inline-block;
  width: 1.6875rem  /* 27/16 */;
  height: 1.625rem  /* 26/16 */;
  vertical-align: middle;
  margin: 0 0.125rem  /* 2/16 */; /*background-image: url(../img/logo.png);*/
  background-repeat: no-repeat;
  opacity: 0.7;
  transition: 0.3s;
}
.social-touch a:hover{
  opacity: 1;
  transition: 0.3s;
}
.icon-colored .fb-touch{background-position: 0 -1.6875rem  /* -27/16 */;}
.icon-colored .tweet-touch{background-position: -2.1875rem  /* -35/16 */ -1.6875rem  /* -27/16 */;}
.icon-colored .linkedin-touch{background-position: -4.4375rem  /* -71/16 */ -1.6875rem  /* -27/16 */;}
/*= common css to all effects end =*/

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

[class^="icon-"], [class*=" icon-"] {
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, html { font-size: 100%; 	padding: 0; margin: 0;}
a{ color: rgba(255, 255, 255, 0.6);outline: none;text-decoration: none;-webkit-transition: 0.2s;transition: 0.2s;}
a:hover,a:focus{color:#74777b;text-decoration: none;}
#dosomeThing{
  height: 35px;
}

/*= effect-1 css =*/
.effect-1{border-radius: 0.3125rem  /* 5/16 */ 0.3125rem  /* 5/16 */ 0 0; padding-bottom: 2.5rem  /* 40/16 */;}
.effect-1 .member-image {border: 0.125rem  /* 2/16 */ solid #fff; background: #1b6aaa; border-radius: 3.75rem  /* 60/16 */ 0; display: inline-block; margin-top: -4.5rem  /* -72/16 */; overflow: hidden; transition: 0.3s;}
.effect-1 .social-touch{background-color: #e13157; position: absolute; left: 0; bottom: 0; height: 0.3125rem  /* 5/16 */; overflow: hidden; padding: 0.3125rem  /* 5/16 */ 0 0; width: 100%; transition: 0.3s;}
.effect-1 .member-image #img{transition: 0.3s; height:1.875rem  /* 30/16 */; /*background-color: #2a91d8;*/ border-radius: 3.75rem  /* 60/16 */ 0;}
.effect-1:hover .member-image{border-color: #e13157; transition: 0.3s; border-radius: 50%;}
.effect-1:hover .social-touch{padding: 0.375rem  /* 6/16 */ 0; height: 2.375rem  /* 38/16 */; transition: 0.3s;}
/*= effect-1 css end =*/

/*= Media Query
=============== */
@media only screen and (max-width: 61.25rem  /* 980/16 */){
  .row{width: 100%; margin: 3.125rem  /* 50/16 */ 0;}
  .team-members{text-align: center;}
  .single-member{float: none; display: inline-block; vertical-align: bottom;}
}
/*= Media Query End
=================== */
@media screen and (max-width:81.25rem  /* 1300/16 */){
  .single-member{
    width: 15.625rem  /* 250/16 */;
  }
}/*宽度小于500px时 绿色*/
</style>
