<template>
  <div>
    <!--    Header-->
    <nav-bar></nav-bar>
    <!--    Manager-->
    <manager-setting :manager="manager"></manager-setting>
    <div class="container mt-5">
      <header>
        <h3>问卷信息管理</h3>
      </header>
      <!--   工具栏开始-->
      <div>
        <b-input-group prepend="编号" class="mt-3 mb-3 w-50">
          <b-form-input v-model="code"></b-form-input>
          <b-input-group-append>
            <b-button variant="info" @click="selectUserByCode">查询</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
      <!--   工具栏结束-->

      <!--   用户列表   -->
      <vxe-table
        stripe
        :loading="loading"
        :data="people">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="code" title="Code"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
        <vxe-table-column title="操作" width="160">
          <template v-slot="{ row,index }">
            <vxe-button v-b-modal.limits>设置权限</vxe-button>
          </template>
        </vxe-table-column>
      </vxe-table>
      <b-modal id="limits" title="权限">
        <!--   权限列表-->
        <vxe-table
          show-overflow
          row-key
          resizable
          round
          :tree-config="{children: 'children',line: true}"
          :data="limitslist"
          :checkbox-config="{labelField: 'id', highlight: true}"
          @checkbox-change="selectChangeEvent">
          <vxe-table-column type="checkbox" title="ID" width="180" tree-node></vxe-table-column>
          <vxe-table-column field="name" title="Name" show-overflow="tooltip"></vxe-table-column>
          <vxe-table-column field="role" title="is_role"></vxe-table-column>
          <vxe-table-column field="pnode" title="p_node"></vxe-table-column>
          <vxe-table-column field="end" title="is_end"></vxe-table-column>
          <template v-slot:empty>
            <span style="color: red;">
              <img src="@/assets/img/img1.gif" alt="Bird">
              <p>不用再看了，没有更多数据了！</p>
            </span>
          </template>
        </vxe-table>
      </b-modal>


    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import AddLimit from "components/content/limits/AddLimit";
import updateLimit from "components/content/limits/updateLimit";

import TargetValue from "components/content/target/TargetValue";

import NavBar from "components/content/nav/NavBar";
import ManagerSetting from "components/common/Manager/ManagerSetting";
import Footer from "components/content/footer/Footer";

export default {
  name: "Limits",
  data() {
    return {
      manager: [{name: "权限管理"}],
      loading: false,
      code: "",
      people: [{name:123}],
      allAlign: null,
      limitslist: null,
    }
  },
  components: {
    NavBar,
    Footer,
    AddLimit,
    updateLimit,
    TargetValue,
    ManagerSetting
  },
  created() {

    // 查询所有权限
    // this.$store.dispatch("admin/power/loadAll")
    //   .then(res => {
    //   })

    // 获取所有用户


    // 加载权限树
    setTimeout(() => {
      // console.log(this.$store.getters["admin/power/getAllPowerTree"])
      this.limitslist = Array(this.$store.getters["admin/power/getAllPowerTree"])
    }, 500)
  },
  methods: {
    // 模糊查询用户 （code）
    selectUserByCode() {
      // console.log(this.people);
      // this.loading = true
      this.$store.dispatch("admin/users/queryUserByCode", this.code)
        .then(res => {
          // console.log(this.$store.state["admin/power/all"]);
          // this.loading = false
          // console.log(res)
          this.people = this.$store.state.admin.users.userList
        }).catch(err =>{
        console.log(err)
      })


    },

    selectEvent1(item) {
      // this.value1 = item.label
      // this.$refs.limittools.hidePanel().then(() => {
      // })
    },
    selectChangeEvent({records}) {
      // console.info(`勾选${records.length}个树形节点`, records)
    }
  }

}
</script>

<style scoped>

button {
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
