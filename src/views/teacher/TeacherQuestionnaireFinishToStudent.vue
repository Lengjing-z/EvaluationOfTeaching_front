<template>
<div>
  <vxe-table
    stripe
    :data="questionnaireList">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="title" title="Title"></vxe-table-column>
    <vxe-table-column title="操作" width="160">
      <template v-slot="{ row }">
        <vxe-button @click="">发布问卷</vxe-button>
      </template>
    </vxe-table-column>
  </vxe-table>
  <b-modal ref="issue" hide-footer title="发布问卷">

  </b-modal>
</div>
</template>

<script>
export default {
  name: "TeacherQuestionnaireFinishToStudent",
  data() {
    return {
      questionnaireList: [],
    }
  },
}
</script>

<style scoped>

</style>
