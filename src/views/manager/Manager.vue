<template>
<div id="boc">
  <Nav></Nav>

  <div class="test">
    <div class="single-member effect-3" v-for="(item,index) in tableData">
      <div class="member-image">
        <img src="" alt="">
      </div>
      <div class="member-info" >
        <h3 class="Uname">{{tableData[index].name}}</h3>
        <h5>{{ tableData[index].code }}</h5>
        <p>年龄:{{tableData[index].age}}&nbsp&nbsp身高:{{tableData[index].height}}</p>
        <p>家庭住址:{{tableData[index].address}}</p>
          <b-button-group id="dosomeThing">
            <b-button style="width: 60px" variant="outline-primary">
              <b-icon @click="change(index)"  icon="tools"></b-icon>
            </b-button>
            <b-button style="width: 60px" variant="outline-primary">
              <b-icon icon="person-fill"></b-icon>
            </b-button>
            <b-button style="width: 60px" variant="outline-primary">
              <b-icon @click="test()" icon="inbox-fill"></b-icon>
            </b-button>
          </b-button-group>
      </div>
    </div>
  </div>
</div>
</template>

<script>

  import Nav from "../../components/content/nav/Nav";
  import Footer from "../../components/content/footer/Footer";
  export default {
    name: "Manager",
    components:{
      Nav,
      Footer
    },
    data() {
      return {
        tableData: [{
          id:1,
          sex:"男",
          age: 18,
          height: 175,
          code: '179000505',
          date: '2016-05-04',
          name: '周海洋',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id:2,
          sex:"男",
          age: 18,
          height: 175,
          code: '179000506',
          date: '2016-05-04',
          name: '任然',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id:3,
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
          age: 18,
          height: 175,
          code: '179000520',
          date: '2016-05-04',
          name: '张文',
          address: '上海市普陀区金沙江路 1517 弄'
        },
          {
            id:5,
            sex:"男",
            age: 18,
            height: 175,
            code: '179000520',
            date: '2016-05-04',
            name: '杨林',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id:6,
            sex:"男",
            age: 18,
            height: 175,
            code: '179000520',
            date: '2016-05-04',
            name: '黄天亮',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id:1,
            sex:"男",
            age: 18,
            height: 175,
            code: '179000505',
            date: '2016-05-04',
            name: '周海洋',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id:2,
            sex:"男",
            age: 18,
            height: 175,
            code: '179000506',
            date: '2016-05-04',
            name: '任然',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id:3,
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
            age: 18,
            height: 175,
            code: '179000520',
            date: '2016-05-04',
            name: '张文',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id:5,
            sex:"男",
            age: 18,
            height: 175,
            code: '179000520',
            date: '2016-05-04',
            name: '杨林',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id:6,
            sex:"男",
            age: 18,
            height: 175,
            code: '179000520',
            date: '2016-05-04',
            name: '黄天亮',
            address: '上海市普陀区金沙江路 1517 弄'
          }],

      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },

    }
  }

</script>


<style  scoped="scoped">
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
    margin: 10px auto;
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
  .member-image img{
    max-width: 100%;
    vertical-align: middle;
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


  /*= effect-3 css =*/
  .effect-3{max-height: 270px; min-height: 260px; width: 20%; overflow: hidden;}
  .effect-3 h3{padding-top: 7px; line-height: 33px;}
  .effect-3 .member-image{border-bottom: 5px solid #e5642b; transition: 0.4s; background-color: rebeccapurple; height: 200px; width: 100%; display: inline-block; float: none; vertical-align: middle;}
  .effect-3 .member-info{transition: 0.4s;}
  .effect-3 .member-image img{width: 100%; vertical-align: bottom;}
  .effect-3 .social-touch{background-color: #e5642b; float: left; left: 0; bottom: 0; overflow: hidden; padding: 5px 0; width: 100%; transition: 0.4s;}
  .effect-3:hover .member-image{border-bottom: 0; border-radius: 0 0 50px 50px; height: 81px; display: inline-block; overflow: hidden; width: 109px; transition: 0.5s;}
  /*= effect-3 css end =*/

  /*= Media Query
  =============== */
  @media only screen and (max-width: 980px){
    .row{width: 100%; margin: 50px 0;}
    .team-members{text-align: center;}
    .single-member{float: none; display: inline-block; vertical-align: bottom;}
  }
  /*= Media Query End
  =================== */
</style>
