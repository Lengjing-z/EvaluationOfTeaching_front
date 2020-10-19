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
<!--      //  开发时 可去掉 v-show="item.powers != null && item.powers.length>0"-->
<!--      //  整合此功能加上 v-show="item.powers != null && item.powers.length>0"-->
    </div>
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
          "title": "所授班级和课程",
          "url": "bethclass",
          "icon": "#icon-tubiaozhizuomoban28"
        }

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
  padding: 0.625rem  /* 10/16 */;
  background-color: #ffffff;
  border-radius: 0.3125rem  /* 5/16 */;
  min-height: 25rem  /* 400/16 */;
}

.title {
  font-size: 1.25rem  /* 20/16 */;
  line-height: 2.5rem  /* 40/16 */;
  border-bottom: 0.0625rem  /* 1/16 */ solid #eee;
  color: #484848;
  font-weight: normal;
  position: relative;
  margin-bottom: 0.625rem  /* 10/16 */;
}

.title:after {
  content: "";
  position: absolute;
  width: 3.75rem  /* 60/16 */;
  height: 0.125rem  /* 2/16 */;
  background: #000;
  left: 0;
  bottom: 0;
  -moz-transition: all .5s ease;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
}

.title:hover:after {
  width: 13.75rem  /* 220/16 */;
}

#list > div {
  height: 9.375rem  /* 150/16 */;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
