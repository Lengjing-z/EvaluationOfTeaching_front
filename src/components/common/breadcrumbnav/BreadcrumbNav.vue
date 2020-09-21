<template>
  <div id="nav_manager">
    <b-breadcrumb>
      <b-breadcrumb-item href="#home">
        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        用户管理
      </b-breadcrumb-item>
      <b-breadcrumb-item href="#foo">学生</b-breadcrumb-item>
      <b-breadcrumb-item href="#bar">教师</b-breadcrumb-item>
      <b-breadcrumb-item active>管理员</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>
export default {
name: "BreadcrumbNav"
}
</script>

<style scoped>
#nav_manager{
  width: 80%;
  color: black;
  margin:0 auto;
}
</style>
