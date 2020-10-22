<template>
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <div>
      <b-breadcrumb id="Na">
        <b-breadcrumb-item @click="toIndex()" href="#home">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25" style="color: black" aria-hidden="true"></b-icon>
          <span style="color: black">首页</span>
        </b-breadcrumb-item>
        <b-breadcrumb-item href="#foo" style="color: black"><span style="color: black">评价同行</span></b-breadcrumb-item>
      </b-breadcrumb>
    </div>

    <div class="course">
      <div class="single-member effect-1" v-for="(item,index) in ad">
        <div class="member-image">
          <!--<img src="" width="150" height="80" alt="">-->
          <div id="img">{{ad[index].qnId}}</div>
        </div>
        <div class="member-info">
          <h4>{{ ad[index].qnTitle }}</h4>
          <h5>PinYing</h5>
          <!--<p style="color: #2a91d8" @click="test(index)">所有班级</p>-->
          <h5>学院:{{ ad[index].iName }}</h5>
          <b-button-group id="dosomeThing">
            <b-button  v-b-modal.my-modal style="width: 60px" variant="outline-primary" @click="showModal(index)">
              <b-icon  icon="tools"></b-icon>
            </b-button>
            <b-button v-b-tooltip.hover @click="showModal3(ad[index].tttId)"  v-b-modal.my-modal2 title="查看所有问卷"  style="width: 60px" variant="outline-primary">
              <b-icon icon="person-fill"></b-icon>
            </b-button>
            <b-button style="width: 60px" variant="outline-primary">
              <b-icon @click="test()" icon="inbox-fill"></b-icon>
            </b-button>
          </b-button-group>
        </div>
      </div>
    </div>

    <div>
      <b-modal size="xl" id="function" hide-footer title="ALl Students Message">
        <Form1 :qwe="qnId"></Form1>
      </b-modal>
    </div>

    <div>
      <b-modal  ref="my-modal2"  id="hi" hide-footer title="ALl Students Message">
        <vxe-table
          border
          show-footer
          height="400"
          :data="tableData">
          <vxe-table-column type="seq" width="10%" fixed="left"></vxe-table-column>
          <vxe-table-column field="name" title="Name" width="60%"></vxe-table-column>
          <vxe-table-column  title="Do" width="30%">
            <template v-slot="{ row }">
              <vxe-button @click="editRowEvent(row)">评教</vxe-button>
            </template>
          </vxe-table-column>
        </vxe-table>
      </b-modal>
    </div>
    <div style="height: 400px"></div>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
import Form from "components/common/function/Form";
import Form1 from "components/common/function/Form1";

export default {
  created() {
    this.$store
      .dispatch('beEvaluation/institute/getAll')
      .then(result => {
        if (result === 'success')
          console.log(3333333);
        this.ad = this.$store.state.beEvaluation.institute.all
        console.log(this.$store.state.beEvaluation.institute.all);
      }).then(() => {
    })
  },
  methods:{
    toIndex(){
      this.$router.push('./index');
    },
    editRowEvent(row){
      this.qnId = '';
      /*this.$refs['function'].show();*/
      console.log(row.qn_id);
      this.$store
        .dispatch('admin/questionnaire/detail',row.qn_id)
        .then(result => {
          if (result==='success')
            console.log(3333333);
          this.ClassData = this.$store.state.clazz.taught;
          this.qnId = row;
          this.$bvModal.show("function");
        }).then(()=>{
      })
    },
    showModal3(index) {
      console.log(index);
      this.$store
        .dispatch('beEvaluation/institute/getProgress',index)
        .then(result => {
          // if (result==='success')
          //   console.log(3333333);
          let all3 = [];
          this.tableData =  this.$store.state.beEvaluation.institute.progress;
          for(let i in this.tableData){
            if(!this.tableData[i].is_finished){
              all3.push(this.tableData[i])
            }
          }
         this.tableData = all3
          console.log("new tabledata",this.tableData);
        }).then(()=>{
      })
      this.$refs['my-modal2'].show();
      // this.$store.dispatch("evaluation/getStudentDetail",1);
    },
    close(){
      this.$refs['my-modal2'].hide()
    }
  },
  name: "TecherpinTecher",
  components:{
    NavBar,
    Footer,
    Form,
    Form1
  },
  data(){
    return{
      ad:[],
      qnId:'',
      formData: {
        qnTitle: null,
        qnId:null,
        nickname: null,
        role: null,
        sex: null,
        age: null,
        num: null,
        checkedList: [],
        flag1: null,
        date3: null,
        address: null
      },
      ClassData:[],
      /*问卷列表*/
      tableData: [{
        id:1,
        sex:"男",
        qnId: '',
        password:'123456',
        height: 175,
        code: '179000505',
        date: '2016-05-04',
        name: '软件工程',
        address: '上海市普陀区金沙江路 1517 弄'
      },
        {
        id:2,
        sex:"男",
        age: 18,
        password:'123456',
        height: 175,
        code: '179000506',
        date: '2016-05-04',
        name: '任然',
        address: '上海市普陀区金沙江路 1517 弄'
      }
      ],
    }
  }
}
</script>

