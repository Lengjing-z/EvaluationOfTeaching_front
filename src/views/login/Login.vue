<template>
  <body id="con" class="login-layout">
  <div  class="main-container">
    <div class="main-content">
      <div class="row">
        <div class="col-sm-12 col-sm-offset-1">
          <div id="log" class="login-container">
            <div class="center">
              <h1>
                <i style="color: white;font-size: 25px;margin-right: 9px" class="vxe-icon--edit-outline"></i>
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
                      <i class="vxe-icon--info green"></i>
                      请输入您的信息
                    </h4>
                    <div class="space-6"></div>
                    <form>
                      <fieldset>
                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" class="form-control" v-model="loginForm.username" placeholder="Username" />
														  <i  style="float: right;margin-top: -23px;margin-right: 10px" class="vxe-icon--question blue"></i>
															<i class=""></i>
														</span>
                        </label>
                        <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" class="form-control" v-model="loginForm.password" placeholder="Password" />
															<i style="float: right;margin-top: -23px;margin-right: 10px" class="vxe-icon--eye-slash blue"></i>
														</span>
                        </label>
                        <div style="color: red" v-if="succ">
                          用户名或密码错误，请重新输入
                        </div>
                        <div class="space"></div>
                        <div class="clearfix">
                          <label class="inline">
                            <vxe-checkbox style="margin-top: 10px" v-model="value1" class="ace" content="记住我"></vxe-checkbox>
                          </label>
                         <!-- <button type="button" class="width-35 pull-right btn btn-sm btn-primary" @click="login()">
                            <i v-if="isLogin" class="vxe-icon&#45;&#45;refresh roll"></i>
                            <span style="margin-left: 9px" class="bigger-110">登录</span>
                          </button>-->
                          <button type="button" class="width-35 pull-right btn btn-sm btn-primary" @click="onload()">
                            <i v-if="isLogin" class="vxe-icon--refresh roll"></i>
                            <span style="margin-left: 9px" class="bigger-110">登录</span>
                          </button>
                        </div>
                        <div class="space-4"></div>
                      </fieldset>
                    </form>
                    <div class="social-or-login center">
                      <span class="bigger-110">第三方登录</span>
                    </div>

                    <div class="space-6"></div>

                  </div><!-- /.widget-main -->

                  <div class="toolbar clearfix">
                    <div>
                      <a href="#" data-target="#forgot-box" class="forgot-password-link">
                        <i class="vxe-icon--search"></i>
                        忘记密码
                      </a>
                    </div>

                    <div>
                      <a href="#" data-target="#signup-box" class="user-signup-link">
                        了解详情
                        <i class="vxe-icon--success red"></i>
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
        isLogin:false,
        succ:false,
        loginForm: {
          // username: 'admin',
          // password: '123456'

          username: '10001011',
          password: '123456'

          // username: '179000501',
          // password: '123456'
        },
        responseResult: []
      };
    },
    methods : {
      onload(){
        this.isLogin = true;
        setTimeout(() => {
          this.login();
        }, 500)
      },
      login() {
        this.$store.commit('updateLoginForm',this.loginForm)
        this.$store
          .dispatch('login')
          .then(result => {
            if (result==='success'){
              console.log("login success");
              this.$XModal.message({ message: '登陆成功', status: 'success' })
              this.$router.push('index')
              return this.$store.dispatch('info/loadMyInfo')
            }else{
              this.$XModal.message({ message: 'error 用户名或密码错误', status: 'error' })
              this.isLogin = false;
              this.$router.push('/login')
            }
          }).then(()=>{

        })
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
