<template>
  <div style="width: 80%;margin:0 auto">
    <b-card-group columns>
      <b-card id="i"
              title="个人信息"
        img-src="https://placekitten.com/g/400/450"
        img-alt="Image"
        img-top
      >
        <b-card-text style="font-size: 15px">
            {{ this.title }}
        </b-card-text>
      </b-card>

      <b-card header="学院信息">
        <blockquote class="blockquote mb-0">
          <p>所在学院  : {{this.form.institute.name}}</p>
        </blockquote>
        <blockquote  v-if="isTeacher" class="blockquote mb-0">
          <p>所教班级  : <span v-for="(item,index) in Data1">{{Data1[index].name}}</span></p>
          <p>所教课程  : <span v-for="(item,index) in Data1">{{Data2[index].name}}</span></p>
        </blockquote>
        <blockquote  v-if="isStudent" class="blockquote mb-0">
          <p>所属班级  : <span v-for="(item,index) in Data3">{{Data3[index].name}}</span></p>
          <p>所属课程  : <span v-for="(item,index) in Data4">{{Data4[index].name}}</span></p>
        </blockquote>
      </b-card>

      <b-card title="详细信息" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
        <b-card-text>
          <p>学号 : {{this.form.code}}</p>
          <p>年龄 : {{this.form.age}}</p>
          <p>身高 : {{this.form.height}}</p>
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>

      <b-card bg-variant="primary" text-variant="white">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>
            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
          </footer>
        </blockquote>
      </b-card>

      <b-card>
        <b-card-title>家庭住址</b-card-title>
        <b-card-text>
          {{ form.addr }}
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>

      <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

      <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
        <b-card-text>
          <p>个人介绍</p>
          {{this.form.intr1}}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Footer Text</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "UserMess",
  mounted() {
    this.init();
  },
  created() {
    // console.log(this.$store.state.admin.power.query);
    let pw = this.$store.state.admin.power.query;
    this.form = this.$store.state.info.mine;
    // console.log(this.form.sex);
    //老师
    if(pw[0].pid == 2){
      this.isTeacher = true;
      this.$store
        .dispatch('clazz/loadTaught')
        .then(result => {
          if (result==='success')
            console.log(this.$store.state.clazz.taught);
          this.Data1 = this.$store.state.clazz.taught;
          console.log(this.Data1);
        }).then(()=>{

      })
      this.$store
        .dispatch('course/loadTaught')
        .then(result => {
          if (result==='success')
            console.log(this.$store.state.course.taught);
          this.Data2 = this.$store.state.course.taught;
        }).then(()=>{
      })
    }
    //学生
    if(pw[0].pid == 1){
      this.isStudent = true;
      this.$store
        .dispatch('clazz/loadEnrolled')
        .then(result => {
          if (result==='success')
            console.log(this.$store.state.clazz.taught);
          this.Data3 = this.$store.state.clazz.enrolled;
          console.log(this.Data1);
        }).then(()=>{

      })
      this.$store
        .dispatch('course/loadEnrolled')
        .then(result => {
          if (result==='success')
            console.log(this.$store.state.course.taught);
          this.Data4 = this.$store.state.course.enrolled;
        }).then(()=>{
      })
    }
    if(this.form.sex == "女"){
      this.title = "Hello,"+ this.form.name +" "+ "lady" + "This is your Message"
    }else{
      this.title = "Hello,"+ this.form.name +" "+ "genterman" + "This is your Message"
    }
  },
  data() {
    return {
      Data1:[],
      Data2:[],
      Data3:[],
      Data4:[],
      isTeacher:false,
      isStudent:false,
      title:'',
      isman:'',
      form: {
        email: '',
        institute:{
          name:'',
        },
        name: '',
        food: null,
        checked: [],
        addr:'',
        age:'',
        code:'',
        height:'',
        intr1:'',
        sex:'',
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    init(){
      this.form = this.$store.state.info.mine;
      this.form.name = this.$store.state.info.mine.name;
      this.form.intr1 = this.$store.state.info.mine.intr;
      // console.log(this.$store.state.info.mine.intr)
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }

}
</script>

<style scoped>

</style>
