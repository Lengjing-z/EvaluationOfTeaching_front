<template>
  <div class="container">
    <header>
      <h3>问卷信息管理</h3>
    </header>
    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button v-b-modal.my-modal1>导入问卷</vxe-button>
        <vxe-button v-b-modal.targetlist >指标管理</vxe-button>
        <b-modal id="targetlist" size="xl" title="指标管理" ok-only>
          <vxe-table
            :data="targetData">
            <vxe-table-column type="seq" min-width="60"></vxe-table-column>
            <vxe-table-column field="name" title="Name"></vxe-table-column>
            <vxe-table-column field="rate" title="Rate"></vxe-table-column>
            <vxe-table-column title="操作" show-overflow>
              <template v-slot="{ row }">
                <vxe-button @click="showDetail(row)" v-b-modal.targetmanage >查看</vxe-button>
              </template>
            </vxe-table-column>
          </vxe-table>
          <b-modal id="targetmanage" size="lg" title="指标列表" ok-only>
            <target-management :target-data-children="targetDataChildren" :mid="maxid"></target-management>
            <template v-slot:modal-footer v-if="{showFooter}">
              <div class="w-100" >
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-right"
                  @click="submitTarget"
                >
                  提交
                </b-button>
              </div>
            </template>
          </b-modal>
        </b-modal>
      </template>
    </vxe-toolbar>

    <!--问卷管理-->
    <vxe-table
      border
      resizable
      row-key
      highlight-hover-row
      ref="xTable"
      height="500"
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="课程名"></vxe-table-column>
      <vxe-table-column field="status" title="状态"></vxe-table-column>
      <vxe-table-column title="操作" show-overflow>
        <template v-slot="{ row }">
          <vxe-button v-if="isTeaching" @click="End(this.tableData[index].name)">关闭问卷</vxe-button>
          <vxe-button v-if="notTeaching" @click="Start()">启用问卷</vxe-button>
          <vxe-button @click="removeEvent(row)">删除</vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>

    <vxe-modal v-model="showEdit" :title="selectRow ? '编辑&保存' : '新增&保存'" width="800" min-width="600" min-height="300"
               :loading="submitLoading" resize destroy-on-close>
      <template v-slot>
        <!--        <vxe-form :data="formData" :items="formItems" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent"></vxe-form>-->
      </template>
    </vxe-modal>

    <!--导入问卷按钮-->
    <b-modal id="my-modal1" size="xl" title="导入用户信息" ok-only>
      <div class="container111 mb-4">
        {{ upload_file }}
        <input
          type="file"
          accept=".xls,.xlsx"
          class="upload_file"
          @change="readExcel($event)"
        />
      </div>
      <vxe-select v-model="targetTempName" placeholder="选择指标模板">
        <vxe-option v-for="num in targetData" :key="num.id" :value="num" :label="`${num.name}`"></vxe-option>
      </vxe-select>

      <!--导入的问卷详情-->
      <vxe-table
        border
        resizable
        show-overflow
        keep-source
        ref="xTable"
        :loading="loading"
        :data="userMessage"
        :edit-config="{trigger: 'manual', mode: 'row'}">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="title" title="问题"></vxe-table-column>

        <vxe-table-column field="name" title="指标名称"></vxe-table-column>
        <vxe-table-column field="weight" title="权重"></vxe-table-column>
        <vxe-table-column title="操作" width="160">
          <template v-slot="{ row,index }">
              <vxe-button v-b-modal.targetvalue${index} >添加指标</vxe-button>

          </template>
        </vxe-table-column>
      </vxe-table>
      <b-modal id="targetvalue${index}" size="lg" title="指标列表">
        <target-value :target-temp-tree="targetTempTree" @choosetar="chooseTarget"></target-value>
      </b-modal>


    </b-modal>
  </div>
</template>

<script>
import XLSX from "xlsx";
import TargetManagement from "components/content/target/TargetManagement";
import TargetValue from "components/content/target/TargetValue";

