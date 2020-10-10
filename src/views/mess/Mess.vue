<template>
    <div>
      <header>
        <Nav></Nav>
      </header>
      <UserMess></UserMess>
        <b-button @click="query()">测试</b-button>
      <b-button @click="test1()">测试</b-button>
      <!--<Questionnaire v-if="true"></Questionnaire>-->
      <div class="overflow-auto">
        <!-- <p class="mt-3">问卷总数: {{ currentPage }}</p>-->
        <!--<p class="mt-3">题目</p>-->
        <b-table
          id="my-table"
          :items="userMessage"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>

        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
     <!-- <div class="container111">
        {{ upload_file || "导入" }}
        <input
          type="file"
          accept=".xls,.xlsx"
          class="upload_file"
          @change="readExcel($event)"
        />
      </div>-->

     <!-- <div class="text-center my-3">
        <b-button id="tooltip-target-1">
          Hover Me
        </b-button>
        <b-tooltip target="tooltip-target-1" triggers="hover" placement="Tooltip on the right">
          I am tooltip  content!
        </b-tooltip>
      </div>-->
     <!-- <div>
        <b-button id="show-btn" @click="showModal">Open Modal</b-button>
        <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button>

        <b-modal ref="my-modal" hide-footer title="Using Component Methods">
          <div class="d-block text-center">
            <h3>Hello From My Modal!</h3>
          </div>
          <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
          <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
        </b-modal>
      </div>-->
      <!--<table class="msg">
        <tr>
          <th><span>姓名:</span>{{tableData.name}}</th>
          <th><span>性别:</span>{{tableData.sex}}</th>
          <th><span>年龄:</span>{{tableData.age}}</th>
        </tr>
        <tr>
          <th><span>学号:</span>{{tableData.code}}</th>
          <th><span>身高:</span>{{tableData.height}}</th>
          <th><span>地址:</span>{{tableData.address}}</th>
        </tr>

      </table>-->
    </div>
</template>
<script>
import Nav from "components/content/nav/NavBar";
import Questionnaire from "components/content/questionnaire/Questionnaire";
import XLSX from "xlsx";
import UserMess from "components/content/usermess/UserMess";
  export default {

    methods:{
      test1(){
        console.log(this.$store.state.admin.userForm);
      },
      query() {
        /*this.$store.commit('updateLoginForm',this.loginForm)*/
        this.$store
          .dispatch('admin/query')
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

</style>
