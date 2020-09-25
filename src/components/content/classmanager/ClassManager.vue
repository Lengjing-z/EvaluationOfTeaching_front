<template>
  <div class="test">
    <header>
      <h3>班级管理</h3>
      <b-button style="margin-top: 20px" v-b-modal.my-modal1 @click="showModal2" variant="outline-primary">添加班级</b-button>
    </header>

    <div class="single-member effect-1" v-for="(item,index) in ClassData">
      <div class="member-image">
        <!--<img src="" width="150" height="80" alt="">-->
        <div id="img">{{ClassData[index].id}}</div>
      </div>
      <div class="member-info">
        <h4>{{ ClassData[index].classname }}</h4>
        <h5>PinYing</h5>
        <!--<p style="color: #2a91d8" @click="test(index)">所有班级</p>-->

        <b-button-group id="dosomeThing">
          <b-button  v-b-modal.my-modal style="width: 60px" variant="outline-primary" @click="showModal(index)">
            <b-icon  icon="tools"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover title="修改学院信息" v-b-modal.my-modal style="width: 60px" variant="outline-primary">
            <b-icon icon="person-fill"></b-icon>
          </b-button>

          <b-button style="width: 60px" variant="outline-primary">
            <b-icon @click="test()" icon="inbox-fill"></b-icon>
          </b-button>
        </b-button-group>
      </div>
    </div>


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
          :loading="loading2"
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
              <vxe-button type="submit"  status="primary">提交信息</vxe-button>
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
          :loading="loading2"
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
              <vxe-button type="submit"  status="primary">提交信息</vxe-button>
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
export default {
  name: "ClassManager",
  methods:{
  showModal2(index) {
    this.$refs['my-modal1'].show();
  },
  showModal(index) {
    console.log(index);
    this.$refs['my-modal'].show();
    this.formData2.name = this.ClassData[index].classname;
  },
  submitEvent2 (index) {
    this.loading2 = true
    setTimeout(() => {
      this.loading2 = false;
      this.$refs['my-modal'].toggle('#toggle-btn')
      this.$XModal.message({ message: '保存成功', status: 'success' })

      console.log(index);
    }, 1000)
  },
    hideModal111() {
      this.$refs['my-modal'].hide()
    },
  submitEvent3 (index) {
    this.loading2 = true
    setTimeout(() => {
      this.loading2 = false;
      this.$refs['my-modal1'].toggle('#toggle-btn')
      this.$XModal.message({ message: '保存成功', status: 'success' })
      this.formData2.id= this.ClassData.length+1;
      console.log(this.ClassData.length);
      this.ClassData.push(this.formData2);

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
  }
},

data(){
  return{
    formData2 : {
      classname: '',
      id: '',
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

    ClassData:[
      {
        id:1,
        classname: '1790001',
      },
      {
        id:2,
        classname: '1790002',
      },
      {
        id:3,
        classname: '1790003',
      },
      {
        id:4,
        classname: '1790004',
      },
      {
        id:5,
        classname: '1790005',

      },
      {
        id:6,
        classname: '1790006',
      }
    ],
  }
}
}
</script>

<style scoped>

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
