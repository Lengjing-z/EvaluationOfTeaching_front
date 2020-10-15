<template>
  <div>
    <nav-bar></nav-bar>
    <manager-setting :manager="manager"></manager-setting>
    <div class="container mt-3 mb-5">
      <header>
        <h3>发布问卷</h3>
      </header>
      <vxe-button icon="fa fa-plus" status="success" class="mb-3 mt-3" @click="issueQuestionnaire">发布问卷</vxe-button>
      <vxe-table
        stripe
        border
        ref="chooseNaire"
        :data="questionnaireList">
        <vxe-table-column type="checkbox" width="60"></vxe-table-column>
        <vxe-table-column type="seq" width="120"></vxe-table-column>
        <vxe-table-column field="title" title="Title"></vxe-table-column>

      </vxe-table>

      <b-modal ref="issue" hide-footer title="发布问卷">
        <vxe-form :data="issueFormData">
          <vxe-form-item title="发布类型" field="status" span="12" class="mb-3">
            <template v-slot>
              <vxe-select v-model="issueFormData.status" placeholder="请选择状态" clearable @change="changeStatus">
                <vxe-option value="0" label="发布同行评教"></vxe-option>
                <vxe-option value="1" label="发布学生评教"></vxe-option>
              </vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item title="发布至" field="toPlace" span="24" class="mb-3">
            <template v-slot>
              <b-form-select v-model="issueFormData.selected" :options="allSelect"></b-form-select>
            </template>
          </vxe-form-item>
          <vxe-form-item title="开始时间" field="startTime" span="24" >
            <template v-slot>
              <vxe-input v-model="issueFormData.startTime" type="datetime" placeholder="请选择日期" clearable></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item title="结束时间" field="endTime" span="24" >
            <template v-slot>
              <vxe-input v-model="issueFormData.endTime" type="datetime" placeholder="请选择日期" clearable></vxe-input>
            </template>
          </vxe-form-item>

          <vxe-form-item  span="24" >
            <template v-slot>
              <b-button class="mt-3" variant="outline-warning" block @click="submitIssue">发布</b-button>
              <b-button class="mt-3" variant="outline-danger" block @click="hideModal">关闭</b-button> </template>
          </vxe-form-item>

        </vxe-form>
      </b-modal>

    </div>


    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
import ManagerSetting from "components/common/Manager/ManagerSetting";

export default {
  name: "QuestionnaireIssue",
  data() {
    return {
      manager: [{name: "发布问卷"}],
      questionnaireList: [],
      allSelect: [],
      issueFormData: {
        status: '1',
        selected: null,
        startTime: "",
        endTime: ""
      },

    }
  },
  created() {
    this.$store.dispatch("admin/questionnaire/loadGetAllNaire")
      .then(res => {
        if (res) {
          this.questionnaireList = this.$store.state.admin.questionnaire.questionnaireAll
        }
      })
  },
  components: {
    NavBar,
    Footer,
    ManagerSetting,
  },
  methods: {
    // 发布问卷
    issueQuestionnaire() {
      if (this.issueFormData.status == 0) {
        this.$store.dispatch("admin/questionnaire/queryAllInstitute")
        .then(res =>{
          if (res){
            let li = []
            this.$store.state.admin.questionnaire.allInstitute.forEach(item => {
              let obj = {value: item, text: item.name}
              li.push(obj)
            })
            this.allSelect = li
          }
        })
      } else if (this.issueFormData.status == 1) {
        this.$store.dispatch("admin/questionnaire/queryAllCourse")
          .then(res => {
            if (res) {
              let li = []
              this.$store.state.admin.questionnaire.allCourse.forEach(item => {
                let obj = {value: item, text: item.className+"/"+item.coursceName+'/'+item.teacherName}
                li.push(obj)
              })
              this.allSelect = li
            }
          })
      }
      this.$refs['issue'].show()

    },
    changeStatus() {
      this.allSelect = []
      if (this.issueFormData.status == 0) {
        this.$store.dispatch("admin/questionnaire/queryAllInstitute")
          .then(res => {
            if (res) {
              let Institute = []
              this.$store.state.admin.questionnaire.allInstitute.forEach(item => {
                let obj = {value: item, text: item.name}
                Institute.push(obj)
              })
              this.allSelect = Institute
            }
          })
      } else if (this.issueFormData.status == 1) {
        this.$store.dispatch("admin/questionnaire/queryAllCourse")
          .then(res => {
            if (res) {
              let course = []
              this.$store.state.admin.questionnaire.allCourse.forEach(item => {
                let obj =  {value: item, text: item.className+"/"+item.coursceName+'/'+item.teacherName}
                course.push(obj)
              })
              this.allSelect = course
            }
          })
      }
    },
    hideModal() {
      this.$refs['issue'].hide()
    },
    submitIssue() {
      let selectRecords = this.$refs.chooseNaire.getCheckboxRecords()
      console.log(this.issueFormData)
      this.issueFormData.naires = selectRecords
      this.$store.dispatch("admin/questionnaire/issueQuestionnaire",this.issueFormData)
      .then(res =>{
        console.log("admin/questionnaire/issueQuestionnaire",res)
        this.$refs['issue'].hide()
      })
      // console.log(selectRecords)
    }
  }
}
</script>

<style scoped>

</style>
