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
          <button type="button" class="btn btn-outline-success" v-b-modal.function @click="showdetaol(row)">查看评价结果
          </button>

        </template>
      </vxe-table-column>
    </vxe-table>

    <Function ></Function>

  </div>
</template>


<script>
import Function from "components/common/function/Form";

export default {
  name: "QuestionnaireList",
  data() {
    return {
      // questionnairelist: null
      // name:null,
      // teacher:null
      functionlist: null
    }
  },
  props: {
    "questionnairelist": Array
  },
  components: {
    Function
  },
  methods: {
    showdetaol(row) {
      // console.log(row)
      this.id = row.id
      this.$store
        .dispatch('evaluation/getdetail', row.id)
        .then(result => {
          console.log(result)
        }).catch(err => {
        console.log(err)
      });

    }
  }

}
</script>

<style scoped>

</style>
