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
        <b-breadcrumb-item href="#foo" style="color: black"><span style="color: black">评价老师</span></b-breadcrumb-item>
      </b-breadcrumb>
      <b-button style="margin-top: 30px;padding-left: 10px;padding-right: 10px; margin-left: 200px" v-b-modal.my-modal1 @click="Query()" variant="outline-primary">查询所属班级</b-button>
    </div>

    <div class="course">
    <div class="single-member effect-1" v-for="(item,index) in ClassData">
      <div class="member-image">
        <!--<img src="" width="150" height="80" alt="">-->
        <div id="img">{{ClassData[index].id}}</div>
      </div>
      <div class="member-info">
        <h4>{{ ClassData[index].name }}</h4>
        <h5>PinYing</h5>
        <!--<p style="color: #2a91d8" @click="test(index)">所有班级</p>-->
        <h5>Teacher:{{ ClassData[index].teacher }}</h5>
        <b-button-group id="dosomeThing">
          <b-button  v-b-modal.my-modal style="width: 60px" variant="outline-primary" @click="showModal(index)">
            <b-icon  icon="tools"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover @click="showModal3(ClassData[index].id)"  v-b-modal.my-modal2 title="查看所有课程"  style="width: 60px" variant="outline-primary">
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
      <b-modal size="xl" ref="function" hide-footer title="ALl Students Message">
        <Form></Form>
      </b-modal>
    </div>

    <div>
      <b-modal  ref="my-modal2" hide-footer title="ALl Students Message">
        <vxe-table
          border
          show-footer
          height="400"
          :data="tableData">
          <vxe-table-column type="seq" width="10%" fixed="left"></vxe-table-column>
          <vxe-table-column field="qnTitle" title="Name" width="60%"></vxe-table-column>
          <vxe-table-column  title="Do" width="30%">
            <template v-slot="{ row }">
              <vxe-button @click="editRowEvent(row)">评教</vxe-button>
            </template>
          </vxe-table-column>
         <!-- <vxe-table-column field="sex" title="Sex" width="150"></vxe-table-column>
          <vxe-table-column field="age" title="Age" width="150"></vxe-table-column>
          <vxe-table-column field="code" title="Code" width="150"></vxe-table-column>
          <vxe-table-column field="height" title="Height" width="150"></vxe-table-column>
          <vxe-table-column field="address" title="Address" width="350" show-overflow></vxe-table-column>-->
        </vxe-table>
      </b-modal>
    </div>

    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
import Form from "components/common/function/Form";

export default {
  created() {

  },
  methods:{
    editRowEvent(row){
      console.log(row.qnId);
      this.$refs['function'].show();
      this.$store
        .dispatch('admin/questionnaire/detail',row.qnId)
        .then(result => {
          if (result==='success')
            console.log(3333333);
          this.ClassData =   this.$store.state.clazz.taught;
          this.$bvModal.show("function");
        }).then(()=>{
      })
    },
    Query(){
      this.$store
        .dispatch('clazz/loadTaught')
        .then(result => {
          if (result==='success')
            console.log(3333333);
          this.ClassData =   this.$store.state.clazz.taught;
        }).then(()=>{
      })
    },
    showModal3(index) {
      console.log(index);
      this.$store
        .dispatch('clazz/allEvaluations',index)
        .then(result => {
          if (result==='success')
            console.log(3333333);
          this.tableData =  this.$store.state.clazz.query;
        }).then(()=>{
      })
      this.$refs['my-modal2'].show();
      this.$store.dispatch("evaluation/getStudentDetail",1);
    },
    close(){
      this.$refs['my-modal2'].hide()
    }
  },
  name: "PinTeacher",
  components:{
    NavBar,
    Footer,
    Form
  },
  data(){
    return{
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
      ClassData:[
        {
          id:1,
          teacher:'刘洋',
          name: '数据库从删库到跑路',
        },
        {
          id:2,
          teacher:'刘洋',
          name: 'Android从入门到改行',
        },
        {
          id:3,
          teacher:'刘洋',
          name: 'C#从入门到放弃',
        },
      ],
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
      }, {
        id:2,
        sex:"男",
        age: 18,
        password:'123456',
        height: 175,
        code: '179000506',
        date: '2016-05-04',
        name: '任然',
        address: '上海市普陀区金沙江路 1517 弄'
      },
        {
          id:3,
          password:'123456',
          sex:"男",
          age: 18,
          height: 175,
          code: '179000507',
          date: '2016-05-04',
          name: '李宇蔚',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id:4,
          sex:"男",
          password:'123456',
          age: 18,
          height: 175,
          code: '179000520',
          date: '2016-05-04',
          name: '张三',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          id:5,
          password:'123456',
          sex:"男",
          age: 18,
          height: 175,
          code: '179000520',
          date: '2016-05-04',
          name: '杨过',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          password:'123456',
          id:6,
          sex:"男",
          age: 18,
          height: 175,
          code: '179000520',
          date: '2016-05-04',
          name: '黄天亮',
          address: '上海市普陀区金沙江路 1517 弄'
        },
      ],
    }
  }
}
</script>

