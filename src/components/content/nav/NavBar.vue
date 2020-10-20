<template>
  <header>
  <div id="navbar" class="container-fluid">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#" class="logo ml-sm-5">
        <img src="~assets/img/logo.png" class="d-inline-block align-top" alt="Kitten">
        MAX教务系统
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right no-caret>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <div class="">
                <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
                <span class="mr-auto">{{username}}</span>
              </div>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="login_out" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  computed:{
    username(){
      return this.$store.state.info.mine.name
    }
  },
  methods:{
    login_out(){
      this.$store
        .dispatch('logout')
        .then(result => {
          if (result==='success')
            console.log('this' + '  ' + 'success');
         /* this.ClassData = this.$store.state.admin.class.query2;*/
         /* console.log(this.$store.state.admin.class.query2);*/
          /*  this.ClassData = this.$store.state.admin.user.userForm;*/
        }).then(()=>{
        /*this.$router.push('index')*/
      })
    }
  }
}
</script>

<style scoped>
header{
  background-color: #0a408a;
  margin-bottom: 1.25rem  /* 20/16 */;
}
.logo{
  text-align: center;
  line-height: 3.125rem  /* 50/16 */;
  /*margin-left: 40px;*/
}
.logo img{
  max-width: 3.125rem  /* 50/16 */;
  max-height: 3.125rem  /* 50/16 */;
}
</style>
