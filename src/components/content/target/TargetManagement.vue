<template>
  <div>
    <vxe-table
      show-overflow
      row-key
      border
      resizable
      ref="xTree"
      :loading="loading"
      :tree-config="{children: 'children',line: true}"
      :data="targetData"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
    >
      <vxe-table-column title="ID" field="id" width="120" tree-node></vxe-table-column>
      <vxe-table-column field="name" title="Name" show-overflow="tooltip" ></vxe-table-column>
      <vxe-table-column field="weight" title="Weight"></vxe-table-column>
      <vxe-table-column title="Setting" width="160" :resizable="false" show-overflow>
        <template v-slot="{ row }">
          <vxe-button @click="insertEvent(row)">添加指标</vxe-button>
          <!--          <vxe-button @click="showDetailEvent(row)">添加{{ row.name }}</vxe-button>-->

          <!--          选择指标弹出-->
        </template>
      </vxe-table-column>
      <template v-slot:empty>
            <span style="color: red;">
              <p>不用再看了，没有更多数据了！</p>
            </span>
      </template>
    </vxe-table>

  </div>
</template>

<script>
export default {
  name: "TargetManagement",
  data() {
    return {
      loading: false,
      targetmanagement: false,
      // targetData: {
      //   // id: 1,
      //   name: 'root',
      //   weight: 1,
      //   children: []
      // },
      increase: 2
    }
  },
  props:{
    targetData:{
      type: Array,
      default () {
        return {}
      }
    }
  },
  methods: {
    insertEvent(row) {
      let newData = {
        id: this.increase++,
        name: 'root2',
        weight: 0.5,
        children: []
      }

      // this.targetData.find(item => {
      //   return item.id == row.id
      // }).children.push(newData)
      //
      // this.dps(row,newData)

      row.children.push(newData)
      // window.console.log(this.targetData)
      console.log(this.$refs.xTree.getRowIndex(row));
      // this.$refs.xTree.setAllTreeExpand(true)
    }
  }
}
</script>

<style scoped>

</style>
