<template>
  <div>
    <vxe-table
      stripe
      :data="questionnaireList"
      :tooltip-config="{contentMethod: showTooltipMethod, enterable: true}"
    >
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="qnTitle" title="问卷名" show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="claName" title="班级"></vxe-table-column>
      <vxe-table-column field="cName" title="课程"></vxe-table-column>
      <vxe-table-column field="beginTime" title="开始时间" :formatter="formatterTime"
                        show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="endTime" title="结束时间" :formatter="formatterTime"
                        show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="ppp" title="进度"></vxe-table-column>
      <vxe-table-column title="操作">
        <template v-slot="{ row }">
          <vxe-button @click="showProgressing(row)">查看数据统计</vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
    <b-modal id="progressing" size="lg" hide-footer title="进度">
      <v-chart class="pro" :options="option"/>
      <v-chart class="pro2" :options="option2"/>
    </b-modal>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
export default {
  name: "TeacherQuestionnaireFinishToStudent",
  data() {
    return {
      questionnaireList: [],
      option: {},
      option2: {},
    }
  },
  mounted() {
    this.questionnaireList = this.$store.state.beEvaluation.course.all
    // console.log(this.$store.state.beEvaluation.course.all)
  },
  beforeUpdate() {
    this.questionnaireList = this.$store.state.beEvaluation.course.all
  },
  methods: {
    showTooltipMethod({type, column, row, items, _columnIndex}) {
      // 重写默认的提示内容
      if (column.property === 'beginTime' || column.property === 'endTime') {
        return '时间：' + row[column.property]
      }
      if (column.property === 'qnTitle') {
        return '问卷名：' + row[column.property]
      }
    },
    formatterTime({cellValue, row, column}) {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd')
    },
    showProgressing: function (row) {
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
          data: ['1', '2', '3', '4', '5']
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
          name: 1,
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'insideRight'
          },
          data: []
        }, {
          name: 2,
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'insideRight'
          },
          data: []
        }, {
          name: 3,
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'insideRight'
          },
          data: []
        }, {
          name: 4,
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'insideRight'
          },
          data: []
        }, {
          name: 5,
          type: 'bar',
          stack: '总量',
          label: {
            show: true,
            position: 'insideRight'
          },
          data: []
        }]
      }

      // 展示数据分析
      // 进行人数统计
      this.$store.dispatch("beEvaluation/course/getDetail", row.sttId)
        .then(res => {
          res.forEach(item => {
            // 这里对图标进行初始化
            if (!this.option.yAxis.data.includes(item.qId)) {
              this.option.yAxis.data.push(item.qId)
            }
            // 遍历进行统计每个问题不同等级进行人数统计
            this.option.series.forEach(ops => {
              if (ops.name == parseInt(item.answer)) {
                if (ops.data[this.option.yAxis.data.indexOf(item.qId)] == null) {
                  ops.data[this.option.yAxis.data.indexOf(item.qId)] = 1
                } else {
                  ops.data[this.option.yAxis.data.indexOf(item.qId)]++
                }
              }
            });
          })
          var data = [
            {
            name: 'Grandpa',
            children: [{
              name: 'Uncle Leo',
              value: 15,
              children: [{
                name: 'Cousin Jack',
                value: 2
              }, {
                name: 'Cousin Mary',
                value: 5,
                children: [{
                  name: 'Jackson',
                  value: 2
                }]
              }, {
                name: 'Cousin Ben',
                value: 4
              }]
            }, {
              name: 'Father',
              value: 10,
              children: [{
                name: 'Me',
                value: 5
              }, {
                name: 'Brother Peter',
                value: 1
              }]
            }]
          }, {
            name: 'Nancy',
            children: [{
              name: 'Uncle Nike',
              children: [{
                name: 'Cousin Betty',
                value: 1
              }, {
                name: 'Cousin Jenny',
                value: 2
              }]
            }]
          }];

          this.option2 = {
            series: {
              type: 'sunburst',
              // highlightPolicy: 'ancestor',
              data: data,
              radius: [0, '90%'],
              label: {
                rotate: 'radial'
              }
            }
          };
          // 获取指标 制作第二个图标
          this.$store.dispatch("admin/indicator/getDetail", {id:row.indexRootId})
            .then(res =>{
              // console.log("JJJ",res,JSON.stringify(this.$store.state.admin.indicator.indicatorDetail))
            })
          // console.log(JSON.stringify(this.option))
        })
      this.$bvModal.show("progressing")



    },


  }
}
</script>

<style scoped>


</style>
