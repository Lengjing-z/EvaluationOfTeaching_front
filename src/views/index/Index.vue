<template>
  <el-container>
    <el-header>Header</el-header>
    <div class="el-container container">
      <el-main>Main</el-main>
      <el-aside width="200px">Aside</el-aside>
    </div>
    <el-footer>

    </el-footer>

  </el-container>
</template>

<script>
export default {
  name: 'Index',
  components: {}
};
</script>

<style scoped>

body {
  min-height: 100%;
}
.el-header,
.el-footer {
  width: 100%;
  background-color: #b3c0d1;
  color: #333;
  text-align: left;
  line-height: 60px;
}
.el-footer {
   flex: 1;
   line-height: 12.5rem  /* 200/16 */;
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
  width: 1200px;
  height: 1200px;
  margin: 0 auto;
}
</style>
