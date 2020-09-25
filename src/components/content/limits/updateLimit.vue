<template>
  <vxe-form :data="limitData" :rules="formRules" title-align="right" title-width="60">
    <vxe-form-item title="基本信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-address-card-o'}"></vxe-form-item>
    <vxe-form-item title="权限名称" field="name" span="24" title-align="left" title-width="80px" :item-render="{name: 'input', attrs: {placeholder: '请输入名称'}}"></vxe-form-item>

    <vxe-form-item title="其他信息" span="24" title-align="left" title-width="200px" :title-prefix="{icon: 'fa fa-info-circle'}"></vxe-form-item>
    <!--      是否为角色-->
    <vxe-form-item title="is_role" field="is_role" span="12">
      <vxe-select v-model="limitData.is_role" class="vxe-select">
        <vxe-option :value="0" :label="false"></vxe-option>
        <vxe-option :value="1" :label="true"></vxe-option>
      </vxe-select>
    </vxe-form-item>

    <!--      是否为末尾结点 -->
    <vxe-form-item title="is_end" field="is_end" span="12">
      <vxe-select v-model="limitData.is_end" class="vxe-select">
        <vxe-option :value="0" :label="false"></vxe-option>
        <vxe-option :value="1" :label="true"></vxe-option>
      </vxe-select>
    </vxe-form-item>

    <!--      父级权限-->
    <!--      <vxe-form-item title="p_node" field="p_node" span="24" :item-render="{name: 'input', attrs: {placeholder: '请输入名称'}}"></vxe-form-item>-->
    <vxe-form-item title="p_node" field="p_node" span="24">
      <vxe-pulldown ref="xDown4" transfer>
        <template v-slot>
          <vxe-input  v-model="p_node" suffix-icon="fa fa-search" placeholder="实现下拉分页表格"
                      @keyup="keyupEvent4" @focus="focusEvent4" @suffix-click="suffixClick4" ></vxe-input>
        </template>
        <template v-slot:dropdown>
          <div class="my-dropdown4">
            <!--   权限列表-->
            <vxe-table
              row-key
              show-overflow
              resizable
              auto-resize
              max-height="350"
              :loading="loading"
              :tree-config="{children: 'children',line: true,expandAll:true}"
              :data="nodelist"
              @cell-click="cellClickEvent4"
            >
              <vxe-table-column field="id" title="ID" tree-node></vxe-table-column>
              <vxe-table-column field="name" title="Name" show-overflow="tooltip" ></vxe-table-column>
              <vxe-table-column field="is_role" title="is_role"></vxe-table-column>
              <template v-slot:empty>
            <span style="color: red;">
              <p>不用再看了，没有更多数据了！</p>
            </span>
              </template>
            </vxe-table>
          </div>
        </template>
      </vxe-pulldown>
    </vxe-form-item>

    <vxe-form-item align="center" span="24">
      <template v-slot>
        <vxe-button type="submit" status="primary">提交</vxe-button>
        <vxe-button type="reset">重置</vxe-button>
      </template>
    </vxe-form-item>

  </vxe-form>
</template>

<script>
export default {
name: "updateLimit",
  data(){
    return{
      value1: '',
      limitData: {
        is_role: 0,
        is_end: 0,
        sex: '',
        age: 26,
        address: null
      },
      p_node: '',
      loading: false,
      formRules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符' }
        ]
      }
    }
  },
  props:{
    nodelist:{
      type:Array,
      default(){
        return{}
      }
    }
  },
  methods:{
    focusEvent4 () {
      this.$refs.xDown4.showPanel()
    },
    keyupEvent4 () {
      const { p_node } = this
      this.loading = true
      setTimeout(() => {
        this.loading = false
        if (p_node) {
          this.tableData4 = this.nodelist.filter(row => row.name.indexOf(p_node) > -1)
        } else {
          this.tableData4 = this.nodelist.slice(0)
        }
      }, 100)
    },
    suffixClick4 () {
      this.$refs.xDown4.togglePanel()
    },
    cellClickEvent4 ({ row }) {
      console.log("123");
      this.p_node = row.name
      this.$refs.xDown4.hidePanel()
    },

    toggleExpandChangeEvent ({ row, expanded }) {
      console.log('节点展开事件' + expanded)
    }

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
