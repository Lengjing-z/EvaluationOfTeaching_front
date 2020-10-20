<template>
  <div class="test">
    <header>
      <h3>班级管理</h3>
      <b-button  v-b-modal.my-modal1 @click="showModal2" variant="outline-primary">添加班级</b-button>
      <b-button  v-b-modal.my-modal4 style="display: inline;margin-top: 20px; margin-left: 15px;
      " variant="outline-success">批量导入</b-button>
      <div class="seach_class">
        <b-form inline>

          <b-input-group prepend="搜索班级" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="classname"
              placeholder="班级名"
            ></b-input>
          </b-input-group>
          <b-button variant="primary" @click="serchClass()">搜索</b-button>
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
          <b-button v-b-tooltip.hover v-b-modal.my-modal2 @click="showModal3(ClassData[index].id)" title="查看所有学生"  style="width: 60px" variant="outline-primary">
            <b-icon icon="person-fill"></b-icon>
          </b-button>

          <b-button  v-b-modal.my-modal6 @click="show()" style="width: 60px" variant="outline-primary">
            <b-icon  @click="show()" icon="inbox-fill"></b-icon>
          </b-button>
        </b-button-group>
      </div>
    </div>

    <div>
      <b-modal size="xl" ref="my-modal2" hide-footer title="所有学生信息">
        <b-button  v-b-modal.my-modal1 @click="SerchStudent()"  class="mb-3" variant="outline-primary">添加学生</b-button>
        <vxe-modal v-model="value5" show-footer>
          <template v-slot>
            <vxe-table
              border
              stripe
              resizable
              highlight-hover-row
              height="400"
              ref="xTable1"
              :data="allStudent">
              <vxe-table-column type="seq" width="60"></vxe-table-column>
              <vxe-table-column type="checkbox" class="check" width="60"></vxe-table-column>
              <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
              <vxe-table-column field="sex" title="Sex"  :filter-multiple="false" ></vxe-table-column>
              <vxe-table-column field="address" title="Address" show-overflow></vxe-table-column>
            </vxe-table>

            <b-button  v-b-modal.my-modal1 @click="subClassStudent()"  variant="outline-primary">添加学生</b-button>
          </template>
        </vxe-modal>
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
          <vxe-table-column field="addr" title="Address" width="350" show-overflow></vxe-table-column>
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
              <vxe-input v-model="Clname" id="classId" placeholder="请输入班级号" clearable @input="$refs.xForm.updateStatus(scope)"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item style="margin-left: 45px"  title="是否为公开课" field="code" span="24">
            <template v-slot="scope">
              <vxe-radio-group v-model="pub">
                <vxe-radio-button label="true" content="是"></vxe-radio-button>
                <vxe-radio-button label="false" content="否"></vxe-radio-button>
              </vxe-radio-group>
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
  created() {
    this.$store
      .dispatch('admin/class/query',{name:''})
      .then(result => {
        // if (result==='success')
          // console.log('this' + '  ' + 'success');
        this.ClassData = this.$store.state.admin.class.query;
        // console.log(this.$store.state.admin.class.query);
        /*  this.ClassData = this.$store.state.admin.user.userForm;*/
      }).then(()=>{
      /*this.$router.push('index')*/
    })
  },
  name: "ClassManager",
  methods:{
    SerchStudent(){
      this.value5 = true
      this.$store
        .dispatch('admin/users/allStudent')
        .then(result => {
          if (result === 'success')
            console.log(3333333);
          this.allStudent = this.$store.state.admin.users.q
          console.log(this.$store.state.admin.users.q);
        }).then(() => {
      })
    },
    subClassStudent(){
      let selectRecords = this.$refs.xTable1.getCheckboxRecords()
      let all1 = [];
      for(let i in selectRecords){
        all1.push({
          claId:this.classId,
          stId:selectRecords[i].id
        })
      }
      this.init = all1
      console.log(all1);
      this.$store
        .dispatch('admin/insertInfo/segment/class/submit', this.init)
        .then(result => {
          if (result === 'success')
            console.log(3333333);
        }).then(() => {
      })
    },
    serchClass(){
      console.log(this.classname);
      this.$store
        .dispatch('admin/class/queryC',{name:this.classname})
        .then(result => {
          if (result==='success')
            console.log('this' + '  ' + 'success');
          this.ClassData = this.$store.state.admin.class.query2;
          console.log(this.$store.state.admin.class.query2);
          /*  this.ClassData = this.$store.state.admin.user.userForm;*/
        }).then(()=>{
        /*this.$router.push('index')*/
      })
    },
    showModal3(index) {
      this.classId = index;
      // console.log(index);
      this.$store
        .dispatch('admin/class/allStudent',this.classId)
        .then(result => {
          // if (result === 'success')
            // console.log(3333333);
          this.tableData = this.$store.state.admin.class.q
          // let all = [];
          // for(let i in this.tableData){
          //   all.push(this.tableData[i])
          // }
          // console.log(all);
          // this.tableData = all
          console.log(this.$store.state.admin.users.q);
        }).then(() => {
          this.$refs['my-modal2'].show();
      })

      // console.log(index);


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
    },
  submitEvent3 (index) {
      let all = [{
        name:this.Clname,
        pub:this.pub
      }]
    console.log(all);
    this.$store
      .dispatch('admin/class/create',all)
      .then(result => {
        if (result==='success')
          console.log(3333333);
      }).then(()=>{

    })
    setTimeout(() => {
      this.$refs['my-modal1'].toggle('#toggle-btn')
      this.$XModal.message({ message: '保存成功', status: 'success' })
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
    pub:'',
    Clname:'',
    init: [],
    classId:'',
    stId:[],
    allStudent:[],
    value5: false,
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
    tableData: [],
    ClassData:[],
  }
}
}
</script>

<style scoped>
.seach_class{
  margin-top: 1.25rem  /* 20/16 */;
}
.container111 {
  border: none;
  border-radius: 0.25rem  /* 4/16 */;
  background-color: #409eff;
  height: 2.5rem  /* 40/16 */;
  width: 13.75rem  /* 220/16 */;
  margin-top: 0.5rem  /* 8/16 */;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.9375rem  /* 15/16 */;
  min-width: 5rem  /* 80/16 */;
  *zoom: 1;
}
.upload_file {
  font-size: 1.25rem  /* 20/16 */;
  opacity: 0;
  position: absolute;
  filter: alpha(opacity=0);
  width: 12.5rem  /* 200/16 */;
}
/*滚动条整体部分*/
.mytable-scrollbar div::-webkit-scrollbar {
  width: 0.625rem  /* 10/16 */;
  height: 0.625rem  /* 10/16 */;
}
/*滚动条的轨道*/
.mytable-scrollbar div::-webkit-scrollbar-track {
  background-color: #FFFFFF;
}
/*滚动条里面的小方块，能向上向下移动*/
.mytable-scrollbar div::-webkit-scrollbar-thumb {
  background-color: #bfbfbf;
  border-radius: 0.3125rem  /* 5/16 */;
  border: 0.0625rem  /* 1/16 */ solid #F1F1F1;
  box-shadow: inset 0 0 0.375rem  /* 6/16 */ rgba(0,0,0,.3);
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
  height: 2.1875rem  /* 35/16 */;
}
.member-info p{
  margin-top: -0.9375rem  /* -15/16 */;
}
b-icon{
  width: 15.625rem  /* 250/16 */;
}
body{
  font-family:Lato,'Open Sans', sans-sarif;
  font-size:1rem  /* 16/16 */;
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
  min-height:38.25rem  /* 612/16 */ ;
  margin:0 auto;
}
/*= common css to all effects =*/
.single-member{
  width: 17.5rem  /* 280/16 */;
  float: left;
  margin: 1.875rem  /* 30/16 */ 2.5%;
  background-color: #fff;
  text-align: center;
  position: relative;
}
.member-image #img {
  max-width: 100%;
  vertical-align: middle;
  padding-left: 1.5625rem  /* 25/16 */;
  padding-right: 1.5625rem  /* 25/16 */;
  color: white;
}
h3 {font-size: 1.5rem  /* 24/16 */;
  font-weight: normal;
  margin: 0.625rem  /* 10/16 */ 0 0;
  text-transform: uppercase;
}
h5 {
  font-size: 1rem  /* 16/16 */;
  font-weight: 300;
  margin: 0 0 0.9375rem  /* 15/16 */;
  line-height: 1.375rem  /* 22/16 */;
}
p {
  font-size: 0.875rem  /* 14/16 */;
  font-weight: 300;
  line-height: 1.375rem  /* 22/16 */;
  padding: 0 1.875rem  /* 30/16 */;
  margin-bottom: 0.625rem  /* 10/16 */;
}
.social-touch a{
  display: inline-block;
  width: 1.6875rem  /* 27/16 */;
  height: 1.625rem  /* 26/16 */;
  vertical-align: middle;
  margin: 0 0.125rem  /* 2/16 */; /*background-image: url(../img/logo.png);*/
  background-repeat: no-repeat;
  opacity: 0.7;
  transition: 0.3s;
}
.social-touch a:hover{
  opacity: 1;
  transition: 0.3s;
}
.icon-colored .fb-touch{background-position: 0 -1.6875rem  /* -27/16 */;}
.icon-colored .tweet-touch{background-position: -2.1875rem  /* -35/16 */ -1.6875rem  /* -27/16 */;}
.icon-colored .linkedin-touch{background-position: -4.4375rem  /* -71/16 */ -1.6875rem  /* -27/16 */;}
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
  height: 2.1875rem  /* 35/16 */;
}

