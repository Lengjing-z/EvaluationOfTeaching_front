<template>
  <div class="test">
    <header>
      <h3>学院信息管理</h3>
    </header>
    <div class="single-member effect-1" v-for="(item,index) in DepartmentData">
      <div class="member-image">
        <!--<img src="" width="150" height="80" alt="">-->
        <div id="img">{{DepartmentData[index].id}}</div>
      </div>
      <div class="member-info">
        <h4>{{ DepartmentData[index].name }}</h4>
        <h5>PinYing</h5>
        <!--<p style="color: #2a91d8" @click="test(index)">所有班级</p>-->

        <b-button-group id="dosomeThing">
          <b-button   style="width: 60px" variant="outline-primary" @click="showModal(index)">
            <b-icon  icon="tools"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover title="修改学院信息" v-b-modal.my-modal style="width: 60px" variant="outline-primary">
            <b-icon icon="person-fill"></b-icon>
          </b-button>
          <b-button style="width: 60px" variant="outline-primary">
            <b-icon @click="test()" icon="inbox-fill"></b-icon>
          </b-button>
        </b-button-group>
      </div>
    </div>
    <b-modal id="my-modal" title="查看学院信息">
      <b-input-group  prepend="学院名" class="mt-3">
        <b-form-input id="username"></b-form-input>
      </b-input-group>
      <b-input-group id="code" prepend="任教老师" class="mt-3">
        <div>
          <b-dropdown id="teacher"
            text="Block Level Dropdown Menu"
            block
            variant="primary"
            class="m-2"
            menu-class="w-100"
          >
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-input-group>

    </b-modal>
  </div>
</template>

<script>
export default {
name: "DepartmentCard",
  methods:{
    test(index){
      console.log(this.DepartmentData[index].code[0]);
    }
  },

  data(){
    return{
      DepartmentData:[
        {
          id:1,
          name: '软件工程',
          code: ['1790005','1790005','1790008'],
          teacher:'王麻子'
        },
        {
          id:2,
          name: '计算机科学技术',
          code: ['1790006,1790008'],
          teacher:'李四'
        },
        {
          id:3,
          name: '数据库设计',
          code: ['1790005'],
          teacher:'张三'

        },
        {
          id:4,
          name: '数据库从删库到跑路',
          code: ['1790001'],
          teacher:'张三'

        },
        {
          id:5,
          name: 'Linux开发从入门到入狱',
          code: ['1790005'],
          teacher:'张三'

        },
        {
          id:6,
          name: '数字媒体艺术',
          code: ['1790006'],
          teacher:'张三'
        }
      ],
    }
  }
}
</script>

<style scoped>
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
.Uname{
  color: #2a8bcb;
}
.test {
  width: 80%;
  height: 1300px;
  margin:0 auto;
}
/*= common css to all effects =*/
.single-member{
  width: 280px;
  float: left;
  margin: 30px 2.5%;
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
</style>
