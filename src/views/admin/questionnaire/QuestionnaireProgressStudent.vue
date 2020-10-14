<template>
<div>
<!--  学生  问卷名 班级 课程  老师  开始时间  结束时间-->
  <vxe-table
    stripe
    :data="progressQuestionnaires">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="问卷名"></vxe-table-column>
    <vxe-table-column field="sex" title="班级"></vxe-table-column>
    <vxe-table-column field="age" title="课程"></vxe-table-column>
    <vxe-table-column field="age" title="老师"></vxe-table-column>
    <vxe-table-column field="age" title="开始时间"></vxe-table-column>
    <vxe-table-column field="age" title="结束时间"></vxe-table-column>
  </vxe-table>
</div>
</template>

<script>
export default {
name: "QuestionnaireProgressStudent",
  data() {
    return {
      progressQuestionnaires:[]
    }
  },
}
</script>

<style scoped>

</style>
