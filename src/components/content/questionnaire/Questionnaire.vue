<template>
  <div class="test">
    <header>
      <h3>问卷信息管理</h3>
    </header>
    <vxe-toolbar>
      <template v-slot:buttons>
        <!--<vxe-button icon="fa fa-plus" @click="insertEvent()">新增</vxe-button>-->
        <vxe-button v-b-modal.my-modal1>导入问卷</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      resizable
      row-key
      highlight-hover-row
      ref="xTable"
      height="500"
      :align="allAlign"
      :data="StoptableData4"
      @cell-dblclick="cellDBLClickEvent">
      <vxe-table-column type="seq"  width="60"></vxe-table-column>
      <vxe-table-column field="name" title="课程名"></vxe-table-column>
      <vxe-table-column field="status" title="状态"></vxe-table-column>
      <vxe-table-column title="操作"  width="200" show-overflow>
        <template v-slot="{ row }">
          <!--<vxe-button type="text"  @click="editEvent(row)">111</vxe-button>
          type="text"  @click="editEvent(row)-->
         <!-- <vxe-button @click="editEvent(row)">启用</vxe-button>-->
          <vxe-button v-if="row.status" @click="End(row)">关闭问卷</vxe-button>
          <vxe-button v-else @click="Start(row)">启用问卷</vxe-button>
         <!-- <vxe-button type="text" icon="fa fa-trash-o" @click="removeEvent(row)"></vxe-button>-->
          <vxe-button @click="removeEvent(row)">删除</vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>

    <vxe-modal v-model="showEdit" :title="selectRow ? '编辑&保存' : '新增&保存'" width="800" min-width="600" min-height="300" :loading="submitLoading" resize destroy-on-close>
      <template v-slot>
        <vxe-form :data="formData" :items="formItems" :rules="formRules" title-align="right" title-width="100" @submit="submitEvent"></vxe-form>
      </template>
    </vxe-modal>

    <b-modal scrollable="true" id="my-modal1" size="xl" title="导入用户信息">
      <div class="container111">
        {{ upload_file || "导入" }}
        <input
          type="file"
          accept=".xls,.xlsx"
          class="upload_file"
          @change="readExcel($event)"
        />

      </div>
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
        <vxe-table-column field="title" title="指标名称" :edit-render="{name: 'input', immediate: true, attrs: {type: 'text'}}"></vxe-table-column>

        <vxe-table-column field="date13" title="权重" :edit-render="{name: '$input', props: {type: 'week'}}"></vxe-table-column>
        <vxe-table-column field="address" title="Address" :edit-render="{name: 'textarea', immediate: true}"></vxe-table-column>
        <vxe-table-column title="操作" width="160">
          <template v-slot="{ row }">
            <template v-if="$refs.xTable.isActiveByRow(row)">
              <vxe-button @click="saveRowEvent(row)">保存</vxe-button>
              <vxe-button @click="cancelRowEvent(row)">取消</vxe-button>
            </template>
            <template v-else>
              <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
            </template>
          </template>
        </vxe-table-column>
      </vxe-table>

    </b-modal>
  </div>
</template>

<script>
import XLSX from "xlsx";

