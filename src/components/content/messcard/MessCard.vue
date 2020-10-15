<template>

  <div class="messcord" >
      <div>
        <h3>学生信息管理</h3>
        <b-button  v-b-modal.my-modal1 style="display: inline;margin-top: 20px" variant="outline-success">批量导入</b-button>
        <b-input-group  prepend="请输入姓名或者学号" class="mt-31">
          <b-form-input id="username" v-model="username"></b-form-input>
          <b-input-group-append >
            <b-button @click="query()" variant="outline-success"><span style="padding-left: 20px;padding-right: 20px">搜索</span></b-button>
          </b-input-group-append>
        </b-input-group>
      </div>

    <div v-if="isAll" class="single-member effect-3" v-for="(item,index) in tableData">
      <div class="member-image">
        <img src="" alt="">
        <div style="opacity: 0">{{index}}</div>
      </div>
      <div class="member-info" >
        <h3 class="Uname">{{tableData[index].name}}</h3>
        <h5>{{ tableData[index].code }}</h5>
        <p>年龄:{{tableData[index].age}}&nbsp&nbsp身高:{{tableData[index].height}}</p>
        <p>家庭住址:{{tableData[index].addr}}</p>
        <b-button-group id="dosomeThing">
          <b-button v-b-tooltip.hover title="修改信息" v-b-modal.my-modal style="width: 60px" variant="outline-primary"@click="showModal(index)">
            <b-icon  icon="tools"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover @click="showModal7(tableData[index].id)"  title="老师划分班级,课程" style="width: 60px" variant="outline-primary">
            <b-icon icon="person-fill"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover @click="showModal6(tableData[index].id)" style="width: 60px" title="学生划分班级" v-b-modal.my-modal6 variant="outline-primary">
            <b-icon  icon="inbox-fill"></b-icon>
          </b-button>
        </b-button-group>
      </div>
    </div>

    <b-modal ref="my-modal7" hide-footer title="划分班级">
      <div class="d-block text-center">
        <vxe-form
          ref="xForm"
          class="my-form2"
          title-align="right"
          title-width="100"
          :data="formData2"
          @submit="submitEvent6(selected)"
          @reset="resetEvent">
          <div>
            <div>请选择班级</div><b-form-select style="width: 50%;display:inline;margin-left: 20px" v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
            <div>请选择课程</div><b-form-select style="width: 50%;margin-left: 20px" v-model="selected1" :options="options1" size="sm" class="mt-3"></b-form-select>
          </div>
          <vxe-form-item align="center" span="24">
            <template v-slot>
              <vxe-button type="submit"   status="primary">提交信息</vxe-button>
              <vxe-button type="reset">重置</vxe-button>
            </template>
          </vxe-form-item>
        </vxe-form>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal1111">Close Me</b-button>
    </b-modal>

    <div v-if="isOne" class="single-member effect-3">
      <div class="member-image">
        <img src="" alt="">
      </div>
      <div class="member-info" >
        <h3 class="Uname">{{Uname}}</h3>
        <h5>{{Ucode}}</h5>
        <p>年龄:{{Uage}}&nbsp&nbsp身高:{{Uheight}}</p>
        <p>家庭住址:{{Uaddr}}</p>
        <b-button-group id="dosomeThing1">
          <b-button  v-b-modal.my-modal id="show-btn1" style="width: 60px" variant="outline-primary" @click="showModal(Uindex)">
            <b-icon  icon="tools"></b-icon>
          </b-button>
          <b-button style="width: 60px" variant="outline-primary">
            <b-icon icon="person-fill"></b-icon>
          </b-button>
          <b-button style="width: 60px" variant="outline-primary">
            <b-icon  icon="inbox-fill"></b-icon>
          </b-button>
        </b-button-group>
      </div>
    </div>

    <div>
      <b-modal ref="my-modal6" hide-footer title="划分班级">
          <div class="d-block text-center">
            <vxe-form
              ref="xForm"
              class="my-form2"
              title-align="right"
              title-width="100"
              :data="formData2"
              @submit="submitEvent3(selected)"
              @reset="resetEvent">
              <div>请选择班级
                <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
              </div>
              <vxe-form-item align="center" span="24">
                <template v-slot>
                  <vxe-button type="submit"   status="primary">提交信息</vxe-button>
                  <vxe-button type="reset">重置</vxe-button>
                </template>
              </vxe-form-item>
            </vxe-form>
          </div>
          <b-button class="mt-3" variant="outline-danger" block @click="hideModal1111">Close Me</b-button>
      </b-modal>

      <b-modal ref="my-modal" hide-footer title="Using Component Methods">
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
            <vxe-form-item title="名称" field="name" span="24">
              <template v-slot="scope">
                <vxe-input v-model="formData2.name" placeholder="请输入名称" clearable
                           @input="$refs.xForm.updateStatus(scope)"></vxe-input>
              </template>
            </vxe-form-item>
            <vxe-form-item title="学号" field="code" span="24">
              <template v-slot="scope">
                <vxe-input v-model="formData2.code" placeholder="请输入学号" clearable
                           @input="$refs.xForm.updateStatus(scope)"></vxe-input>
              </template>
            </vxe-form-item>

            <vxe-form-item title="年龄" field="age" span="24">
              <template v-slot>
                <vxe-input v-model="formData2.age" type="integer" placeholder="请输入年龄" clearable></vxe-input>
              </template>
            </vxe-form-item>
            <vxe-form-item title="密码" field="password" span="24">
              <template v-slot>
                <vxe-input v-model="formData2.password" placeholder="请输入密码" clearable
                           @input="$refs.xForm.updateStatus(scope)"></vxe-input>
              </template>
            </vxe-form-item>
            <vxe-form-item title="地址" field="address" span="24">
              <template v-slot>
                <vxe-textarea v-model="formData2.addr" placeholder="请输入地址" clearable></vxe-textarea>
              </template>
            </vxe-form-item>
            <vxe-form-item align="center" span="24">
              <template v-slot>
                <vxe-button type="submit" status="primary">提交信息</vxe-button>
                <vxe-button type="reset">重置</vxe-button>
              </template>
            </vxe-form-item>
          </vxe-form>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal111">Close Me</b-button>
      </b-modal>
    </div>
    <!--批量导入-->
    <b-modal id="my-modal1" size="xl" title="导入用户信息">
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
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>

      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="addUser"
          >
            提交
          </b-button>
        </div>
      </template>
    </b-modal>


  </div>
