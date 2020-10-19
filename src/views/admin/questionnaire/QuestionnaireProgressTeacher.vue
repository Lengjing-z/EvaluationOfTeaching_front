<template>
<!--  老师  学院 问卷名 开始时间  结束时间 -->
  <div>
    <vxe-table
      stripe
      :data="$route.query.data">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="学院"></vxe-table-column>
      <vxe-table-column field="title" title="问卷名"></vxe-table-column>
      <vxe-table-column field="begin_time" title="开始时间"></vxe-table-column>
      <vxe-table-column field="end_time" title="结束时间"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
name: "QuestionnaireProgressTeacher",
  data() {
    return {
      // progressQuestionnaires:this.$route.query.pro
    }
  },
  props:{
    progressQuestionnaires:Array
  },
  created() {

  }
}
</script>

<style scoped>

</style>
