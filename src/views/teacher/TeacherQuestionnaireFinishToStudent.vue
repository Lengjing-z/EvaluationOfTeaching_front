<template>
  <div>
    <vxe-table
      stripe
      :data="$route.query.data"
      :tooltip-config="{contentMethod: showTooltipMethod, enterable: true}"
    >
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="qTitle" title="问卷名" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="iName" title="学院"></vxe-table-column>
      <vxe-table-column field="begainTime" title="开始时间" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="endTime" title="结束时间" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column title="操作">
        <template v-slot="{ row }">
          <vxe-button @click="">查看详情</vxe-button>
          <vxe-button @click=" (row)">查看进度</vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
    <b-modal id="progressing" size="md" hide-footer title="进度">

    </b-modal>
  </div>
</template>

<script>
var echarts = require('echarts');
export default {
  name: "TeacherQuestionnaireFinishToStudent",
  data() {
    return {
    }
  },
  mounted() {
    this.questionnaireList = this.$store.state.beEvaluation.course.all
  },
  methods: {
    showTooltipMethod({type, column, row, items, _columnIndex}) {
      // 重写默认的提示内容
      if (column.property === 'begainTime' || column.property === 'endTime') {
        return '时间：' + row[column.property]
      }
      if (column.property === 'qTitle') {
        return '问卷名：' + row[column.property]
      }
    },
    showProgressing(row){

      this.$bvModal.show("progressing")
    }
  }
}
</script>

<style scoped>

</style>
