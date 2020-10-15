<template>
  <div>
    <vxe-table
      show-overflow
      row-key
      border
      resizable
      ref="xtargetDataChildren"
      :loading="loading"
      :tree-config="{children: 'children',line:true}"
      :expand-config="{labelField: 'name', expandAll: false}"
      :data="targetTempTree"
    >
      <!--      <vxe-table-column title="ID" field="id"></vxe-table-column>-->
      <vxe-table-column field="name" title="Name" show-overflow="tooltip" tree-node></vxe-table-column>
      <vxe-table-column field="rate" title="Weight(%)"></vxe-table-column>
      <vxe-table-column title="Setting" :resizable="false">
        <template v-slot="{ row }">
          <vxe-button @click="chooseTarget(row)" v-if="row.children.length == 0">添加指标</vxe-button>
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
  name: "TargetValue",
  data() {
    return {
      loading: false,
      target: [],
    }
  },
  props: {
    targetTempTree: {
      type: Array,
      default() {
        return {}
      }
    },
    userMessage:{
      type: Array,
      default() {
        return {}
      }}
  },
  methods: {
    chooseTarget(data) {
      this.$store.commit("admin/indicator/addCurrent",data)
      let row = this.$store.state.admin.indicator.currentRow;
      row.name = data.name
      row.indexEndId = data.id
      row.rate = data.rate
      this.userMessage.forEach((orow) =>{
        if (orow.cntent == row.content)
          orow = row
      })
      // 更新表格数据
      this.$emit("changeuserMessage", this.userMessage);
      // 关闭模态框
      this.$bvModal.hide('targetvalue')

    }
  }
}
</script>

<style scoped>

</style>
