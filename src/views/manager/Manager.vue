<template>
<div>
  <Nav></Nav>
  <h2 style="margin-left: 5%">信息综合管理</h2>
  <el-table
    id="table1"
    ref="multipleTable"
    :data="tableData"
    border
    tooltip-effect="dark"
    style="width: 90%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="ID"
      align="center"
    width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      align="center"
      width="120">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <p>性别: {{scope.row.sex}}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      align="center"
      width="80"
      >
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      align="center"
      width="120">
    </el-table-column>
    <el-table-column
      prop="height"
      label="身高"
      align="center"
      width="120">
    </el-table-column>
    <el-table-column
      label="日期"
      align="center"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      align="center"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="操作"
                     align="center">
      <template slot-scope="scope">
        <!--编辑-->
        <a href="#"><i @click="handleEdit(scope.$index, scope.row)" class="el-icon-edit-outline"></i></a>
        <!--删除-->
        <a href="#"><i  @click="handleDelete(scope.$index, scope.row)" type="danger"  class="el-icon-delete"></i></a>
      </template>
    </el-table-column>
  </el-table>


  <div style="margin-top: 20px;margin-left: 5%">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
  <!--<div><Footer></Footer></div>-->
</div>
</template>

<script>
import Nav from "components/content/nav/NavBar";
  import Footer from "components/content/footer/Footer";
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
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id:2,
          sex:"男",
          age: 18,
          height: 175,
          code: '179000505',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id:3,
          sex:"男",
          age: 18,
          height: 175,
          code: '179000505',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id:4,
          sex:"男",
          age: 18,
          height: 175,
          code: '179000505',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }

    }
  }
</script>

<style scoped>
 #table1{
   margin: 1.25rem  /* 20/16 */ auto;
 }
 el-table-column{
   text-align: center;
 }
  .el-icon-delete,el-icon-edit-outline{
    font-size: 15px;
    letter-spacing: 5px;
  }
  .el-icon-delete{
    margin-left: 5px;
  }
</style>
