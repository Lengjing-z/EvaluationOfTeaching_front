<template>
  <div>
  <header>
    <NavBar></NavBar>
  </header>
    <manager-setting style="width: 75%;margin: 0 auto" :manager="manager"></manager-setting>
    <div style="width: 70%;margin: 0 auto;margin-top: 40px">
      <p class="p1">所教课程</p>
      <b-card-group  deck>
        <b-card style="width: 100px" v-for="(item,index) in courseData" bg-variant="success" text-variant="white" header="课程" class="text-center">
          <b-card-text>{{ courseData[index].name }}</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div style="width: 70%;margin: 0 auto;margin-top: 50px">
      <p class="p1">所授班级</p>
      <b-card-group deck>
        <b-card style="width: 100px" v-for="(item,index) in ClassData" bg-variant="success" text-variant="white" header="班级" class="text-center">
          <b-card-text>{{ ClassData[index].name }}</b-card-text>
        </b-card>
      </b-card-group>
    </div>

    <div style="height: 350px">
    </div>
    <footer>
    <Footer></Footer>
  </footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
import ManagerSetting from "components/common/Manager/ManagerSetting";
export default {
  name: "BeThclass",
  components:{
    NavBar,
    Footer,
    ManagerSetting
  },
  methods:{
    showModal3(){

    },
    toIndex(){
      this.$router.push('./index');
    },
  },
  created() {
    this.$store
      .dispatch('clazz/loadTaught')
      .then(result => {
        if (result==='success')
          console.log(this.$store.state.clazz.taught);
        this.ClassData = this.$store.state.clazz.taught;
      }).then(()=>{

    })
    this.$store
      .dispatch('course/loadTaught')
      .then(result => {
        if (result==='success')
          console.log(this.$store.state.course.taught);
        this.courseData = this.$store.state.course.taught;
      }).then(()=>{
    })
  },
  data(){

    return{
      manager: [{name: "所授班级和所教课程"}],
      ClassData:[],
      courseData:[],
    }
  }
}
</script>

<style scoped>
.p1{
  font-size: 25px
}
</style>
