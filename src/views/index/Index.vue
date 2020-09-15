<template>
  <el-container>
    <el-header><Nav></Nav></el-header>
    <div class="el-container container">
      <el-main>Main</el-main>
      <el-aside width="200px">Aside</el-aside>
    </div>

    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  import Nav from "../../components/content/nav/Nav.vue";

  export default {
    name: 'Index',
    components: {
      Nav
    }
  };
</script>

<style scoped>
  body {
    min-height: 100%;
  }

  .el-header,
  .el-footer {
    width: 100%;
    /*background-color: #b3c0d1;*/
    color: #333;
    text-align: left;
    line-height: 60px;
    padding: 0;
  }

  .el-footer {
    flex: 1;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    height: 400px;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
  }

  .container {
    width: 68.75rem  /* 1100/16 */;
    height: 75rem  /* 1200/16 */;
    margin: 100px auto;
  }
</style>
