<template>
  <div class="col-sm-7">
    <div class="signin-info">
      <div class="logopanel m-b">
        <h1>[ 高校教师教学评价 ]</h1>
      </div>
      <div class="m-b"></div>
      <h4>欢迎使用 <strong>教师评价系统</strong></h4>
      <ul class="m-b">
        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 学生评价</li>
        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 教师自评</li>
        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 专家测评</li>
        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 教师互评</li>
        <li><i class="fa fa-arrow-circle-o-right m-r-xs"></i> 四位一体</li>
      </ul>
      <strong id="login" style="display: none">已有账号？ <a href="javascript:" onclick="changeItem('login');return false;">立即登录&raquo;</a></strong>
      <strong id="register">还没有账号？ <a href="javascript:" onclick="changeItem('register');return false;">立即注册&raquo;</a></strong>
    </div>
  </div>
</template>

<script>
  export default {
    name: "introduce"
  }
</script>

<style scoped>
  .col-sm-7 {
    z-index: 9999;
    margin-left: 400px;
    margin-top: 250px;
    font-size: 18px;
    font-weight: 100;
  }
</style>