export default {
  mounted() {
    this.init();
  },
  created () {


    console.log(11111);
    this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
    this.findSexList();
    this.formItems[4].itemRender.options = this.sexList
    this.tableData = window.MOCK_DATA_LIST.slice(0, 20)
  },
  computed: {
    rows() {
      return this.userMessage.length
    }
  },
  name: "Questionnaire",

  data () {

  return {
    loading: false,
    sexList1: [],
    isTeaching:true,/*状态：正在评教*/
    notTeaching:false,
    submitLoading: false,
    perPage: 15,//每页数据条数
    currentPage: 1,
    userMessage:[],//存放导入的数据
    StoptableData5:[{
      id:'',
      name:'',
      status:'正在评教',
    }],
    StoptableData4:[],
    tableData: [
      {
        id:1,
        name: '软件工程1',
        status:true,
        teacher:'王麻子'
      },
      {
        id:1,
        name: '软件工程2',
        status:false,
        teacher:'王麻子'
      },
      {
        id:1,
        name: '软件工程3',
        status:true,
        teacher:'王麻子'
      }
    ],

    selectRow: null,
    showEdit: false,
    sexList: [
      { label: '女', value: '0' },
      { label: '男', value: '1' }
    ],
    formData: {
      name: null,
      nickname: null,
      role: null,
      sex: null,
      age: null,
      num: null,
      checkedList: [],
      flag1: null,
      date3: null,
      address: null
    },
    formRules: {
      name: [
        { required: true, message: '请输入名称' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
      ],
      nickname: [
        { required: true, message: '请输入昵称' }
      ],
      sex: [
        { required: true, message: '请选择性别' }
      ]
    },
    formItems: [
      { title: 'Basic information', span: 24, titleAlign: 'left', titleWidth: 200, titlePrefix: { icon: 'fa fa-address-card-o' } },
      { field: 'name', title: 'Name', span: 12, itemRender: { name: '$input', props: { placeholder: '请输入名称' } } },
/*      { field: 'nickname', title: 'Nickname', span: 12, itemRender: { name: '$input', props: { placeholder: '请输入昵称' } } },*/
      { field: 'role', title: 'Role', span: 12, itemRender: { name: '$input', props: { placeholder: '请输入角色' } } },
      { field: 'sex', title: 'Sex', span: 12, itemRender: { name: '$select', options: [] } },
      { field: 'age', title: 'Age', span: 12, itemRender: { name: '$input', props: { type: 'number', placeholder: '请输入年龄' } } },
      { field: 'flag1', title: '是否单身', span: 12, itemRender: { name: '$radio', options: [{ label: '是', value: 'Y' }, { label: '否', value: 'N' }] } },
      { field: 'checkedList', title: '可选信息', span: 24, visibleMethod: this.visibleMethod, itemRender: { name: '$checkbox', options: [{ label: '运动、跑步', value: '1' }, { label: '听音乐', value: '2' }, { label: '泡妞', value: '3' }, { label: '吃美食', value: '4' }] } },
      { title: 'Other information', span: 24, titleAlign: 'left', titleWidth: 200, titlePrefix: { message: '请填写必填项', icon: 'fa fa-info-circle' } },
      { field: 'num', title: 'Number', span: 12, itemRender: { name: '$input', props: { type: 'number', placeholder: '请输入数值' } } },
      { field: 'date3', title: 'Date', span: 12, itemRender: { name: '$input', props: { type: 'date', placeholder: '请选择日期' } } },
      { field: 'address', title: 'Address', span: 24, titleSuffix: { message: '提示信息！！', icon: 'fa fa-question-circle' }, itemRender: { name: '$textarea', props: { autosize: { minRows: 2, maxRows: 4 }, placeholder: '请输入地址' } } },
      { align: 'center', span: 24, titleAlign: 'left', itemRender: { name: '$buttons', children: [{ props: { type: 'submit', content: '提交', status: 'primary' } }, { props: { type: 'reset', content: '重置' } }] } }
    ]
  }
},
methods: {
  init(){
    for(let i = 0; i < this.tableData.length;i++){
      this.StoptableData4.push(this.tableData[i]);
    }
    for(let i = 0; i < this.StoptableData4.length; i ++){
      if(this.tableData[i].status == true){
        this.StoptableData4[i].status = '正在评教';
      }else{
        this.StoptableData4[i].status = '已关闭';
      }
    }
  },
  End(row){
    let name = row.name;
    console.log(this.StoptableData4);
    for(let i = 0; i < this.StoptableData4.length; i++){
      if(name == this.StoptableData4[i].name){
        this.tableData[i].status = false;
      }
    }

  },
  Start(row){
    let name = row.name;
    for(let i = 0; i < this.tableData.length; i++){
      if(name == this.tableData[i].name){
        this.tableData[i].status = true;
      }
    }
  },
  findSexList () {
    return XEAjax.get('/api/conf/sex/list').then(data => {
      this.sexList = data
    })
  },
  editRowEvent (row) {
    this.$refs.xTable.setActiveRow(row)
  },
  saveRowEvent (row) {
    this.$refs.xTable.clearActived().then(() => {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$XModal.message({ message: '保存成功！', status: 'success' })
      }, 300)
    })
  },
  cancelRowEvent (row) {
    const xTable = this.$refs.xTable
    xTable.clearActived().then(() => {
      // 还原行数据
      xTable.revertData(row)
    })
  },
  formatterSex ({ cellValue }) {
    let item = this.sexList.find(item => item.value === cellValue)
    return item ? item.label : ''
  },
  visibleMethod ({ data }) {
    return data.flag1 === 'Y'
  },
  cellDBLClickEvent ({ row }) {
    this.editEvent(row)
  },
  insertEvent () {
    this.formData = {
      name: '',
      nickname: '',
      role: '',
      sex: '',
      age: '',
      num: '',
      checkedList: [],
      flag1: '',
      date3: '',
      address: ''
    }
    this.selectRow = null
    this.showEdit = true
  },
  editEvent (row) {
    this.formData = {
      name: row.name,
      nickname: row.nickname,
      role: row.role,
      sex: row.sex,
      age: row.age,
      num: row.num,
      checkedList: row.checkedList,
      flag1: row.flag1,
      date3: row.date3,
      address: row.address
    }
    this.selectRow = row
    this.showEdit = true
  },
  removeEvent (row) {
    this.$XModal.confirm('您确定要删除该数据?').then(type => {
      if (type === 'confirm') {
        this.$refs.xTable.remove(row)
      }
    })
  },
  submitEvent () {
    this.submitLoading = true
    setTimeout(() => {
      this.submitLoading = false
      this.showEdit = false
      if (this.selectRow) {
        this.$XModal.message({ message: '保存成功', status: 'success' })
        Object.assign(this.selectRow, this.formData)
      } else {
        this.$XModal.message({ message: '新增成功', status: 'success' })
        this.$refs.xTable.insert(this.formData)
      }
    }, 500)
  },
  submit_form() {
    // 给后端发送请求，更新数据
    console.log("假装给后端发了个请求...");
  },
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
        this.submit_form();
      } catch (e) {
        return false;
      }
    };
    fileReader.readAsBinaryString(files[0]);
  }
}
}
</script>

<style scoped>
.container111 {
  border: none;
  border-radius: 4px;
  background-color: #409eff;
  height: 40px;
  width: 90px;
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
.test{
  width: 80%;
  margin: 10px auto;
}
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
