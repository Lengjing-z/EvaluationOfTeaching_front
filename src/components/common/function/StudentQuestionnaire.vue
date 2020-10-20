<template>
  <div>
    <b-modal id="studentQuestionnaire" size="lg" hide-footer :title="teacher.title">
      <div class="tableDiv">
        <div class="grxx">
          <div id="xsxm">被评教的老师</div>
          <div>{{ teacher.teacherName }}</div>
<!--          <div id="crouse">课程</div>-->
<!--          <div>{{ teacher.institute }}</div>-->
        </div>
        <div class="wenjuan">
          <table border="1" cellspacing="0" cellpadding="0">
            <thead>
            <tr>
              <th colspan="2">问题</th>
              <!-- <th><p>评分</p><p>(1-5分)</p></th> -->
            </tr>
            </thead>
            <tbody id="wt">
            <tr v-for="(item,index) in finishedlist" :key="index">
              <td colspan="2">
                <span>{{ index + 1 }}.{{ item.content }}</span>
                <b-input-group>
                  <b-form-rating v-model="item.answer" variant="warning" size="md"
                                 disabled></b-form-rating>
                  <b-input-group-append>
                    <b-input-group-text class="justify-content-center" style="min-width: 3em;">
                      {{ result[item.answer - 1] }}
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--        <div class="subbtn container">-->
        <!--          <b-button variant="success" class="">提交</b-button>-->
        <!--        </div>-->
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "TeacherQuestionnaire",
  data() {
    return {
      result : ['不满意', '有点差', '一般般', '满意', '非常满意'],
    }
  },
  props: ['finishedlist', 'teacher'],
  created() {
  }
}
</script>

<style scoped>
.tableDiv {
  margin: 0 auto;
  max-width: 800px;
}

table th {
  text-align: center;
}

table th, table td {
  padding: 8px 5px;
}

.grxx {
  display: flex;
  border: 1px solid #d0d0d0;
  width: 100%;
  box-sizing: border-box;
}

.grxx > div {
  flex: 1;
  border-right: 1px solid #d0d0d0;
  padding: 5px 3px;
  text-align: center;
  font-size: 14px;
}

.grxx > div:last-child {
  border-right: none;
}

.wenjuan {
  border: 1px solid #d0d0d0;
  padding: 5px;
  border-top: 0;
  min-height: 70vh;
  width: 100%;
  box-sizing: border-box;
}

.wenjuan table {
  width: 100%;
  border: 1px solid #d0d0d0;
}

p {
  margin: 0;
}


.subbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.choose {
  width: 85%;
}
</style>
