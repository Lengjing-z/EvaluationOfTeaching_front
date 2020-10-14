<template>
  <div>
  <header>
    <NavBar></NavBar>
  </header>
    <!--所授班级-->
    <div class="single-member effect-1" v-for="(item,index) in ClassData">
      <div class="member-image">
        <!--<img src="" width="150" height="80" alt="">-->
        <div id="img">{{ClassData[index].id}}</div>
      </div>
      <div class="member-info">
        <h4>{{ ClassData[index].name }}</h4>
        <h5>PinYing</h5>
        <!--<p style="color: #2a91d8" @click="test(index)">所有班级</p>-->

        <b-button-group id="dosomeThing">
          <b-button  v-b-modal.my-modal style="width: 60px" variant="outline-primary" @click="showModal(index)">
            <b-icon  icon="tools"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover v-b-modal.my-modal2 @click="showModal3(index)" title="查看所有班级"  style="width: 60px" variant="outline-primary">
            <b-icon icon="person-fill"></b-icon>
          </b-button>

          <b-button style="width: 60px" variant="outline-primary">
            <b-icon @click="test()" icon="inbox-fill"></b-icon>
          </b-button>
        </b-button-group>
      </div>
    </div>
    <!--所授课程-->

    <footer>
    <Footer></Footer>
  </footer>
  </div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import Footer from "components/content/footer/Footer";
export default {
  name: "BeThclass",
  components:{
    NavBar,
    Footer
  },
  created() {
    this.$store
      .dispatch('clazz/loadTaught')
      .then(result => {
        if (result==='success')
          console.log(this.$store.state.clazz.taught);
      }).then(()=>{
    })
  },
  data(){
    return{
      ClassData:[],
    }
  }
}
</script>

<style scoped>

</style>
