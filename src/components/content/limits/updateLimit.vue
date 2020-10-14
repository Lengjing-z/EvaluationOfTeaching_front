<template>
  <div>
    <!--   权限列表-->
    <vxe-table
      show-overflow
      row-key
      resizable
      ref="limits"
      :loading="load"
      :data="limitslist"
      :tree-config="{children: 'children',line: true}"
      row-id="id"
      :checkbox-config="{labelField: 'name',checkRowKeys: defaultSelectLimits,highlight:true}"
      @checkbox-change="selectChangeEvent"
    >
      <vxe-table-column type="checkbox" title="Name" width="180" tree-node show-overflow="tooltip"></vxe-table-column>
      <vxe-table-column field="role" title="is_role"></vxe-table-column>
      <vxe-table-column field="pnode" title="p_node"></vxe-table-column>
      <vxe-table-column field="end" title="is_end"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
name: "updateLimit",
  data(){
    return{
      load:false
      // limitslist: null,
      // defaultSelectLimits:[],
    }
  },
  props:['limitslist','defaultSelectLimits'],
  created() {
    console.log(this.defaultSelectLimits);
    this.load = true
  this.load = false
  },
  methods:{
    // 获取复选框点击事件
    selectChangeEvent({ checked, records }) {
      console.log(checked ? '勾选事件' : '取消事件', records)
    },

  }
}
</script>

<style scoped>
.my-dropdown4 {
  width: 600px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
</style>
