<template>
  <div id="functionlist">
    <h2 class="title">服务</h2>
    <div id="list" class="row container">
      <div class="col-lg-3 col-md-4 col-sm-6 col-6 card">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chengji"></use>
        </svg>
        <span>用户管理</span>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-6 card" @click="limits">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chengchang"></use>
        </svg>
        <span>课程管理</span>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-6 card" @click="questionnaireManager">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiaoyan"></use>
          </svg>
          <span>问卷管理</span>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-6 card" @click="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhizhou"></use>
        </svg>
        <span>权限管理</span>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-6 card" @click="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pingjiao"></use>
        </svg>
        <span>问卷评教(学生)</span>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-6 card" @click="studentquestionnairefinish">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shenpi"></use>
        </svg>
        <span>查看评价结果(学生)</span>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-6 card" @click="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pingjiao"></use>
        </svg>
        <span>问卷评教(老师)</span>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-6 card" @click="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shenpi"></use>
        </svg>
        <span>查看评价结果(老师)</span>
      </div>
    </div>
    <Function></Function>
  </div>

</template>

<script>
import Function from "components/common/function/Function";
import myAxios from "network/request";
export default {
  name: "FunctionList",
  components:{
    Function
  },
  methods:{
    limits(){
      this.$store.dispatch("admin/power/loadAll")
      .then(res =>{
        this.$router.push('/limits');
      })

    },
    studentquestionnairefinish(){
      this.$store
        .dispatch('evaluation/getfinishedList')
        .then(result => {
          if (result == 'true')
            this.$router.push('/studentquestionnairefinish');
        }).then(()=>{
        this.$router.push('/studentquestionnairefinish');
      })

    },

    questionnaireManager(){
      this.$store
        .dispatch("admin/quertionnaire/loadGetAllNaire")
        .then(res =>{
          // console.log("="+res);
          this.$router.push('/quertionnaireManager');
        })
      .catch(err=>{
        console.log(err);
      })
    },
  }
}
</script>

<style scoped>
#functionlist{
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  min-height: 400px;
}



.title {
  font-size: 20px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  color: #484848;
  font-weight: normal;
  position: relative;
  margin-bottom: 10px;
}
.title:after{
  content: "";
  position: absolute;
  width: 60px;
  height: 2px;
  background: #000;
  left: 0;
  bottom: 0;
  -moz-transition: all .5s ease;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
}

.title:hover:after {
  width: 220px;
}

.card {
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  font-size: 16px;
}
.card:hover{
  box-shadow:0 0 5px #a4a4a4;
  z-index: 2;
}
.card svg{
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}
.card:hover svg{
  width: 70px;
  height: 70px;
  transition: 0.4s;
}
.card:hover span{
  font-size: 18px;
}

#list > div {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
