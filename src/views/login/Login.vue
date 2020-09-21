<template>
  <body id="con" class="login-layout">
  <div  class="main-container">
    <div class="main-content">
      <div class="row">
        <div class="col-sm-12 col-sm-offset-1">
          <div id="log" class="login-container">
            <div class="center">
              <h1>
                <i class="ace-icon fa fa-leaf green"></i>
                <span class="red">Ace</span>
                <span class="white" id="id-text2">评价系统</span>
              </h1>
              <h4 class="blue" id="id-company-text">&copy; 天邦</h4>
            </div>

            <div class="space-6"></div>

            <div class="position-relative">
              <div id="login-box" class="login-box visible widget-box no-border">
                <div class="widget-body">
                  <div class="widget-main">
                    <h4 class="header blue lighter bigger">
                      <i class="ace-icon fa fa-coffee green"></i>
                      请输入您的信息
                    </h4>

                    <div class="space-6"></div>

                    <form>
                      <fieldset>
                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control" v-model="loginForm.username" placeholder="Username" />
														  <i class="glyphicon glyphicon-ok"></i>
															<i class="ace-icon fa fa-user"></i>
														</span>
                        </label>

                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" v-model="loginForm.password" placeholder="Password" />
															<i class="ace-icon fa fa-lock"></i>
														</span>
                        </label>

                        <div class="space"></div>

                        <div class="clearfix">
                          <label class="inline">
                            <input type="checkbox" class="ace" />
                            <span class="lbl"> 记住</span>
                          </label>

                          <button type="button" class="width-35 pull-right btn btn-sm btn-primary">
                            <i class="ace-icon fa fa-key"></i>
                            <span class="bigger-110">登录</span>
                          </button>
                        </div>

                        <div class="space-4"></div>
                      </fieldset>
                    </form>

                    <div class="social-or-login center">
                      <span class="bigger-110">第三方登录</span>
                    </div>

                    <div class="space-6"></div>

                    <div class="social-login center">
                      <a class="btn btn-primary">
                        <i @click="login" id="btn" class="ace-icon fa fa-facebook"></i>
                      </a>

                      <a class="btn btn-info">
                        <i @click="test" class="ace-icon fa fa-twitter"></i>
                      </a>

                      <a class="btn btn-danger">
                        <i @click="test1" class="ace-icon fa fa-google-plus"></i>
                      </a>
                    </div>
                  </div><!-- /.widget-main -->

                  <div class="toolbar clearfix">
                    <div>
                      <a href="#" data-target="#forgot-box" class="forgot-password-link">
                        <i class="ace-icon fa fa-arrow-left"></i>
                        忘记密码
                      </a>
                    </div>

                    <div>
                      <a href="#" data-target="#signup-box" class="user-signup-link">
                        了解详情
                        <i class="ace-icon fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div><!-- /.widget-body -->
              </div><!-- /.login-box -->




            </div><!-- /.position-relative -->

            <div class="navbar-fixed-top align-right">
              <br />
              &nbsp;
              <a id="btn-login-dark" href="#">Dark</a>
              &nbsp;
              <span class="blue">/</span>
              &nbsp;
              <a id="btn-login-blur" href="#">Blur</a>
              &nbsp;
              <span class="blue">/</span>
              &nbsp;
              <a id="btn-login-light" href="#">Light</a>
              &nbsp; &nbsp; &nbsp;
            </div>
          </div>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.main-content -->
  </div><!-- /.main-container -->

  </body>



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
      },
      test(){
        this.$router.push('./manager');
      },
      test1(){
        this.$router.push('./mess');
      }
    }
  }






</script>
<style src="assets/css/ace.min.css" scoped></style>
<style src="assets/css/ace-rtl.min.css" scoped></style>
<style src="assets/font-awesome/4.2.0/css/font-awesome.min.css" scoped></style>
<style scoped>
 #con{
   height: 62.5rem  /* 1000/16 */;
 }
 #log{
   margin: 50px auto;
 }
</style>
