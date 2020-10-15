<template>
  <div class="test">
    <header>
      <h3>班级管理</h3>
      <b-button style="margin-top: 20px" v-b-modal.my-modal1 @click="showModal2" variant="outline-primary">添加班级</b-button>
      <b-button  v-b-modal.my-modal4 style="display: inline;margin-top: 20px;
      margin-left: 15px;
      " variant="outline-success">批量导入</b-button>
      <div class="seach_class">
        <b-form inline>
          <label class="sr-only">Name</label>
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="classname"
            placeholder="Jane Doe"
          ></b-input>
          <label class="sr-only">Username</label>
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inline-form-input-username" placeholder="Username"></b-input>
          </b-input-group>
          <b-button variant="primary" @click="serchClass()">Seach</b-button>
        </b-form>
      </div>
    </header>

    <div class="single-member effect-1" v-for="(item,index) in ClassData">
      <div class="member-image">
        <!--<img src="" width="150" height="80" alt="">-->
        <div id="img">{{ClassData[index].id}}</div>
      </div>
      <div class="member-info">
        <h4>{{ ClassData[index].name }}</h4>
        <h5>PinYing</h5>
        <!--<p style="color: #2a91d8" @click="test(index)">所有班级</p>-->

        <b-button-group id="dosomeThing">
          <b-button  v-b-modal.my-modal style="width: 60px" variant="outline-primary" @click="showModal(index)">
            <b-icon  icon="tools"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover v-b-modal.my-modal2 @click="showModal3(index)" title="查看所有学生"  style="width: 60px" variant="outline-primary">
            <b-icon icon="person-fill"></b-icon>
          </b-button>

          <b-button  v-b-modal.my-modal6 @click="show()" style="width: 60px" variant="outline-primary">
            <b-icon  @click="show()" icon="inbox-fill"></b-icon>
          </b-button>
        </b-button-group>
      </div>
    </div>

    <div>
      <b-modal size="xl" ref="my-modal2" hide-footer title="ALl Students Message">
        <vxe-table
          border
          show-footer
          height="400"
          :data="tableData">
          <vxe-table-column type="seq" width="60" fixed="left"></vxe-table-column>
          <vxe-table-column field="name" title="Name" width="150"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" width="150"></vxe-table-column>
          <vxe-table-column field="age" title="Age" width="150"></vxe-table-column>
          <vxe-table-column field="code" title="Code" width="150"></vxe-table-column>
          <vxe-table-column field="height" title="Height" width="150"></vxe-table-column>
          <vxe-table-column field="address" title="Address" width="350" show-overflow></vxe-table-column>
        </vxe-table>
      </b-modal>
    </div>

    <b-modal id="my-modal4" size="xl" title="导入用户信息">
      <div class="container111">
        {{ "导入" }}
        <input
          type="file"
          accept=".xls,.xlsx"
          class="upload_file"
          @change="readExcel($event)"
        />
      </div>
      <div class="overflow-auto">
        <!-- <p class="mt-3">问卷总数: {{ currentPage }}</p>-->
        <!--<p class="mt-3">题目</p>-->
        <b-table
          id="my-table"
          :items="userMessage"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>

        <b-pagination
          v-model="currentPage"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </b-modal>
    <b-modal id="my-modal6" size="xl" title="导入用户信息">
      <div class="container111">
        {{ "导入" }}
        <input
          type="file"
          accept=".xls,.xlsx"
          class="upload_file"
          @change="readExcel($event)"
        />
      </div>
      <div class="overflow-auto">
        <b-table
          id="my-table"
          :items="userMessage"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>

        <b-pagination
          v-model="currentPage"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </b-modal>
    <!--添加班级-->
    <b-modal ref="my-modal1" hide-footer title="班级信息管理">
      <div class="d-block text-center">
        <vxe-form
          ref="xForm"
          class="my-form2"
          title-align="right"
          title-width="100"
          :data="formData2"
          :rules="formRules2"
          @submit="submitEvent3(index)"
          @reset="resetEvent">
          <!-- <vxe-form-item title="班级id" field="name" span="24">
             <template v-slot="scope">
               <vxe-input v-model="formData2.name" placeholder="请输入名称" clearable @input="$refs.xForm.updateStatus(scope)"></vxe-input>
             </template>
           </vxe-form-item>-->
          <vxe-form-item title="班级名" field="code" span="24">
            <template v-slot="scope">
              <vxe-input v-model="formData2.classname" id="classId" placeholder="请输入班级号" clearable @input="$refs.xForm.updateStatus(scope)"></vxe-input>
            </template>
          </vxe-form-item>


          <vxe-form-item align="center" span="24">
            <template v-slot>
              <vxe-button type="submit" @click="create()" status="primary">提交信息</vxe-button>
              <vxe-button type="reset">重置</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal111">Close Me</b-button>
    </b-modal>

    <b-modal ref="my-modal" hide-footer title="班级信息管理">
      <div class="d-block text-center">
        <vxe-form
          ref="xForm"
          class="my-form2"
          title-align="right"
          title-width="100"
          :data="formData2"
          :rules="formRules2"
          @submit="submitEvent2(index)"
          @reset="resetEvent">
         <!-- <vxe-form-item title="班级id" field="name" span="24">
            <template v-slot="scope">
              <vxe-input v-model="formData2.name" placeholder="请输入名称" clearable @input="$refs.xForm.updateStatus(scope)"></vxe-input>
            </template>
          </vxe-form-item>-->
          <vxe-form-item title="班级名" field="code" span="24">
            <template v-slot="scope">
              <vxe-input v-model="formData2.name" placeholder="请输入班级号" clearable @input="$refs.xForm.updateStatus(scope)"></vxe-input>
            </template>
          </vxe-form-item>


          <vxe-form-item align="center" span="24">
            <template v-slot>
              <vxe-button type="submit"   status="primary">提交信息</vxe-button>
              <vxe-button type="reset">重置</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal111">Close Me</b-button>
    </b-modal>
  </div>


