<template>
  <div>
    <vxe-table
      show-overflow
      row-key
      border
      resizable
      ref="xTable"
      :loading="loading"
      :tree-config="{children: 'children',line: true}"
      :data="targetData"
      :edit-config="{trigger: 'dblclick', mode: 'cell'}"
      :edit-rules="validRules"
    >
      <vxe-table-column title="ID" type="seq" min-width="100" tree-node></vxe-table-column>
      <vxe-table-column field="name" title="Name" show-overflow="tooltip" :edit-render="{name: 'input', immediate: true, attrs: {type: 'text'}}"></vxe-table-column>
      <vxe-table-column field="weight" title="Weight(%)" :edit-render="{name: '$input', props: {type: 'int', digits: 2}}"></vxe-table-column>
      <vxe-table-column title="Setting" :resizable="false" >
        <template v-slot="{ row }">
          <vxe-button @click="insertEvent(row)">添加指标</vxe-button>
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
      increase: 2,
      validRules: {
        weight: [
          { pattern: '/^(?:0|[1-9][0-9]?|100)$/', message: '格式不正确' }
        ]
      }
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
        name: 'target'+this.increase,
        weight: 50,
        children: []
      }
      row.children.push(newData)
    },
  deleteTarget(row){
    this.dfs(row,this.targetData)
  },
  dfs(row,ls){
    ls.forEach((item,index)=>{
      if (item===row){
        ls.splice(index,1)
      }else{
        this.dfs(row,item.children)
      }
    })
  }
  }
}
</script>

<style scoped>

</style>
