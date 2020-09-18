<template>
<div>
  <Nav></Nav>
  <div class="htmleaf-container" >
    <div></div>
    <div class="full-length" >
      <div class="container">
        <div class="team-members row">
          <div class="single-member effect-3">
            <div class="member-image">
              <img src="~@/assets/img/info.jpg" alt="Member">
            </div>
            <div class="member-info">
              <h3>Sophia</h3>
              <h5>ShowGilr</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="social-touch">
                <a class="fb-touch" href="#"></a>
                <a class="tweet-touch" href="#"></a>
                <a class="linkedin-touch" href="#"></a>
              </div>
            </div>
          </div>
        </div>
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

<style src="assets/css/style.css" scoped></style>
<style src="assets/css/normalize1.css" scoped></style>
<style  scoped="scoped">
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