</template>

<script>
import XLSX from "xlsx";
export default {

  name: "ClassManager",
  methods:{
    serchClass(){
      console.log(this.classname);
      this.$store
        .dispatch('admin/class/query',{name:this.classname})
        .then(result => {
          if (result==='success')
            console.log('this' + '  ' + 'success');
          this.ClassData = this.$store.state.admin.class.query;
          console.log(this.$store.state.admin.class.query);
          /*  this.ClassData = this.$store.state.admin.user.userForm;*/
        }).then(()=>{
        /*this.$router.push('index')*/
      })
    },
    showModal3(index) {
      this.$refs['my-modal2'].show();
    },
  showModal2(index) {
    this.$refs['my-modal1'].show();
  },
    show(){
      this.$refs['my-modal6'].show();
    },
  showModal(index) {
    console.log(index);
    this.$refs['my-modal'].show();
    this.formData2.name = this.ClassData[index].classname;
  },
  submitEvent2 (index) {
    setTimeout(() => {
      this.$refs['my-modal'].toggle('#toggle-btn')
      this.$XModal.message({ message: '保存成功', status: 'success' })

      console.log(index);
    }, 1000)
  },
    hideModal111() {
      this.$refs['my-modal'].hide()
    },
    create(){
      let init = [{
        name:this.formData2.classname,
        pub:this.formData2.pub
      }]

      this.$store
        .dispatch('admin/class/create',init)
        .then(result => {
          if (result==='success')
            console.log(3333333);
          this.tableData = this.$store.state.admin.user.userForm;
        }).then(()=>{
        /*this.$router.push('index')*/
      })
    },
  submitEvent3 (index) {
    setTimeout(() => {
      this.$refs['my-modal1'].toggle('#toggle-btn')
      this.$XModal.message({ message: '保存成功', status: 'success' })
   /*   this.formData2.id= this.ClassData.length+1;
      console.log(this.ClassData.length);
      this.ClassData.push(this.formData2);
*/
    }, 1000)
  },
  searchEvent () {
    this.$XModal.message({ message: '查询事件', status: 'info' })
  },
  resetEvent () {
    this.$XModal.message({ message: '重置事件', status: 'info' })
  },
  test(index){
    console.log(this.ClassData[index].code[0]);
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
          console.log(ws);
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
          this.$store
            .dispatch('admin/class/create',this.userMessage)
            .then(result => {
              if (result==='success')
                console.log(3333333);
              this.tableData = this.$store.state.admin.user.userForm;
            }).then(()=>{
            /*this.$router.push('index')*/
          })
        } catch (e) {
          return false;
        }
      };
      fileReader.readAsBinaryString(files[0]);
    }
},

