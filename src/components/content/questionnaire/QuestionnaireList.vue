<template>
  <div>
    <vxe-table
      border
      :data="questionnairelist">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="title" title="Name" sortable></vxe-table-column>
      <vxe-table-column field="beEvaUsers[0].name" title="Teacher" show-overflow></vxe-table-column>
      <vxe-table-column title="操作" width="200">
        <template v-slot="{ row }">
          <!--        <button type="button" class="btn btn-outline-primary">评教</button>-->
          <button type="button" class="btn btn-outline-success">查看评价结果</button>
        </template>
      </vxe-table-column>
    </vxe-table>
  </div>
</template>


<script>
export default {
  name: "QuestionnaireList",
  data() {
    return {
      // questionnairelist: null
      // name:null,
      // teacher:null
    }
  },
  computed:{
    questionnairelist() {
      // const nairelist = [];
      const list = this.$store.state.student.questionnaire.questionnairelist;
      // list.forEach(item => {
      //   nairelist.push({title:item.title,teacher:item.beEvaUsers[0].name})
      // })
      // console.log(list)
      return list
    }
  }
}
</script>

<style scoped>

</style>
