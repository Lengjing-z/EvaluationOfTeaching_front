<template>
  <div class="container mt-5">
    <p>指标</p>
    <vxe-toolbar
      ref="xToolbar"
      :refresh="{query: findList}"  >
      <template v-slot:buttons>
        <!--           添加权限-->
        <vxe-button circle @click="targetmanagement = true"><i class="vxe-icon--plus"></i></vxe-button>
        <vxe-modal v-model="targetmanagement" title="添加指标" width="1000" height="400" resize remember>

        </vxe-modal>

        <vxe-button loading circle></vxe-button>

      </template>

    </vxe-toolbar>
    <vxe-table
      show-overflow
      row-key
      border
      resizable
      :loading="loading"
      :tree-config="{children: 'children',line: true}"
      :data="targetData"
      :checkbox-config="{labelField: 'id', highlight: true,expandAll:true}"
      @checkbox-change="selectChangeEvent">
      <vxe-table-column title="ID" field="id" width="180" tree-node></vxe-table-column>
      <vxe-table-column field="name" title="Name" show-overflow="tooltip" tree-node></vxe-table-column>
      <vxe-table-column field="weight" title="Weight"></vxe-table-column>
      <vxe-table-column title="Setting" width="160" :resizable="false" show-overflow>
        <template v-slot="{ row }">
          <vxe-button @click="showDetailEvent(row)">添加指标</vxe-button>
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
name: "TargetValue",
  data () {
    return {
      loading: false,
      targetmanagement:false,
      targetData: [{
        id:1,
        name: 'root',
        weight:1,
        children: []
      }],
    }
    }
}
</script>

<style scoped>

</style>
