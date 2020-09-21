<template>
  <div id="functionlist">
    <div class="title">
      <p>服务</p>
    </div>
    <div id="list" class="row container">
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
      <div class="col-lg-3 col-md-6 col-sm-6 col-6">
        <p class="card"></p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-6">
        <p class="card"></p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "FunctionList"
}
</script>

<style scoped>
#functionlist{
  padding: 10px;
  background-color: #ffffff;
}

.title {
  width: 100%;
  height: 30px;
}
.title p{
  width: 100px;
  line-height: 20px;
  text-align: left;
  border-bottom: 1px #e63752 solid;

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
