<template>
  <div id="functionlist">
    <h2 class="title">服务</h2>
    <div id="list" class="row container">
      <div class="col-lg-3 col-md-6 col-sm-6 col-6" v-b-modal.function>
        <p class="card"></p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-6" @click="limits">
        <p class="card"></p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-6">
        <p class="card"></p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-6">
        <p class="card"></p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-6">
        <p class="card"></p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-6">
        <p class="card"></p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-6">
        <p class="card"></p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-6">
        <p class="card"></p>
      </div>
    </div>
    <Function></Function>
  </div>

</template>

<script>
import Function from "components/common/function/Function";
export default {
  name: "FunctionList",
  components:{
    Function
  },
  methods:{
    limits(){
      this.$router.push('/limits');
    }
  }
}
</script>

<style scoped>
#functionlist{
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
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
.title:after{
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

.card {
  width: 100px;
  height: 100px;
  background-color: rgba(211,145,171,0.7);
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  border: 3px deeppink solid;
  /*border-bottom-right-radius: 20px;*/
}

.card::after{
  content: '';
  border: 2px black solid;
  top: 5px;
  left: 5px;
  position: relative;
  height: 20px;
  width: 20px;
  background: #fff;
  border-radius: 15px;
}

#list > div {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
