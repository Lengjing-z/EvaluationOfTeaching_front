<template>
  <header>
  <div id="navbar" class="container">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#" class="logo ">
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
                <span class="mr-auto">Super Kitty</span>
              </div>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  </header>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
header{
  background-color: #0a408a;
  margin-bottom: 20px;
}
.logo{
  text-align: center;
  line-height: 50px;
  /*margin-left: 40px;*/
}
.logo img{
  max-width: 50px;
  max-height: 50px;
}
</style>
