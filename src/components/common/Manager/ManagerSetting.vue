<template>
  <div>

    <div id="nav_manager-user " class="container-lg">
      <b-breadcrumb>
        <b-breadcrumb-item href="#home">
          <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
          首页
        </b-breadcrumb-item>
        <!--        <b-breadcrumb-item >管理员</b-breadcrumb-item>-->
        <!--        <b-breadcrumb-item :active>学生</b-breadcrumb-item>-->
        <b-breadcrumb-item v-for="item in manager" :key="item.name" >{{ item.name }}</b-breadcrumb-item>

      </b-breadcrumb>
    </div>
  </div>
</template>
<script>

export default {
  name: "ManagerSetting",
  components: {},
  data() {
    return {
      // manager: [{name: '权限管理'}, {name: '权限'}]
    }
  },
  props:{
    manager:Array
  },
  methods: {

  }
}

</script>
<style scoped="scoped">

#nav_manager {
  width: 80%;
  color: black;
  margin: 0 auto;
}

</style>
