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
      :data="targetDataChildren"
      :edit-config="{trigger: 'dblclick', mode: 'cell'}"
    >
<!--      <vxe-table-column title="ID" field="id"></vxe-table-column>-->
      <vxe-table-column field="name" title="Name" show-overflow="tooltip" tree-node
                        :edit-render="{name: 'input', immediate: true, attrs: {type: 'text'}}"></vxe-table-column>
      <vxe-table-column field="rate" title="Weight(%)"
                        :edit-render="{name: '$input', props: {type: 'int', digits: 2}}"></vxe-table-column>
      <vxe-table-column title="Setting" :resizable="false">
        <template v-slot="{ row }">
          <vxe-button @click="insertTarget(row)">添加指标</vxe-button>
          <vxe-button @click="deleteTarget(row)">删除指标</vxe-button>
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
      validRules: {
        rate: [
          {pattern: "/^(?:0|[1-9][0-9]?|100)$/", message: "格式不正确"}
        ]
      },
      target: [],
      maxid: 0
    }
  },
  props: {
    targetDataChildren: {
      type: Array,
      default() {
        return {}
      }
    },
    mid: Number
  },
  computed: {},
  beforeUpdate() {
    this.maxid = this.mid
    // console.log("c", this.maxid)
  },
  methods: {
    insertTarget(row) {
      let newData = {
        id: ++this.maxid,
        name: 'targetName',
        rate: 0.5,
        end:false,
        paNode:row.id,
        children: []
      }
      this.$refs.xtargetDataChildren.clearTreeExpand()
      row.children.push(newData)
      this.$refs.xtargetDataChildren.setAllTreeExpand(true)
    },
    deleteTarget(row) {
      this.$refs.xtargetDataChildren.clearTreeExpand()
      this.dfs(row, this.targetDataChildren)
      this.$refs.xtargetDataChildren.setAllTreeExpand(true)
    },
    dfs(row, ls) {
      ls.forEach((item, index) => {
        if (item === row) {
          ls.splice(index, 1)
        } else {
          this.dfs(row, item.children)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