<style scoped>
.course{
  margin-left: 9.375rem  /* 150/16 */;
}
#Na{
  width: 70%;
  margin: 0 auto;
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

/*= common css to all effects =*/
.single-member{
  margin-left: -1.25rem  /* -20/16 */;
  width: 17.5rem  /* 280/16 */;
  height: 15.625rem  /* 250/16 */;
  float: left;
  margin: 0.625rem  /* 10/16 */ 2.5%;
  margin-top:2.5rem  /* 40/16 */;
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


/*评教老师*/
.main{
  margin: 0 auto;
}
* {margin: 0; padding: 0;}
html, body
{width: 100%;height: 100%;overflow:auto;font-size:0.75rem  /* 12/16 */;margin:0;padding:0; font-family:"微软雅黑";background:#fff; text-align:center;
}
ul,li{ list-style:none;}
a{ text-decoration:none; color:#666;}
a:hover{text-decoration:none;}
.hover{background:#0f6c8d;}

i{font-style:normal;}


.iconfont{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
.top_left i{width:11.25rem  /* 180/16 */; height:5.625rem  /* 90/16 */; display:block; float:left; background: url("~@/assets/img/logo.png") no-repeat center;}
.top_left h1{line-height:6.25rem  /* 100/16 */; display:block; float:left; font-size:1.75rem  /* 28/16 */; }
.top_right a{padding:0 0.625rem  /* 10/16 */; color:#000; font-size:0.875rem  /* 14/16 */; display:block; float:left;}
.top_right a span{padding-right:0.3125rem  /* 5/16 */; display:block; float:left;}
.top_right a i{color:#f00; padding: 0 0.3125rem  /* 5/16 */; display:block; float:left;}
.top_right a b{display:block; float:left;}
.top_right a img{margin-top:1.875rem  /* 30/16 */; display:block; float:left;}
.nav_nr ul{display:block; margin:0;}
.nav_nr ul li{height:3.125rem  /* 50/16 */;  display:block; float:left;}
.nav_nr ul li a{ color:#fff; display:block; height:3.125rem  /* 50/16 */; float:left; padding:0 1.25rem  /* 20/16 */;}
.nav_nr ul li a:hover{text-decoration:none;}
.nav_nr i{color:#fff; display:block; float:left;}


.easyPieChart canvas { position: absolute;top: 0;left: 0;}
.foot{width:100%; height:3.125rem  /* 50/16 */; clear:both;}
.test_main{width:75rem  /* 1200/16 */;  margin:0.9375rem  /* 15/16 */ auto 0;}
.nr_left{width:56.25rem  /* 900/16 */; height:100%; float:left;}

.test{ width:100%;  border:0.0625rem  /* 1/16 */ solid #e4e4e4; text-align:left; float:left;}
.test_title{width:56.25rem  /* 900/16 */; height:2.8125rem  /* 45/16 */; line-height:2.8125rem  /* 45/16 */; background-color:#f7f7f7;position:fixed; bottom:0; z-index:1000;}
.test_title p{padding:0 1.25rem  /* 20/16 */; display:block; float:left;}
.test_time{color:#f00; line-height:2.8125rem  /* 45/16 */;}
.test_time i{font-size:1.25rem  /* 20/16 */; height:2.8125rem  /* 45/16 */; line-height:2.5rem  /* 40/16 */; display:block; float:left}
.test_time b{font-size:1rem  /* 16/16 */; height:2.8125rem  /* 45/16 */; display:block; float:left; margin-left:0.625rem  /* 10/16 */;}
.test_dtk {line-height:2.8125rem  /* 45/16 */;}
.test_dtk i{font-size:1.375rem  /* 22/16 */; height:2.8125rem  /* 45/16 */; line-height:2.8125rem  /* 45/16 */; display:block; float:left; color:#389fc3;}
.test_dtk span{font-size:0.875rem  /* 14/16 */; height:2.8125rem  /* 45/16 */; display:block; float:left; margin-left:0.625rem  /* 10/16 */;}
.test_title font{width:5rem  /* 80/16 */; height:2.8125rem  /* 45/16 */;  display:block; float:right; text-align:center; }
.test_title font input{background:#389fc3; border:none; display:block; width:5rem  /* 80/16 */; height:2.8125rem  /* 45/16 */; cursor:pointer; color:#fff; font-size:1rem  /* 16/16 */; font-weight:bold;}
.test_title font input:active{background:#79aef0;}

.test_content{width:100%; height:auto; margin-top:0.9375rem  /* 15/16 */;}
.test_content_title{width:100%; height:3.125rem  /* 50/16 */; line-height:3.125rem  /* 50/16 */; background:#f7f7f7; text-align:center;}
.test_content_title h2{padding:0 1.875rem  /* 30/16 */; font-size:1rem  /* 16/16 */; font-weight:normal; display:block; float:left}
.test_content_title p{padding:0 0.625rem  /* 10/16 */; height:2.5rem  /* 40/16 */; line-height:2.5rem  /* 40/16 */; background:#389fc3; color:#fff; border-radius:1.875rem  /* 30/16 */; display:block; float:left; margin-top:0.3125rem  /* 5/16 */;}

.test_content_nr{width:100%; border-top:0.1875rem  /* 3/16 */ solid #efefef;}
.test_content_nr>ul>li{width:100%;  border-bottom:0.3125rem  /* 5/16 */ solid #efefef; padding-top:0.625rem  /* 10/16 */;}
.test_content_nr_tt{width:85%; height:auto; line-height:2rem  /* 32/16 */; margin:0 auto; border-bottom:0.0625rem  /* 1/16 */ solid #e4e4e4;}
.test_content_nr_tt i{width:1.5625rem  /* 25/16 */; height:1.5625rem  /* 25/16 */; line-height:1.5625rem  /* 25/16 */; text-align:center; display:block; float:left; background:#5d9cec; border-radius:50%; margin-left:-3.125rem  /* -50/16 */; color:#fff; margin-top:0.5rem  /* 8/16 */; font-size:1rem  /* 16/16 */;}
.test_content_nr_tt span{padding:0 0.5rem  /* 8/16 */;}
.test_content_nr_tt font{font-size:0.875rem  /* 14/16 */}
.test_content_nr_tt b{display:block; float:right; margin-right:-3.125rem  /* -50/16 */; color:#f48c27; font-size:1.25rem  /* 20/16 */;}

.test_content_nr_main{width:85%; margin:0 auto; padding:0.625rem  /* 10/16 */ 0;height:auto;}

.option{line-height:2rem  /* 32/16 */; display:block; background:#fff;color:#666;}
.option:hover{background:#e4e4e4;}
.option input{width:1.25rem  /* 20/16 */; height:1.25rem  /* 20/16 */; display:block; float:left; margin:0.625rem  /* 10/16 */ 0.625rem  /* 10/16 */ 0 0;}
.option label{height:auto;display:block;}

.multiple dd input{width:1.25rem  /* 20/16 */; height:1.25rem  /* 20/16 */; display:block; float:left; margin:0.625rem  /* 10/16 */ 0.625rem  /* 10/16 */ 0 0;}
.multiple dd label{width:45.3125rem  /* 725/16 */; height:2.5rem  /* 40/16 */; display:block; float:left;}
.test_click a{color:#fff;}

.rt_nr1_title h1{width:8.125rem  /* 130/16 */; height:2.8125rem  /* 45/16 */; background:#389fc3; text-align:center; font-size:0.875rem  /* 14/16 */; display:block; float:left; color:#fff;}
.rt_nr1_title h1 i{padding:0 0.3125rem  /* 5/16 */; font-size:0.875rem  /* 14/16 */; font-weight:normal;}
.rt_nr1_title p{width:8.8125rem  /* 141/16 */; height:2.6875rem  /* 43/16 */;  padding-right:0.5rem  /* 8/16 */; border:0.0625rem  /* 1/16 */ solid #e4e4e4; border-left:0; display:block; float:right;}
.rt_nr1_title p i{margin-left:0.625rem  /* 10/16 */;}


.rt_content_tt h2{width:9.375rem  /* 150/16 */; font-size:0.875rem  /* 14/16 */; display:inline-block;}
.rt_content_tt p{width:6.25rem  /* 100/16 */; display:inline-block;}
.answerSheet ul{padding:0.625rem  /* 10/16 */; text-align:left;}
.answerSheet li{ display:inline-block;margin-bottom:0.3125rem  /* 5/16 */; height:1.875rem  /* 30/16 */; width:1.875rem  /* 30/16 */; line-height:1.875rem  /* 30/16 */; text-align:center; border:0.0625rem  /* 1/16 */ solid #e4e4e4;}
.answerSheet li a{display:block;}
.answerSheet li:hover{color:#389fc3;border-color: #389fc3;}
.rt_more_tt h2{width:9.375rem  /* 150/16 */; font-size:0.875rem  /* 14/16 */; display:inline-block;}
.rt_more_tt p{width:6.25rem  /* 100/16 */; display:inline-block;}
.rt_more_nr ul{padding:0.625rem  /* 10/16 */; text-align:left;}
.rt_more_nr ul li{ display:inline-block; margin:0.3125rem  /* 5/16 */; height:1.875rem  /* 30/16 */; width:1.875rem  /* 30/16 */; line-height:1.875rem  /* 30/16 */; text-align:center; border:0.0625rem  /* 1/16 */ solid #e4e4e4;}

</style>
