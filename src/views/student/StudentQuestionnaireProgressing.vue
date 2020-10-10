<template>
  <div>


    <vxe-table
      border
      :data="progressingQuestionnaireList">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="title" title="Name" sortable></vxe-table-column>
      <vxe-table-column field="beEvaUsers[0].name" title="Teacher" show-overflow></vxe-table-column>
      <vxe-table-column title="操作" width="200">
        <template v-slot="{ row }">
          <!--        <button type="button" class="btn btn-outline-primary">评教</button>-->
          <button type="button" class="btn btn-outline-success" v-b-modal.function @click="showdetaol(row)">查看评价结果
          </button>

        </template>
      </vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import ManagerSetting from "components/common/Manager/ManagerSetting";
import Footer from "components/content/footer/Footer";
import QuestionnaireList from "components/content/questionnaire/QuestionnaireList";

export default {
  name: "StudentQuestionnaireProgressing",
  data() {
    return {
      manager: [{name: "评教结果"}]
    }
  },
  computed: {
    progressingQuestionnaireList() {
      const list = this.$store.state.evaluation.questionnairefinishedList;
      return list
    }
  },
  components: {
    QuestionnaireList,
    NavBar,
    Footer,
  }
}
</script>

<style scoped>

</style>
