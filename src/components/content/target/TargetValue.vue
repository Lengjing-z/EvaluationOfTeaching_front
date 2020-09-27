<template>
  <div class="container mt-5">
    <!--           添加权限-->
    <b-button variant="success" v-b-modal.modal-xl class="mb-4">指标管理</b-button>

    <b-modal id="modal-xl" size="xl" title="指标管理">
      <target-management :target-data="targetData"></target-management>
      <!--          <target-mana :target-data="targetData"></target-mana>-->
    </b-modal>


    <vxe-table
      show-overflow
      row-key
      resizable
      round
      :loading="loading"
      :tree-config="{children: 'children'}"
      :data="targetData"
      :checkbox-config="{labelField: 'id', highlight: true}"
      :edit-config="{trigger: 'dblclick', mode: 'cell'}"
    >
      <vxe-table-column title="ID" field="id" col-id="id" tree-node></vxe-table-column>
      <vxe-table-column field="name" title="Name" show-overflow="tooltip" tree-node></vxe-table-column>
      <vxe-table-column field="weight" title="Weight"></vxe-table-column>
      <vxe-table-column title="Setting" width="160" :resizable="false" show-overflow>
        <template v-slot="{ row }">
          <vxe-button @click="">添加指标</vxe-button>

          <!--          <vxe-button @click="showDetailEvent(row)">添加{{ row.name }}</vxe-button>-->
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
import TargetManagement from "components/content/target/TargetManagement";
import TargetMana from "components/content/target/TargetMana";

export default {
  name: "TargetValue",
  data() {
    return {
      loading: false,
      targetData: [{
        id: 1,
        name: 'root',
        weight: 100,
        children: []
      }],
    }
  },
  components: {
    TargetManagement,
    TargetMana
  }
}
</script>

<style scoped>

</style>
