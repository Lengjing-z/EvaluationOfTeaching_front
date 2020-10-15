<template>
  <div>
      <div class="tableDiv">
        <div class="grxx">
          <div id = "xsxm">姓名</div>
          <div>'黄天亮'</div>
          <div id = "crouse">课程</div>
          <div>java</div>
          <div id = "fdyxm">老师</div>
          <div>王芳</div>
        </div>
        <div class="wenjuan">
          <table border="1" cellspacing="0" cellpadding="0">
            <thead>
            <tr>
              <th colspan="2">问题</th>
              <!-- <th><p>评分</p><p>(1-5分)</p></th> -->
            </tr>
            </thead>
            <tbody id = "wt">
            <tr v-for="(item,index) in finishedlist" :key="index">
              <td colspan="2">
                <span>{{index+1}}.{{item.content}}</span>
                <b-form-rating v-model="item.answer" show-value variant="warning" size="md" class="choose"></b-form-rating>
                <!--                <span class="layui-inline">0分</span>-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="subbtn container" >
          <b-button @click="sub()" variant="success" class="">提交</b-button>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "Form",
    data() {
      return {
        finishedlist:null,
        value: 0,
        it:[],
        user:[],
        AnswerData:[
          {
            sttId:'',
            stId:'',
            qsId:'',
            answer:'',
          }
        ]
      }
    },
    props:['qwe'],
    created() {
      this.finishedlist = this.$store.state.admin.questionnaire.q.questions;
      this.user = this.$store.state.info.mine;
      console.log(this.finishedlist)
    },
    methods:{
      sub(){
        for(let i in this.finishedlist){
          this.it.push({
            qsId:this.finishedlist[i].id,
            answer:this.finishedlist[i].answer,
            sttId:this.qwe.stId,
            stId:this.user.id,
          })

        }
        console.log(this.it);
        this.$store
          .dispatch('evaluation/student/submitQuestionnaire',this.it)
          .then(result => {
            if (result==='success')
              console.log(3333333);
            this.ClassData =   this.$store.state.clazz.taught;
          }).then(()=>{
        })
      }
    }
  }
</script>

<style scoped>
.tableDiv{
  margin:0 auto;
  max-width: 800px;
}
table th{
  text-align: center;
}
table th,table td{
  padding: 8px 5px;
}
.grxx{
  display: flex;
  border: 1px solid #d0d0d0;
  width: 100%;
  box-sizing: border-box;
}
.grxx>div{
  flex: 1;
  border-right:1px solid #d0d0d0;
  padding: 5px 3px;
  text-align: center;
  font-size: 14px;
}
.grxx>div:last-child{
  border-right: none;
}
.wenjuan{
  border: 1px solid #d0d0d0;
  padding: 5px;
  border-top: 0;
  min-height: 70vh;
  width: 100%;
  box-sizing: border-box;
}
.wenjuan table{
  width: 100%;
  border: 1px solid #d0d0d0;
}
p{
  margin: 0;
}


.subbtn{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.choose{
  width: 85%;
}
</style>
