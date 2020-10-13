<template>
    <div>
      <header>
        <Nav></Nav>
      </header>
      <div id="nav_manager-department">
        <b-breadcrumb>
          <b-breadcrumb-item @click="toIndex()" href="#home">
            <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
            首页
          </b-breadcrumb-item>
          <!--<b-breadcrumb-item href="#bar">老师管理</b-breadcrumb-item>-->
          <b-breadcrumb-item @click="">个人信息</b-breadcrumb-item>
        </b-breadcrumb>
      </div>
      <UserMess></UserMess>
        <b-button @click="query()">测试1</b-button>
        <b-button @click="test1()">测试</b-button>
    </div>
</template>
<script>
import Nav from "components/content/nav/NavBar";
import Questionnaire from "components/content/questionnaire/Questionnaire";
import XLSX from "xlsx";
import UserMess from "components/content/usermess/UserMess";
  export default {

    methods:{
      toIndex(){
        this.$router.push('./index');
      },
      test1(){
        console.log(this.$store.state.admin.userForm);
      },
      query() {
        /*this.$store.commit('updateLoginForm',this.loginForm)*/
        let init = [{
          claId:1039,
          stId:2
        }]
        this.$store
          .dispatch('admin/insertInfo/segment/class/submit',init)
          .then(result => {
            if (result==='success')
              console.log(3333333);
          }).then(()=>{
          /*this.$router.push('index')*/
        })
      },

        showModal() {
          this.$refs['my-modal'].show()
        },
        hideModal() {
          this.$refs['my-modal'].hide()
        },
        toggleModal() {
          // We pass the ID of the button that we want to return focus to
          // when the modal has hidden
          this.$refs['my-modal'].toggle('#toggle-btn')
        },


    },
    name: "Mess",
    components:{
      Nav,
      Questionnaire,
      UserMess
    },
    data() {
      return {
        perPage: 15,//每页数据条数
        currentPage: 1,
        userMessage:[],//存放导入的数据
        upload_file: "",
        lists: [],
        tableData:{
          id:1,
          sex:"男",
          age: 18,
          height: 175,
          code: '179000505',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      }
    }
  }
</script>

<style scoped>
header{
  background-color: #0a408a;
  margin-bottom: 20px;
}
  table {
    width: 70%;
    margin: 0.625rem  /* 10/16 */ auto;
    font-weight: normal;
  }
  table th{
    width: 33.3%;
    height: 50px;
    text-align: left;
  }
  table tr{
    margin-top: 3.125rem  /* 50/16 */;
  }
  .msg tr th span{
    color: #b1b1b1;
  }
#nav_manager-department {
  width: 60%;
  margin: 0 auto;
}
</style>
