<template id="index">
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Login from 'views/login/Login.vue';

export default {
  name: 'app',
  components: {
    Login
  },
  created() {
//在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }

//在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  },
  methods: {
      generateDiagramData(indecators, answers){
        let data = []
        (function dfs(indecators, answers,children){
          indecators.forEach(indcator=>{
            children.push({
              name: indcator,
              value:answers.filter(item=>indcator.indexId).reduce((total,current)=>total+Number(current.answer))*indcator.rate,
              children:[]
            })
            dfs(indcator.children,answers,children[children.length-1].children)
          })
        })(indecators,answers,data)
        return data
      }
  }
}
</script>
- 
<style>
@import url("./assets/css/base.css");
</style>
