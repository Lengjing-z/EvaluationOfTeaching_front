<template>
  <div id="functionlist">
    <h2 class="title">服务</h2>
    <div id="list" class="row container">
      <Function v-for="item in functionDataList"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
        :url="item.url"
        :powers="item.powers"

      />
      //  开发时 可去掉 v-show="item.powers != null && item.powers.length>0"
      //  整合此功能加上 v-show="item.powers != null && item.powers.length>0"
    </div>
    <Function></Function>
  </div>

</template>

<script>
import Form from "components/common/function/Form";
import Function from "components/common/function/Function";
import myAxios from "network/request";

export default {
  name: "FunctionList",
  components: {
    Form,
    Function
  },
  data(){
    return{
      functionDataList:[
        {
          "title": "用户管理",
          "url": "usermanager",
          "icon": "#icon-tuanxuezhaoxin",
          powers: this.hasAnyPower(1,2,3,5,6,7,8,9)
        },
        {
          "title": "课程管理",
          "url": "coursemanager",
          "icon": "#icon-tubiaozhizuomoban28"
        },
        {
          "title": "班级管理",
          "url": "classmana",
          "icon": "#icon-tubiaozhizuomoban7"
        },
        {
          "title": "问卷/指标管理",
          "url": "questionnaireManager",
          "icon": "#icon-kaowuguanligongzuo"
        },

        {
          "title": "学院管理",
          "url": "departmentmana",
          "icon": "#icon-zhuantixuexihui"
        },
        {
          "title": "权限管理",
          "url": "limits",
          "icon": "#icon-kaowuguanligongzuo"
        },
        {
          "title": "评教管理",
          "url": "questionnaireProgress",
          "icon": "#icon-gongcheguanli"
        },
        {
          "title": "发布问卷",
          "url": "questionnaireIssue",
          "icon": "#icon-gonghuichengyuanzhuce"
        },
        {
          "title": "评教老师",
          "url": "pinteacher",
          "icon": "#icon-banxuepinggu"
        },
        {
          "title": "查看评价结果(学生)",
          "url": "test",
          "icon": "#icon-tubiaozhizuomoban26"
        },
        {
          "title": "查看个人信息",
          "url": "mess",
          "icon": "#icon-xueshengdangan"
        },
        {
          "title": "评教同行",
          "url": "techerpintecher",
          "icon": "#icon-banxuepinggu"
        },
        {
          "title": "查看评价结果(老师)",
          "url": "teacherQuestionnaireFinish",
          "icon": "#icon-chengjishouji"
        },
        {
          "title": "问卷统计（老师）",
          "url": "teacherQuestionnaireFinishStatistics",
          "icon": "#icon-tubiaozhizuomoban28"
        },
        {
          "title": "正在评教问卷状态",
          "url": "",
          "icon": "#icon-pinggugongzuo"
        },
        {
          "title": "所授班级和课程",
          "url": "bethclass",
          "icon": "#icon-tubiaozhizuomoban28"
        },

      ]
    }
  },
  created() {
  },
  methods: {
    limits() {

    },
    hasAnyPower(){
      return [...arguments].filter(arg=>this.$store.getters['admin/power/getUserPowers'].some(item=>item.pid == arg))
    },

  },
  mounted() {
      // window.console.log(arguments)
  }
}
</script>

<style scoped>
#functionlist {
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

.title:after {
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

#list > div {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
