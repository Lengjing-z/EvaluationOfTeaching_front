<template>
  <div>
    <vxe-table
      stripe
      :data="$route.query.data"
      :tooltip-config="{contentMethod: showTooltipMethod, enterable: true}"
    >
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="qnTitle" title="问卷名" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="claName" title="班级"></vxe-table-column>
      <vxe-table-column field="cName" title="课程"></vxe-table-column>
      <vxe-table-column field="beginTime" title="开始时间" :formatter="formatterTime" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="endTime" title="结束时间" :formatter="formatterTime" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="ppp" title="进度"  ></vxe-table-column>
      <vxe-table-column title="操作">
        <template v-slot="{ row }">
          <vxe-button @click="showProgressing(row)">查看数据统计</vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
    <b-modal id="progressing" size="md" hide-footer title="进度">
      <v-chart class="my-chart" :options="option"/>
    </b-modal>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
export default {
  name: "TeacherQuestionnaireFinishToStudent",
  data() {
    return {
      questionnaireList:[],
      option:""
    }
  },
  mounted() {
    this.questionnaireList = this.$route.params.data
    console.log(this.$route.params.data)
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
      this.$store.dispatch("beEvaluation/course/getDetail",row.sttId)


      console.log(this.$route.query.data);
      this.$bvModal.show("progressing")
    },
    formatterTime ({ cellValue, row, column }) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    }
  },
  components:{
    "v-chart": ECharts
  }
}
</script>

<style scoped>

</style>