</template>

<script>
/*npm install xlsx*/
import XLSX from "xlsx";

export default {
  computed: {
    rows() {
      return this.userMessage.length
    }
  },
  methods:{
    hideModal1111() {
      this.$refs['my-modal6'].hide()
    },
    toIndex(){
      this.$router.push('./index');
    },
    submitEvent3(index) {
      console.log(this.init[0].stId);
      this.init[0].claId = index;
      this.$store
        .dispatch('admin/insertInfo/segment/class/submit', this.init)
        .then(result => {
          if (result === 'success')
            console.log(3333333);
        }).then(() => {
      })
      setTimeout(() => {
        this.$refs['my-modal6'].toggle('#toggle-btn')
        this.$XModal.message({message: '保存成功', status: 'success'})
        console.log(index);
      }, 1000)
    },
    submitEvent6(index) {
      console.log(this.init[0].stId);
      /* this.initClsThCou[0].thId = index;*/
      this.initClsThCou[0].claId = this.selected;
      this.initClsThCou[0].courseId = this.selected1;
      this.$store
        .dispatch('admin/insertInfo/segment/course/submit', this.initClsThCou)
        .then(result => {
          if (result === 'success')
            console.log(3333333);
        }).then(() => {

      })
      setTimeout(() => {
        this.$refs['my-modal7'].toggle('#toggle-btn')
        this.$XModal.message({message: '保存成功', status: 'success'})
        console.log(index);
      }, 1000)
    },
    test1() {
      console.log(this.$store.state.admin.userForm);
    },
    query() {
      let i = document.querySelector("#username").value;
      /*this.$store.commit('updateLoginForm',this.loginForm)*/
      console.log(this.username);
      this.$store
        .dispatch('admin/query', this.username)
        .then(result => {
          if (result === 'success')
            console.log(3333333);
          this.tableData = this.$store.state.admin.user.userForm;
        }).then(() => {
        /*this.$router.push('index')*/
      })
    },
    showModal7(index) {
      this.initClsThCou[0].thId = index;
      this.$refs['my-modal7'].show();
      /*老师ID*/  /*classId*/ /*courseid*/
      /*console.log(index);*///thID
      /*classid*/

      this.$store
        .dispatch('admin/course/query', {name: null})
        .then(result => {
          if (result === 'success')
            console.log(3333333);
          let allcourse = this.$store.state.admin.course.creations;
          for (let i in allcourse) {
            this.options1.push({
              value: allcourse[i].id,
              text: allcourse[i].name
            })
          }
          console.log(allcourse);
        }).then(() => {
      })

      this.$store
        .dispatch('admin/class/query', {name: null})
        .then(result => {
          if (result === 'success')
            console.log(3333333);
          let allclass1 = this.$store.state.admin.class.query;
          let all1 = [];
          for(let i in allclass1){
            all1.push({
              value:allclass1[i].id,
              text:allclass1[i].name
            })
          }
          this.options = all1
        }).then(()=>{
      })
      /*courseId*/

    },
    showModal6(index) {
      this.init[0].stId = index;
      this.$refs['my-modal6'].show();
        this.$store
          .dispatch('admin/class/query',{name:null})
          .then(result => {
            if (result==='success')
              console.log(3333333);
            let allclass = this.$store.state.admin.class.query;
            let all = []
            for(let i in allclass){
              all.push({
                value:allclass[i].id,
                text:allclass[i].name
              })
            }
            this.options = all
          }).then(()=>{

      })
    },
    showModal111() {
      this.$refs['my-modal'].show()
    },
    hideModal111() {
      this.$refs['my-modal'].hide()
    },
    submitEvent2(index) {
      setTimeout(() => {
        this.$refs['my-modal'].toggle('#toggle-btn')
        this.$XModal.message({message: '保存成功', status: 'success'})
        console.log(index);
      }, 1000)
    },
    searchEvent() {
      this.$XModal.message({message: '查询事件', status: 'info'})
    },
    resetEvent() {
      this.$XModal.message({message: '重置事件', status: 'info'})
    },
    showModal(index) {
      console.log(index);
      this.$refs['my-modal'].show();
      this.formData2.name = this.tableData[index].name;
      this.formData2.age = this.tableData[index].age;
      this.formData2.addr = this.tableData[index].addr;
      this.formData2.code = this.tableData[index].code;
      this.formData2.password = this.tableData[index].password;
      this.formData2.index = index;
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
          // console.log(ws);
          this.userMessage = ws;
          this.userMessage.forEach((item, index) => {
            item.institute = {id: item.institute}
            item.powers = JSON.parse(item.powers)
          })
          console.log(this.userMessage)
          that.lists = [];
          // 从解析出来的数据中提取相应的数据
          ws.forEach(item => {
            that.lists.push({
              username: item["name"],
              phone_number: item["code"]
            });
          });

        } catch (e) {
          return false;
        }
      };
      fileReader.readAsBinaryString(files[0]);
    },
    addUser() {
// 给后端发请求
      this.$store.dispatch("admin/insertInfo/insertUser", this.userMessage)
        .then(res => {
          console.log(res)
        })
    }
  },
  name: "MessCard",
  data() {
    return {
      init: [{
        claId: '',
        stId: '',
      }],
      initClsThCou: [{
        courseId: '',
        claId: '',
        thId: '',
      }],
      selected: null,
      selected1: null,
      allCourse: {
        value: '',
        text: ''
      },
      allClass: {
        value: '',
        text: ''
      },
      allClass1: {
        value: '',
        text: ''
      },
      options: [],
      options1: [],
      username: '',
      Uindex: '',
      Uname: '',
      Ucode: '',
      Uage: '',
      Uaddr: '',
      Uheight: '',
      isOne: false,
      isAll: true,
      perPage: 15,//每页数据条数
      currentPage: 1,
      userMessage: [],//存放导入的数据
      formData2: {
        classid: '',
        sid: '',
        name: '',
        code: '',
        password: '',
        age: '26',
        addr: '',
        index: ''
      },
      formRules2: {
        name: [
          {required: true, message: '请输入名称'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符'}
        ],
        code: [
          {required: true, message: '请输入学号'}
        ],
        password: [
          {required: true, message: '请输入密码'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符'}
        ]
      },
      tableData: [{
        id: 1,
        sex: "男",
        age: 18,
        password: '123456',
        height: 175,
        code: '179000505',
        date: '2016-05-04',
        name: this.$store.state.info.mine.name,
        addr: '上海市普陀区金沙江路 1517 弄'
      }
      ]

    }

  },

}
</script>

<style scoped>
.mt-31 {
  margin-top: 20px;
  width: 500px;
}

.mt-3 {
  margin: 0 auto;
  width: 400px;
}

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

.member-info p {
  margin-top: -15px;
}

b-icon {
  width: 250px;
}

body {
  font-family: Lato, 'Open Sans', sans-sarif;
  font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.Uname {
  color: #2a8bcb;
}

.messcord {
  width: 80%;
  /*height: 1300px;*/
  margin: 0 auto;
}

/*= common css to all effects =*/
.single-member {
  width: 280px;
  float: left;
  margin: 30px 2.5%;
  background-color: #fff;
  text-align: center;
  position: relative;
}

.member-image img {
  max-width: 100%;
  vertical-align: middle;
}

h3 {
  font-size: 24px;
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

.social-touch a {
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
.icon-colored .fb-touch{
  background-position: 0 -27px;
}
.icon-colored .tweet-touch{
  background-position: -35px -27px;
}
.icon-colored .linkedin-touch{
  background-position: -71px -27px;
}
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

body, html {
  font-size: 100%;
  padding: 0;
  margin: 0;
}
a{
  color: rgba(255, 255, 255, 0.6);
  outline: none;
  text-decoration: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
a:hover,a:focus{
  color:#74777b;
  text-decoration: none;
}


/*= effect-3 css =*/
.effect-3{
  max-height: 270px;
  min-height: 260px;
  width: 20%;
  border-radius: 15px;
  overflow: hidden;
}
.effect-3 h3{
  padding-top: 7px;
  line-height: 33px;
}
.effect-3 .member-image{
  border-bottom: 5px solid #e5642b;
  transition: 0.5s;
  background-color: rebeccapurple;
  height: 200px;
  width: 100%;
  display: inline-block;
  float: none;
  vertical-align: middle;
}
.effect-3 .member-info{
  transition: 0.4s;
}
.effect-3 .member-image img{
  width: 100%;
  vertical-align: bottom;
}
.effect-3 .social-touch{
  background-color: #e5642b;
  float: left;
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding: 5px 0;
  width: 100%;
  transition: 0.5s;
}
.effect-3:hover .member-image{
  border-bottom: 0;
  border-radius: 0 0 50px 50px;
  height: 81px;
  display: inline-block;
  overflow: hidden;
  width: 109px;
  transition: 0.5s;
}
/*= effect-3 css end =*/
.effect-3:hover{
  height: 270px;
}

/*= Media Query
=============== */
@media only screen and (max-width: 980px) {
  .row {
    width: 100%;
    margin: 50px 0;
  }

  .team-members {
    text-align: center;
  }

  .single-member {
    float: none;
    display: inline-block;
    vertical-align: bottom;
  }
}

/*= Media Query End
=================== */
@media screen and (max-width: 1300px) {
  .single-member {
    width: 250px;
  }
}

/*宽度小于500px时 绿色*/

</style>
