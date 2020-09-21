
<template>
    <div>
      <header>
        <Nav></Nav>
      </header>
      <div>
        <!-- Using modifiers -->
        <b-button v-b-modal.my-modal>Show Modal</b-button>

        <!-- Using value -->
        <b-button v-b-modal="'my-modal'">Show Modal</b-button>

        <!-- The modal -->
        <b-modal id="my-modal">Hello From My Modal!</b-modal>
      </div>
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
  export default {
    name: "Mess",
    components:{
      Nav,
    },
    data() {
      return {
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