<style scoped>
.course{
  margin-left: 150px;
}
#Na{
  width: 70%;
  margin: 0 auto;
}
.member-info p{
  margin-top: -15px;
}
b-icon{
  width: 250px;
}
body{
  font-family:Lato,'Open Sans', sans-sarif;
  font-size:16px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*= common css to all effects =*/
.single-member{
  margin-left: -20px;
  width: 280px;
  height: 250px;
  float: left;
  margin: 10px 2.5%;
  margin-top:40px;
  background-color: #fff;
  text-align: center;
  position: relative;
}
.member-image #img {
  max-width: 100%;
  vertical-align: middle;
  padding-left: 25px;
  padding-right: 25px;
  color: white;
}
h3 {font-size: 24px;
  font-weight: normal;
  margin: 10px 0 0;
  text-transform: uppercase;
}
h5 {
  font-size: 16px;
  font-weight: 300;
  margin: 0 0 15px;
  line-height: 22px;
}
p {
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  padding: 0 30px;
  margin-bottom: 10px;
}
.social-touch a{
  display: inline-block;
  width: 27px;
  height: 26px;
  vertical-align: middle;
  margin: 0 2px; /*background-image: url(../img/logo.png);*/
  background-repeat: no-repeat;
  opacity: 0.7;
  transition: 0.3s;
}
.social-touch a:hover{
  opacity: 1;
  transition: 0.3s;
}
.icon-colored .fb-touch{background-position: 0 -27px;}
.icon-colored .tweet-touch{background-position: -35px -27px;}
.icon-colored .linkedin-touch{background-position: -71px -27px;}
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
.effect-1{border-radius: 5px 5px 0 0; padding-bottom: 40px;}
.effect-1 .member-image {border: 2px solid #fff; background: #1b6aaa; border-radius: 60px 0; display: inline-block; margin-top: -72px; overflow: hidden; transition: 0.3s;}
.effect-1 .social-touch{background-color: #e13157; position: absolute; left: 0; bottom: 0; height: 5px; overflow: hidden; padding: 5px 0 0; width: 100%; transition: 0.3s;}
.effect-1 .member-image #img{transition: 0.3s; height:30px; /*background-color: #2a91d8;*/ border-radius: 60px 0;}
.effect-1:hover .member-image{border-color: #e13157; transition: 0.3s; border-radius: 50%;}
.effect-1:hover .social-touch{padding: 6px 0; height: 38px; transition: 0.3s;}
/*= effect-1 css end =*/

/*= Media Query
=============== */
@media only screen and (max-width: 980px){
  .row{width: 100%; margin: 50px 0;}
  .team-members{text-align: center;}
  .single-member{float: none; display: inline-block; vertical-align: bottom;}
}
/*= Media Query End
=================== */
@media screen and (max-width:1300px){
  .single-member{
    width: 250px;
  }
}/*宽度小于500px时 绿色*/


/*评教老师*/
.main{
  margin: 0 auto;
}
* {margin: 0; padding: 0;}
html, body
{width: 100%;height: 100%;overflow:auto;font-size:12px;margin:0;padding:0; font-family:"微软雅黑";background:#fff; text-align:center;
}
ul,li{ list-style:none;}
a{ text-decoration:none; color:#666;}
a:hover{text-decoration:none;}
.hover{background:#0f6c8d;}

i{font-style:normal;}


.iconfont{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
.top_left i{width:180px; height:90px; display:block; float:left; background: url("~@/assets/img/logo.png") no-repeat center;}
.top_left h1{line-height:100px; display:block; float:left; font-size:28px; }
.top_right a{padding:0 10px; color:#000; font-size:14px; display:block; float:left;}
.top_right a span{padding-right:5px; display:block; float:left;}
.top_right a i{color:#f00; padding: 0 5px; display:block; float:left;}
.top_right a b{display:block; float:left;}
.top_right a img{margin-top:30px; display:block; float:left;}
.nav_nr ul{display:block; margin:0;}
.nav_nr ul li{height:50px;  display:block; float:left;}
.nav_nr ul li a{ color:#fff; display:block; height:50px; float:left; padding:0 20px;}
.nav_nr ul li a:hover{text-decoration:none;}
.nav_nr i{color:#fff; display:block; float:left;}


.easyPieChart canvas { position: absolute;top: 0;left: 0;}
.foot{width:100%; height:50px; clear:both;}
.test_main{width:1200px;  margin:15px auto 0;}
.nr_left{width:900px; height:100%; float:left;}

.test{ width:100%;  border:1px solid #e4e4e4; text-align:left; float:left;}
.test_title{width:900px; height:45px; line-height:45px; background-color:#f7f7f7;position:fixed; bottom:0; z-index:1000;}
.test_title p{padding:0 20px; display:block; float:left;}
.test_time{color:#f00; line-height:45px;}
.test_time i{font-size:20px; height:45px; line-height:40px; display:block; float:left}
.test_time b{font-size:16px; height:45px; display:block; float:left; margin-left:10px;}
.test_dtk {line-height:45px;}
.test_dtk i{font-size:22px; height:45px; line-height:45px; display:block; float:left; color:#389fc3;}
.test_dtk span{font-size:14px; height:45px; display:block; float:left; margin-left:10px;}
.test_title font{width:80px; height:45px;  display:block; float:right; text-align:center; }
.test_title font input{background:#389fc3; border:none; display:block; width:80px; height:45px; cursor:pointer; color:#fff; font-size:16px; font-weight:bold;}
.test_title font input:active{background:#79aef0;}

.test_content{width:100%; height:auto; margin-top:15px;}
.test_content_title{width:100%; height:50px; line-height:50px; background:#f7f7f7; text-align:center;}
.test_content_title h2{padding:0 30px; font-size:16px; font-weight:normal; display:block; float:left}
.test_content_title p{padding:0 10px; height:40px; line-height:40px; background:#389fc3; color:#fff; border-radius:30px; display:block; float:left; margin-top:5px;}

.test_content_nr{width:100%; border-top:3px solid #efefef;}
.test_content_nr>ul>li{width:100%;  border-bottom:5px solid #efefef; padding-top:10px;}
.test_content_nr_tt{width:85%; height:auto; line-height:32px; margin:0 auto; border-bottom:1px solid #e4e4e4;}
.test_content_nr_tt i{width:25px; height:25px; line-height:25px; text-align:center; display:block; float:left; background:#5d9cec; border-radius:50%; margin-left:-50px; color:#fff; margin-top:8px; font-size:16px;}
.test_content_nr_tt span{padding:0 8px;}
.test_content_nr_tt font{font-size:14px}
.test_content_nr_tt b{display:block; float:right; margin-right:-50px; color:#f48c27; font-size:20px;}

.test_content_nr_main{width:85%; margin:0 auto; padding:10px 0;height:auto;}

.option{line-height:32px; display:block; background:#fff;color:#666;}
.option:hover{background:#e4e4e4;}
.option input{width:20px; height:20px; display:block; float:left; margin:10px 10px 0 0;}
.option label{height:auto;display:block;}

.multiple dd input{width:20px; height:20px; display:block; float:left; margin:10px 10px 0 0;}
.multiple dd label{width:725px; height:40px; display:block; float:left;}
.test_click a{color:#fff;}

.rt_nr1_title h1{width:130px; height:45px; background:#389fc3; text-align:center; font-size:14px; display:block; float:left; color:#fff;}
.rt_nr1_title h1 i{padding:0 5px; font-size:14px; font-weight:normal;}
.rt_nr1_title p{width:141px; height:43px;  padding-right:8px; border:1px solid #e4e4e4; border-left:0; display:block; float:right;}
.rt_nr1_title p i{margin-left:10px;}


.rt_content_tt h2{width:150px; font-size:14px; display:inline-block;}
.rt_content_tt p{width:100px; display:inline-block;}
.answerSheet ul{padding:10px; text-align:left;}
.answerSheet li{ display:inline-block;margin-bottom:5px; height:30px; width:30px; line-height:30px; text-align:center; border:1px solid #e4e4e4;}
.answerSheet li a{display:block;}
.answerSheet li:hover{color:#389fc3;border-color: #389fc3;}
.rt_more_tt h2{width:150px; font-size:14px; display:inline-block;}
.rt_more_tt p{width:100px; display:inline-block;}
.rt_more_nr ul{padding:10px; text-align:left;}
.rt_more_nr ul li{ display:inline-block; margin:5px; height:30px; width:30px; line-height:30px; text-align:center; border:1px solid #e4e4e4;}

</style>
