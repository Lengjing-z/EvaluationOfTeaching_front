<template>
  <div>
<!--    <p><Button @click="expandAll">全部展开 expandAll</Button><Button @click="foldAll">全部折叠 foldAll</Button></p>-->
    <Table ref="table" :datas="datas" border>
      <TableItem title="Serial" prop="$serial" treeOpener></TableItem>
      <TableItem title="Name" prop="name" ></TableItem>
      <TableItem title="Weight" prop="weight" unit="%"></TableItem>
      <TableItem title="操作">
        <template slot-scope="{data}">
          <Button :circle="true" icon="h-icon-plus"  @click="insertTarget(data)"></Button>
<!--          <b-modal id="addTarget" size="ml" title="指标管理" >-->
<!--            <div>123</div>-->
<!--          </b-modal>-->

          <Button :circle="true" icon="h-icon-trash" @click="deleteTarget(data)"></Button>

        </template>
      </TableItem>
    </Table>
  </div>
</template>

<script>
export default {
  name: "TargetMana",
  data() {
    return {
      datas:[]
    };
  },
  created() {
    this.datas = Array(this.targetData)
  },
  mounted() {
  },
  props:{
    targetData:{
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    insertTarget(row){
      let newdata = {
        id:1,
        name: 'child',
        weight:100,
        children: []
      }
      // this.$refs.table.foldAll();
      row.children.push(newdata)
      // this.$refs.table.expandAll();
      this.datas = Array(this.targetData)
    },
    deleteTarget(data){
      console.log(data)

    }
  },

};
</script>

