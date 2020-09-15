<template>
  <div class="signinpanel">
    <div class="row">
      <div class="col-sm-7">
        <div class="signin-info">
          <div class="logopanel m-b">
            <h1>[ 高校教师教学评价 ]</h1>
          </div>
          <div class="m-b"></div>
          <h4>欢迎使用 <strong>教师评价系统</strong></h4>
          <ul class="m-b">
            <li><i class="el-icon-s-cooperation"></i> 学生评价</li>
            <li><i class="el-icon-s-order"></i> 教师自评</li>
            <li><i class="el-icon-s-platform"></i> 专家测评</li>
            <li><i class="el-icon-s-promotion"></i> 教师互评</li>
            <li><i class="el-icon-s-open"></i> 四位一体</li>
          </ul>
          <strong id="login" style="display: none">已有账号？ <a href="javascript:" onclick="changeItem('login');return false;">立即登录&raquo;</a></strong>
          <strong id="register">想了解更多？ <a href="javascript:" onclick="changeItem('register');return false;">点击这里&raquo;</a></strong>
        </div>
      </div>
      <div style="clear: both"></div>
      <div class="col-sm-5">
        <div class="self">
          <h4 class="no-margins" id="rgTitle">登录</h4>
          <p class="m-t-md" id="rgMsg">登录到教师管理系统</p>

          <div class="form-group">
            <input type="text" id="userName" v-model="loginForm.username" class="form-control uname" placeholder="用户名" /><i class="el-icon-s-custom"></i>
          </div>
          <div class="form-group">
            <input type="password" id="passWord" v-model="loginForm.password" class="form-control pword m-b" placeholder="密码" /><i class="el-icon-s-goods"></i>
          </div>

          <!--<a href="#">忘记密码了？</a>--><!--onclick="submitAll();return false;"-->

          <button class="btn btn-primary" @click="login" id="btn" >登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录</button>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
    <hr class="line_ti">
    <div class="signup-footer">
      <div class="pull-left">
        &copy; 2019 All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        responseResult: []
      };
    },
    methods : {
      login() {
        this.$router.push('/index');
      }
    }
  }
</script>

<style scoped>
  #register{
    display: block;
    margin-top: 40px;
  }
  .no-margins,.m-t-md{color: white}
  .el-icon-s-custom,.el-icon-s-goods {
    color: black;
    font-size: 17px;
    margin-left: -40px;
  }
  .signinpanel {
    font-size: 12px;
    margin-top: -23px;
    letter-spacing: 2px;
    background: url("~@/assets/login-background.jpg") no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height:700px;
    color: rgba(255, 255, 255, .95);
  }
  .signup-footer{
    margin-left: 250px;
    margin-top: 30px;
    letter-spacing: 0px;
  }
  .line_ti{
    width: 800px;
  }
  .row{
    padding-top: -100px;
    margin-left: 250px;
    margin-top: -115px;
  }
  .col-sm-7{
    margin-top: 250px;
    float: left;
  }
  ul > li{
    padding-left: 0px;
    margin-left: -40px;
    margin-top: 5px;
    list-style: none;
  }
  input{
    border: 1px solid #ccc;
    width: 250px;
    height: 25px;
    padding: 7px 0px;
    border-radius: 5px;
    padding-left:10px;
    padding-right: 30px;
    margin-top: 15px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
  }
  input:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
  }
  #btn { /* 按钮美化 */
    width: 290px; /* 宽度 */
    height: 34px; /* 高度 */
    border-width: 0px; /* 边框宽度 */
    border-radius: 3px; /* 边框半径 */
    background: #1E90FF; /* 背景颜色 */
    cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
    outline: none; /* 不显示轮廓线 */
    font-family: Microsoft YaHei; /* 设置字体 */
    color: white; /* 字体颜色 */
    font-size: 17px; /* 字体大小 */
    margin-top: 15px;
    margin-left: 1px;
  }
  #btn:hover { /* 鼠标移入按钮范围时改变颜色 */
    background: #5599FF;
  }
  .logopanel h1{
    font-weight: normal;
    font-size: 25px;
  }
  .col-sm-5 {
    width: 350px;
    height: 250px;
    background: rgba(255, 255, 255, .2);
    float: right;
    margin-top: -235px;
    margin-right: 250px;
  }
  .self{
    margin-left: 30px;
  }


</style>