data(){
  return{
    classname:'',
    perPage: 15,//每页数据条数
    currentPage: 1,
    userMessage:[],//存放导入的数据
    formData2 : {
      classname: '',
      pub:true,
    },
    formRules2: {
      name: [
        { required: true, message: '请输入名称' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
      ],
      /*code: [
        { required: true, message: '请输入学号' }
      ],*/
      password: [
        { required: true, message: '请输入密码' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
      ]
    },
    tableData: [{
      id:1,
      sex:"男",
      age: 18,
      password:'123456',
      height: 175,
      code: '179000505',
      date: '2016-05-04',
      name: '周海洋',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      id:2,
      sex:"男",
      age: 18,
      password:'123456',
      height: 175,
      code: '179000506',
      date: '2016-05-04',
      name: '任然',
      address: '上海市普陀区金沙江路 1517 弄'
    },
      {
        id:3,
        password:'123456',
        sex:"男",
        age: 18,
        height: 175,
        code: '179000507',
        date: '2016-05-04',
        name: '李宇蔚',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id:4,
        sex:"男",
        password:'123456',
        age: 18,
        height: 175,
        code: '179000520',
        date: '2016-05-04',
        name: '张三',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        id:5,
        password:'123456',
        sex:"男",
        age: 18,
        height: 175,
        code: '179000520',
        date: '2016-05-04',
        name: '杨过',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        password:'123456',
        id:6,
        sex:"男",
        age: 18,
        height: 175,
        code: '179000520',
        date: '2016-05-04',
        name: '黄天亮',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        password:'123456',
        id:1,
        sex:"男",
        age: 18,
        height: 175,
        code: '179000505',
        date: '2016-05-04',
        name: '周搜索',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        password:'123456',
        id:2,
        sex:"男",
        age: 18,
        height: 175,
        code: '179000506',
        date: '2016-05-04',
        name: '任天',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        password:'123456',
        id:3,
        sex:"男",
        age: 18,
        height: 175,
        code: '179000507',
        date: '2016-05-04',
        name: '李小龙',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        password:'123456',
        id:4,
        sex:"男",
        age: 18,
        height: 175,
        code: '179000520',
        date: '2016-05-04',
        name: '张文',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        password:'123456',
        id:5,
        sex:"男",
        age: 18,
        height: 175,
        code: '179000520',
        date: '2016-05-04',
        name: '杨林',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        password:'123456',
        id:6,
        sex:"男",
        age: 18,
        height: 175,
        code: '179000520',
        date: '2016-05-04',
        name: '黄撒旦',
        address: '上海市普陀区金沙江路 1517 弄'
      }],
    ClassData:[
      {
        id:1,
       name: '1790001',
      },
      {
        id:2,
        name: '1790002',
      },
      {
        id:3,
        name: '1790003',
      },
      {
        id:4,
        name: '1790004',
      },
      {
        id:5,
        name: '1790005',

      },
      {
        id:6,
        name: '1790006',
      }
    ],
  }
}
}
</script>

<style scoped>
.seach_class{
  margin-top: 20px;
}
.container111 {
  border: none;
  border-radius: 4px;
  background-color: #409eff;
  height: 40px;
  width: 220px;
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
  width: 200px;
}
/*滚动条整体部分*/
.mytable-scrollbar div::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/*滚动条的轨道*/
.mytable-scrollbar div::-webkit-scrollbar-track {
  background-color: #FFFFFF;
}
/*滚动条里面的小方块，能向上向下移动*/
.mytable-scrollbar div::-webkit-scrollbar-thumb {
  background-color: #bfbfbf;
  border-radius: 5px;
  border: 1px solid #F1F1F1;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
}
.mytable-scrollbar div::-webkit-scrollbar-thumb:hover {
  background-color: #A8A8A8;
}
.mytable-scrollbar div::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}
/*边角，即两个滚动条的交汇处*/
.mytable-scrollbar div::-webkit-scrollbar-corner {
  background-color: #FFFFFF;
}
.mt-3{
  height: 35px;
}
.member-info p{
  margin-top: -15px;
}
b-icon{
  width: 250px;
}
body{
  font-family:Lato,'Open Sans', sans-sarif;
  font-size:16px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.Uname{
  color: #2a8bcb;
}
.test {
  width: 80%;
  height: 1300px;
  margin:0 auto;
}
/*= common css to all effects =*/
.single-member{
  width: 280px;
  float: left;
  margin: 30px 2.5%;
  background-color: #fff;
  text-align: center;
  position: relative;
}
.member-image #img {
  max-width: 100%;
  vertical-align: middle;
  padding-left: 25px;
  padding-right: 25px;
  color: white;
}
h3 {font-size: 24px;
  font-weight: normal;
  margin: 10px 0 0;
  text-transform: uppercase;
}
h5 {
  font-size: 16px;
  font-weight: 300;
  margin: 0 0 15px;
  line-height: 22px;
}
p {
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  padding: 0 30px;
  margin-bottom: 10px;
}
.social-touch a{
  display: inline-block;
  width: 27px;
  height: 26px;
  vertical-align: middle;
  margin: 0 2px; /*background-image: url(../img/logo.png);*/
  background-repeat: no-repeat;
  opacity: 0.7;
  transition: 0.3s;
}
.social-touch a:hover{
  opacity: 1;
  transition: 0.3s;
}
.icon-colored .fb-touch{background-position: 0 -27px;}
.icon-colored .tweet-touch{background-position: -35px -27px;}
.icon-colored .linkedin-touch{background-position: -71px -27px;}
/*= common css to all effects end =*/

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

