<template>
<!--  老师  学院 问卷名 开始时间  结束时间 -->
  <div>
    <vxe-table
      stripe
      :data="progressQuestionnaires">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="问卷名"></vxe-table-column>
      <vxe-table-column field="sex" title="学院"></vxe-table-column>
      <vxe-table-column field="sex" title="开始时间"></vxe-table-column>
      <vxe-table-column field="age" title="结束时间"></vxe-table-column>

    </vxe-table>
  </div>
</template>

<script>
export default {
name: "QuestionnaireProgressTeacher",
  data() {
    return {
      progressQuestionnaires:[]
    }
  },
  created() {
    this.$store.dispatch("")
  }
}
</script>

<style scoped>

</style>
