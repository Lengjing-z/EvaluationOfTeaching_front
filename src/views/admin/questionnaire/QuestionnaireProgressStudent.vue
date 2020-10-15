<template>
<div>
<!--  学生  问卷名 班级 课程  老师  开始时间  结束时间-->
  <vxe-table
    stripe
    :data="$route.query.data">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="title" title="问卷名"></vxe-table-column>
    <vxe-table-column field="claName" title="班级"></vxe-table-column>
    <vxe-table-column field="couName" title="课程"></vxe-table-column>
    <vxe-table-column field="begin_time" title="开始时间"></vxe-table-column>
    <vxe-table-column field="end_time" title="结束时间"></vxe-table-column>
  </vxe-table>
</div>
</template>

<script>
export default {
name: "QuestionnaireProgressStudent",
  data() {
    return {
      // progressQuestionnaires:[]
    }
  },
  // beforeRouteEnter(to,from,next){
  //   // console.log(to)
  //   // console.log(from)
  //   console.log(this.$store)
  //   // this.$store.dispatch("admin/evaluation/getStudentAllList")
  //   //   .then(res => {
  //   //     console.log(res)
  //   //     this.progressQuestionnaires = this.$store.state.admin.evaluation.studentAllList
  //   //   })
  //   next();
  // },
  props:{
    progressQuestionnaires:Array
  },
  created() {
    console.log(this.$route.query.data)
  }
}
</script>

<style scoped>

</style>
