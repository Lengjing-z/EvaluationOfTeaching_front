<template>
<div>
  <vxe-table
    stripe
    :data="questionnaireList">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="qTitle" title="问卷名"></vxe-table-column>
    <vxe-table-column field="iName" title="学院"></vxe-table-column>
    <vxe-table-column field="begainTime" title="开始时间"></vxe-table-column>
    <vxe-table-column field="endTime" title="结束时间"></vxe-table-column>
    <vxe-table-column title="操作" width="160">
      <template v-slot="{ row }">
        <vxe-button @click="">查看详情</vxe-button>
        <vxe-button @click="">查看进度</vxe-button>
      </template>
    </vxe-table-column>
  </vxe-table>
  <b-modal ref="issue" hide-footer title="发布问卷">

  </b-modal>
</div>
</template>

<script>
export default {
name: "TeacherQuestionnaireFinishToTeacher",
  data() {
    return {
      questionnaireList: [],
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
