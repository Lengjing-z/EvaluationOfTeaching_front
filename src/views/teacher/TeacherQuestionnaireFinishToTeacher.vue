<template>
  <div>
    <vxe-table
      stripe
      border
      :data="questionnaireList"
      :tooltip-config="{contentMethod: showTooltipMethod, enterable: true}"
    >
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="qTitle" title="问卷名" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="iName" title="学院" width="100" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="begainTime" title="开始时间" show-overflow="tooltip" :formatter="formatterTime"></vxe-table-column>
      <vxe-table-column field="endTime" title="结束时间" show-overflow="tooltip" :formatter="formatterTime"></vxe-table-column>
      <vxe-table-column title="操作">
        <template v-slot="{ row }">
          <vxe-button @click="dataAnalysis(row)">查看数据分析</vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
    <b-modal id="analysis" size="lg" hide-footer title="进度">
      <v-chart class="pro" :options="option"/>
      <v-chart class="pro2" :options="option2"/>
    </b-modal>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import XEUtils from "xe-utils";

export default {
  name: "TeacherQuestionnaireFinishToTeacher",
  data() {
    return {
      questionnaireList: [],
      option:{},
      option2: {},
    }

  },
  components: {
    "v-chart": ECharts
  },
  mounted() {
    this.questionnaireList = this.$store.state.beEvaluation.institute.all
  },
  beforeUpdate() {
    this.questionnaireList = this.$store.state.beEvaluation.institute.all
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
    formatterTime({cellValue, row, column}) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    },
    dataAnalysis(row) {
      this.option = {
        title: {
          text: '人数统计',
          left: 'center',
          align: 'right'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          top: 30,
          data: ['不满意', '有点差', '一般般', '满意', '非常满意']
        },
        grid: {
          left: '3%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: []
        },
        series: [
          {
            name: '不满意',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: []
          }, {
            name: '有点差',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: []
          }, {
            name: '一般般',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: []
          }, {
            name:  '满意',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: []
          }, {
            name:  '非常满意',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: []
          }]
      }
      this.$store.dispatch("admin/indicator/getDetail", {id:row.indexRootId})

      // 展示数据分析
      // 进行人数统计
      this.$store.dispatch("beEvaluation/institute/getDetail", row.tttId)
        .then(res => {
          let leg = ['不满意', '有点差', '一般般', '满意', '非常满意']
          res.forEach(item => {
            // 这里对图标进行初始化
            if (!this.option.yAxis.data.includes(item.qsId)) {
              this.option.yAxis.data.push(item.qsId)
            }
            // 遍历进行统计每个问题不同等级进行人数统计
            this.option.series.forEach(ops => {
              if (ops.name == leg[parseInt(item.answer)-1]) {
                if (ops.data[this.option.yAxis.data.indexOf(item.qsId)] == null) {
                  ops.data[this.option.yAxis.data.indexOf(item.qsId)] = 1
                } else {
                  ops.data[this.option.yAxis.data.indexOf(item.qsId)]++
                }
              }
            });
          })

          // 获取指标 制作第二个图标
          this.option2 = {
            series: {
              type: 'sunburst',
              // highlightPolicy: 'ancestor',
              data: [],
              radius: [0, '90%'],
              label: {
                rotate: 'radial'
              }
            }
          };
          // 获取指标 制作第二个图标
              this.option2.series.data = this.$store.getters["admin/generateDiagramData"](this.$store.getters["admin/indicator/getTndicatorTree"].children,res)

        }).then(() =>{
        this.$bvModal.show("analysis")
      })
    }
  }

}
</script>

<style scoped>
.my-chart {
  width: 800px;
  height: 500px;
}
</style>