[class^="icon-"], [class*=" icon-"] {
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, html { font-size: 100%; 	padding: 0; margin: 0;}
a{ color: rgba(255, 255, 255, 0.6);outline: none;text-decoration: none;-webkit-transition: 0.2s;transition: 0.2s;}
a:hover,a:focus{color:#74777b;text-decoration: none;}
#dosomeThing{
  height: 35px;
}

/*= effect-1 css =*/
.effect-1{border-radius: 5px 5px 0 0; padding-bottom: 40px;}
.effect-1 .member-image {border: 2px solid #fff; background: #1b6aaa; border-radius: 60px 0; display: inline-block; margin-top: -72px; overflow: hidden; transition: 0.3s;}
.effect-1 .social-touch{background-color: #e13157; position: absolute; left: 0; bottom: 0; height: 5px; overflow: hidden; padding: 5px 0 0; width: 100%; transition: 0.3s;}
.effect-1 .member-image #img{transition: 0.3s; height:30px; /*background-color: #2a91d8;*/ border-radius: 60px 0;}
.effect-1:hover .member-image{border-color: #e13157; transition: 0.3s; border-radius: 50%;}
.effect-1:hover .social-touch{padding: 6px 0; height: 38px; transition: 0.3s;}
/*= effect-1 css end =*/

/*= Media Query
=============== */
@media only screen and (max-width: 980px){
  .row{width: 100%; margin: 50px 0;}
  .team-members{text-align: center;}
  .single-member{float: none; display: inline-block; vertical-align: bottom;}
}
/*= Media Query End
=================== */
@media screen and (max-width:1300px){
  .single-member{
    width: 250px;
  }
}/*宽度小于500px时 绿色*/
</style>
