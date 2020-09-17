<template>
  <div id="nav">
    <el-row class="navel">
      <el-col :span="8">
        <div class="grid-content bg-logo">
          <img src="~assets/img/logo.png" alt="">
          <div>MAX评教系统</div>
        </div>
      </el-col>
      <el-col :span="11">
        <div class="grid-content">
          <el-dropdown class="bg-mid">
            <div  class="bg-mid el-dropdown-link">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <p>张三</p>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的信息</el-dropdown-item>
              <el-dropdown-item>我的通知</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="5" class="navdel">
        <div class="grid-content bg-logout">注销</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped>
  #nav {
    background-color: #0a408a;
    color: #ffffff;
    padding-bottom: 5px;
    padding-top: 5px;
  }

  .navel {
    width: 68.75rem /* 1100/16 */;
    margin: 0 auto;
    user-select: none;
  }

  .navdel {
    height: 3.75rem /* 60/16 */;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bg-logo {
    width: 3.75rem /* 60/16 */;
    height: 3.75rem /* 60/16 */;
    white-space: nowrap;
    line-height: 3.75rem /* 60/16 */;
    font-size: 1.125rem /* 18/16 */;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
  }

  .bg-logo img {
    width: 3.75rem /* 60/16 */;
    height: 3.75rem /* 60/16 */;
    float: left;
    margin-right: 0.625rem /* 10/16 */;
  }

  .bg-mid {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .bg-mid p {
    height: 3.75rem /* 60/16 */;
    margin: 0 0.625rem /* 10/16 */;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #ffffff;
  }

  .bg-logout {
    width: 5rem /* 80/16 */;
    height: 1.875rem /* 30/16 */;
    border: 1px solid #ffffff;
    line-height: 1.875rem /* 30/16 */;
    text-align: center;
    border-radius: 3px;
    margin: 0 auto;
    cursor: default;
  }
  .bg-logout:active{
    background-color: #10a4e4;
  }

</style>
