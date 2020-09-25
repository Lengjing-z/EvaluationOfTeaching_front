<template>
 <div class="container mt-5">
<!--   工具栏开始-->
   <div>
     <p>工具栏位置随意放</p>
       <vxe-toolbar
         custom
         print
         ref="xToolbar"
         :refresh="{query: findList}"  >
         <template v-slot:buttons>
<!--           添加权限-->
           <vxe-button circle @click="addlimit = true"><i class="vxe-icon--plus"></i></vxe-button>
           <vxe-modal v-model="addlimit" title="新建权限" width="600" height="400" resize remember mask-closable>
             <add-limit :nodelist="tableData"></add-limit>
           </vxe-modal>

<!--           修改权限-->
           <vxe-button circle @click="updatelimit = true"><i class="vxe-icon--remove"></i></vxe-button>
           <vxe-modal v-model="updatelimit" title="修改权限" width="600" height="400" resize remember>
             <update-limit :nodelist="tableData"></update-limit>
           </vxe-modal>
           <vxe-button circle @click="target = true"><i class="vxe-icon--arrow-top"></i></vxe-button>
           <vxe-modal v-model="target" title="设置指标" width="600" height="400" resize remember>
             <target-value :nodelist="tableData"></target-value>
           </vxe-modal>
         </template>

       </vxe-toolbar>
   </div>
<!--   工具栏结束-->
<!--   权限列表-->
   <vxe-table
     show-overflow
     row-key
     resizable
     round
     :loading="loading"
     :tree-config="{children: 'children',line: true}"
     :data="tableData"
     :checkbox-config="{labelField: 'id', highlight: true}"
     @checkbox-change="selectChangeEvent">
     <vxe-table-column type="checkbox" title="ID" width="180" tree-node></vxe-table-column>
     <vxe-table-column field="name" title="Name" show-overflow="tooltip"></vxe-table-column>
     <vxe-table-column field="is_role" title="is_role"></vxe-table-column>
     <vxe-table-column field="p_node" title="p_node"></vxe-table-column>
     <vxe-table-column field="is_end" title="is_end"></vxe-table-column>
     <template v-slot:empty>
            <span style="color: red;">
              <img src="@/assets/img/img1.gif">
              <p>不用再看了，没有更多数据了！</p>
            </span>
     </template>
   </vxe-table>

 </div>
</template>

<script>
import AddLimit from "components/content/limits/AddLimit";
import updateLimit from "components/content/limits/updateLimit";

import TargetValue from "components/content/target/TargetValue";

export default {
  name: "Limits",
  data () {
    return {
      loading: false,
      allAlign: null,
      tableData: null,
      addlimit: false,
      updatelimit:false,
      target:false,
      list1: [],
    }
  },
  components:{
    AddLimit,
    updateLimit,
    TargetValue
  },
  created () {
    const list1 = []
    for (let index = 0; index < 20; index++) {
      list1.push({ label: `选项${index}`, value: index })
    }
    this.data1 = list1
    this.list1 = list1

    this.loading = true
    setTimeout(() => {
    this.tableData = [{
      id: 1,
      name: 'student',
      is_role: 0,
      p_node: null,
      is_end: 0,
      children: [
        {
          id: 1,
          name: 'student',
          is_role: 0,
          p_node: 1,
          is_end: 0,
          children: [
            {
              id: 2,
              name: '查看课程',
              is_role: 0,
              p_node: 1,
              is_end: 1
            },
            {
              id: 3,
              name: '查看评教信息',
              is_role: 0,
              p_node: 1,
              is_end: 1
            }
          ]
        },
        {
          id: 4,
          name: 'teacher',
          is_role: 1,
          p_node: 1,
          is_end: 0,
          children: [
            {
              id: 5,
              name: '大姐夫的数据',
              is_role: 0,
              p_node: 4,
              is_end: 1,
            }
          ]
        }
      ]
    },
      {
        id: 5,
        name: '大姐夫的数据',
        is_role: 0,
        p_node: 4,
        is_end: 1,
        children: [
          {
            id: 5,
            name: '大姐夫的数据',
            is_role: 0,
            p_node: 4,
            is_end: 1,
          }
        ]
      }
      ]
      this.loading = false
    }, 1000)
      },
  methods: {
    findList () {
      this.loading = true
      // return new Promise(resolve => {
        setTimeout(() => {
          this.tableData =[]
          this.loading = false
          // resolve()
        }, 300)
      // })
    },

    selectEvent1 (item) {
      this.value1 = item.label
      this.$refs.xDown1.hidePanel().then(() => {
        this.list1 = this.data1
      })
    },
    selectChangeEvent ({ records }) {
      console.info(`勾选${records.length}个树形节点`, records)
    }
  }

}
</script>

<style scoped>

button{
  border: 0;
  outline: none;
  box-shadow: none;
}
.my-dropdown1 {
  height: 200px;
  overflow: auto;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
}
.list-item1:hover {
  background-color: #f5f7fa;
}
.my-dropdown2 {
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
}
.list-item2:hover {
  background-color: #f5f7fa;
}
.my-dropdown3 {
  width: 400px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
.my-dropdown4 {
  width: 600px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}

</style>