/*= effect-1 css =*/
.effect-1{border-radius: 0.3125rem  /* 5/16 */ 0.3125rem  /* 5/16 */ 0 0; padding-bottom: 2.5rem  /* 40/16 */;}
.effect-1 .member-image {border: 0.125rem  /* 2/16 */ solid #fff; background: #1b6aaa; border-radius: 3.75rem  /* 60/16 */ 0; display: inline-block; margin-top: -4.5rem  /* -72/16 */; overflow: hidden; transition: 0.3s;}
.effect-1 .social-touch{background-color: #e13157; position: absolute; left: 0; bottom: 0; height: 0.3125rem  /* 5/16 */; overflow: hidden; padding: 0.3125rem  /* 5/16 */ 0 0; width: 100%; transition: 0.3s;}
.effect-1 .member-image #img{transition: 0.3s; height:1.875rem  /* 30/16 */; /*background-color: #2a91d8;*/ border-radius: 3.75rem  /* 60/16 */ 0;}
.effect-1:hover .member-image{border-color: #e13157; transition: 0.3s; border-radius: 50%;}
.effect-1:hover .social-touch{padding: 0.375rem  /* 6/16 */ 0; height: 2.375rem  /* 38/16 */; transition: 0.3s;}
/*= effect-1 css end =*/

/*= Media Query
=============== */
@media only screen and (max-width: 61.25rem  /* 980/16 */){
  .row{width: 100%; margin: 3.125rem  /* 50/16 */ 0;}
  .team-members{text-align: center;}
  .single-member{float: none; display: inline-block; vertical-align: bottom;}
}
/*= Media Query End
=================== */
@media screen and (max-width:81.25rem  /* 1300/16 */){
  .single-member{
    width: 15.625rem  /* 250/16 */;
  }
}/*宽度小于500px时 绿色*/
</style>
