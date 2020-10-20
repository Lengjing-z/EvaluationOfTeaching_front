<template>
  <div>
    <!--    Header-->
    <nav-bar></nav-bar>
    <!--    Manager-->
    <manager-setting :manager="manager"></manager-setting>
    <div class="container mt-5 mb-5">
      <header>
        <h3>权限管理</h3>
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
      <div style="min-height: 400px">
        <vxe-table
          row-key
          show-overflow
          stripe
          :loading="loading"
          :data="people"
          height="auto"
        >
          <vxe-table-column type="seq" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name"></vxe-table-column>
          <vxe-table-column field="code" title="Code"></vxe-table-column>
          <vxe-table-column field="age" title="Age"></vxe-table-column>
          <vxe-table-column title="操作" width="160">
            <template v-slot="{ row,index }">
              <vxe-button  @click="queryUserLimitByid(row)">设置权限</vxe-button>
            </template>
          </vxe-table-column>
          <template v-slot:empty>
            <span style="color: red;">
              <img src="@/assets/img/empty.gif" alt="Bird">
              <p>目前没有数据，可以试试查询！</p>
            </span>
          </template>
        </vxe-table>
        <b-modal id="limits" title="权限" size="lg" >
<!--          权限列表-->
<!--          <update-limit :default-select-limits="defaultSelectLimits" :limitslist="limitslist"></update-limit>-->
          <vxe-table
            show-overflow
            row-key
            resizable
            ref="limits"
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
          <template v-slot:modal-footer>
            <div class="w-100">
              <b-button
                variant="primary"
                size="sm"
                class="float-right"
                @click="submitPower"
              >
                提交
              </b-button>
            </div>
          </template>

        </b-modal>
      </div>
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
      people: [],
      limitslist: null,
      defaultSelectLimits:[],
      allAlign: null,
      currentUser:'',
      currentUserLimit:[] // 设置权限时当前用户的已拥有权限
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
          this.people = this.$store.state.admin.users.userList;
          // setInterval(function (){
          //   this.$bvModal.show('limits')
          // },1000)

        }).catch(err =>{
        console.log(err)
      })
    },
    // 获取复选框点击事件
    selectChangeEvent({ checked, records }) {
      console.log(checked ? '勾选事件' : '取消事件', records)
    },
    queryUserLimitByid(user) {
      // this.defaultSelectLimits = [3,5,9,15]
      this.$store.commit("admin/power/updateQuery",[])
      this.$store.commit("admin/power/updateUp",[])
      this.defaultSelectLimits = []
      this.currentUser = user
      this.$store.dispatch("admin/power/loadQuery", {'uid': user.id})
      .then(res =>{
        if (res){
          let powers = []
          this.$store.state.admin.power.query.forEach(item => {
            powers.push(item.pid)
          })
          this.defaultSelectLimits = powers
          this.$bvModal.show('limits')
        }else {
          console.log("查询改User权限失败")
          this.$bvModal.hide('limits')
        }
      })
    },

    // 提交权限的更改
    submitPower () {
      let selectRecords = this.$refs.limits.getCheckboxRecords()
      console.log(selectRecords)
      // 过滤 自定义的root
      selectRecords.splice(selectRecords.findIndex(item =>item.name === 'root'),1)
      let powers = []
      selectRecords.forEach(item=>{
        powers.push({
          pid:item.id,
          uid:this.currentUser.id
        })
      })
      this.$store.commit("admin/power/updateUp",powers)

      this.$store.dispatch("admin/power/updateUserPowers")
      this.$bvModal.hide('limits')
      this.$XModal.message({ message: '修改权限成功', status: 'success' })
    },

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
  height: 12.5rem  /* 200/16 */;
  overflow: auto;
  border-radius: 0.25rem  /* 4/16 */;
  background-color: #fff;
  border: 0.0625rem  /* 1/16 */ solid #dcdfe6;
}

.list-item1:hover {
  background-color: #f5f7fa;
}

.my-dropdown2 {
  border-radius: 0.25rem  /* 4/16 */;
  background-color: #fff;
  border: 0.0625rem  /* 1/16 */ solid #dcdfe6;
}

.list-item2:hover {
  background-color: #f5f7fa;
}

.my-dropdown3 {
  width: 25rem  /* 400/16 */;
  background-color: #fff;
  border: 0.0625rem  /* 1/16 */ solid #dcdfe6;
  box-shadow: 0 0 0.375rem  /* 6/16 */ 0.125rem  /* 2/16 */ rgba(0, 0, 0, 0.1);
}

.my-dropdown4 {
  width: 37.5rem  /* 600/16 */;
  height: 18.75rem  /* 300/16 */;
  background-color: #fff;
  border: 0.0625rem  /* 1/16 */ solid #dcdfe6;
  box-shadow: 0 0 0.375rem  /* 6/16 */ 0.125rem  /* 2/16 */ rgba(0, 0, 0, 0.1);
}

</style>