export default {

  name: "Questionnaire",
  computed: {
    rows() {
      return this.userMessage.length
    }
  },
  data() {
    return {
      loading: false,
      showFooter:false,
      isTeaching: true,/*状态：正在评教*/
      notTeaching: false,
      submitLoading: false,
      perPage: 15,//每页数据条数
      currentPage: 1,
      userMessage: [],//存放导入的数据
      tableData: [
        {
          id: 1,
          name: '软件工程1',
          code: '179000505',
          status: '正在评教',
          teacher: '王麻子'
        },
        {
          id: 1,
          name: '软件工程2',
          code: '179000505',
          status: '正在评教',
          teacher: '王麻子'
        },
        {
          id: 1,
          name: '软件工程3',
          code: '179000505',
          status: '正在评教',
          teacher: '王麻子'
        }
      ],
      selectRow: null,
      showEdit: false,
      upload_file: "导入",
      targetTempName: "",
      targetTempTree:[],
      fatherTarget:[],
      targetData: [],
      targetDataChildren:[],
      maxid:0
    }
  },
  watch:{
    targetTempName(val,oldval){
      console.log(val,oldval)
      this.$store.dispatch("admin/indicator/getTemp",val)
      .then(res =>{
        console.log(res)
        this.targetTempTree = Array(this.$store.getters["admin/indicator/getTndicatorTempTree"])
        console.log(this.targetTempTree)
      })

      // this.$store.commit("admin/indicator/updateindicatorTemp",val)
    }
  },
  created:function () {
    this.$store
      .dispatch("admin/indicator/getAll")
      .then(res =>{
        this.targetData = this.$store.state.admin.indicator.indicatorAll
        console.log(res)
      })
  },
  components:{
    TargetManagement,
    TargetValue
  },
  methods: {
    /*关闭问卷*/
    End(name) {
      this.isTeaching = false;
      console.log(name);
    },
    /*修改问卷*/
    editRowEvent(row) {
      this.$refs.xTable.setActiveRow(row)
    },
    /*保存修改的问卷题目*/
    saveRowEvent(row) {
      this.$refs.xTable.clearActived().then(() => {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$XModal.message({message: '保存成功！', status: 'success'})
        }, 300)
      })
    },
    /*删除问卷*/
    removeEvent(row) {
      this.$XModal.confirm('您确定要删除该数据?').then(type => {
        if (type === 'confirm') {
          this.$refs.xTable.remove(row)
        }
      })
    },

    /*查看指标详细*/
    showDetail(row){
      // console.log(row);
      this.$store.dispatch("admin/indicator/getDetail",row)
      .then(res =>{
        this.targetDataChildren = Array(this.$store.getters["admin/indicator/getTndicatorTree"])
        this.maxid = res
        // console.log(res,typeof res);
      })

    },
    submitTarget(){
      this.$store.dispatch("admin/indicator/createIndicator",this.targetDataChildren[0])
      .then(res =>{
        console.log(res)
      })
    },
    chooseTarget(row,data){
      console.log("----")
      console.log(row,data)
    },


    /*读取文件*/
    readExcel(e) {
      // 读取表格文件
      let that = this;
      const files = e.target.files;
      if (files.length <= 0) {
        return false;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$message({
          message: "上传格式不正确，请上传xls或者xlsx格式",
          type: "warning"
        });
        return false;
      } else {
        // 更新获取文件名
        that.upload_file = files[0].name;
      }

      const fileReader = new FileReader();
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary"
          });
          const wsname = workbook.SheetNames[0]; //取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
          console.log(ws[1].title);
          this.userMessage = ws;
          that.lists = [];
          // 从解析出来的数据中提取相应的数据
          ws.forEach(item => {
            that.lists.push({
              username: item["name"],
              phone_number: item["code"]
            });
          });
          // 给后端发请求
          /*提交数据*/
          this.submit_form();
        } catch (e) {
          return false;
        }
      };
      fileReader.readAsBinaryString(files[0]);
    },
    /*保存问卷*/
    submit_form() {
      console.log("假装给后端发了个请求...");
    },
  }
}
</script>

<style scoped>
.container111 {
  border: none;
  border-radius: 4px;
  background-color: #409eff;
  height: 35px;
  width: 150px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  min-width: 80px;
  *zoom: 1;
}

.upload_file {
  font-size: 20px;
  opacity: 0;
  position: absolute;
  filter: alpha(opacity=0);
  width: 60px;
}

/*.test{*/
/*  width: 80%;*/
/*  margin: 10px auto;*/
/*}*/
.my-red {
  color: red;
}

.my-green {
  color: green;
}

.my-domain.vxe-input {
  height: 34px;
  width: 300px;
}

.my-domain.vxe-input >>> .vxe-input--prefix {
  width: 60px;
  height: 32px;
  top: 1px;
  text-align: center;
  border-right: 1px solid #dcdfe6;
  background-color: #f5f7fa;
}

.my-domain.vxe-input >>> .vxe-input--inner {
  padding-left: 72px;
  border: 1px solid #dcdfe6;
}

.my-search.vxe-input {
  height: 34px;
  width: 300px;
}

.my-search.vxe-input >>> .vxe-input--suffix {
  width: 60px;
  height: 32px;
  top: 1px;
  text-align: center;
  border-left: 1px solid #dcdfe6;
  background-color: #f5f7fa;
  cursor: pointer;
}

.my-search.vxe-input >>> .vxe-input--inner {
  padding-right: 72px;
  border: 1px solid #dcdfe6;
}
</style>
