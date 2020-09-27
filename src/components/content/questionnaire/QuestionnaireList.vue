<template>
<div class="container">
  <vxe-table
    border
    height="300"
    :data="questionnairelist">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
    <vxe-table-column field="teacher" title="Teacher" show-overflow></vxe-table-column>
    <vxe-table-column title="操作" width="100" show-overflow>
      <template v-slot="{ row }">
        <vxe-button type="text" icon="fa fa-edit" @click="editEvent(row)">11</vxe-button>
        <vxe-button icon="fa fa-plus"></vxe-button>
      </template>
    </vxe-table-column>
  </vxe-table>
</div>
</template>

<script>
export default {
name: "QuestionnaireList",
  data(){
  return{
    questionnairelist:[
      {
        name:'java框架设计',
        teacher:'张三'
      }
    ]
  }
  },
  methods:{
    editEvent (row) {
      this.formData = {
        name: row.name,
        nickname: row.nickname,
        role: row.role,
        sex: row.sex,
        age: row.age,
        num: row.num,
        date3: row.date3,
        address: row.address
      }
      this.selectRow = row
      this.showEdit = true
    }
  }
}
</script>

<style scoped>

</style>
