<template>
  <div>
    <vxe-table
      stripe
      border
      :data="$route.query.data"
      :tooltip-config="{contentMethod: showTooltipMethod, enterable: true}"
    >
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="qTitle" title="问卷名" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="iName" title="学院" width="100" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="begainTime" title="开始时间" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="endTime" title="结束时间" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column title="操作">
        <template v-slot="{ row }">
          <vxe-button @click="dataAnalysis(row)">查看数据分析</vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
    <b-modal id="analysis" size="lg" hide-footer title="进度">
      <v-chart class="my-chart" :options="bar"/>
    </b-modal>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

export default {
  name: "TeacherQuestionnaireFinishToTeacher",
  data() {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {
      questionnaireList: [],
      bar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      },
      option:''
    }

  },
  components: {
    "v-chart": ECharts
  },
  created() {
    console.log(this.$store.state.beEvaluation.institute.all);
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
    dataAnalysis(row) {
      // var data = [{
      //   name: 'Grandpa',
      //   children: [{
      //     name: 'Uncle Leo',
      //     value: 15,
      //     children: [{
      //       name: 'Cousin Jack',
      //       value: 2
      //     }, {
      //       name: 'Cousin Mary',
      //       value: 5,
      //       children: [{
      //         name: 'Jackson',
      //         value: 2
      //       }]
      //     }, {
      //       name: 'Cousin Ben',
      //       value: 4
      //     }]
      //   }, {
      //     name: 'Father',
      //     value: 10,
      //     children: [{
      //       name: 'Me',
      //       value: 5
      //     }, {
      //       name: 'Brother Peter',
      //       value: 1
      //     }]
      //   }]
      // }, {
      //   name: 'Nancy',
      //   children: [{
      //     name: 'Uncle Nike',
      //     children: [{
      //       name: 'Cousin Betty',
      //       value: 1
      //     }, {
      //       name: 'Cousin Jenny',
      //       value: 2
      //     }]
      //   }]
      // }];
      //
      // this.option = {
      //   series: {
      //     type: 'sunburst',
      //     // highlightPolicy: 'ancestor',
      //     data: data,
      //     radius: [0, '90%'],
      //     label: {
      //       rotate: 'radial'
      //     }
      //   }
      // };

      this.$store.dispatch("beEvaluation/institute/getDetail",row.tttId)
      .then(res =>{
        console.log(res)
      })
      this.$bvModal.show("analysis")
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
