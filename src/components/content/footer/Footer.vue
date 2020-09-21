<template>
  <div class="box">
    <div id="footer">
      <div class="log">
        <img src="~@/assets/img/logo.png" width="120" height="120" alt="">

      </div>
      <div class="introduce1">
        <div class="test">
          <div class="title1">重庆工程学院南泉校区</div>
          <div class="title2">地&#12288址:重庆工程学院巴南区白鹤村</div>
          <div class="title2">电&#12288话:58581234</div>
        </div>
      </div>
      <div class="introduce2">
        <div class="test">
          <div class="title1">重庆工程学院双桥校区</div>
          <div class="title2">地&#12288址:重庆工程学院大足区通桥镇</div>
          <div class="title2">电&#12288话:58581234</div>
        </div>
      </div>
      <div class="QR">
        <img src="~@/assets/img/QRcode.png" width="120" height="120" alt="">
      </div>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .box{
    /*position:fixed;
    left:0px;
    bottom:0px;
    width:100%;
    z-index:9999;*/
    margin-bottom: -120px;
  }
  .title1{
    color: white;
  }
  .title2{
    color: #6a90c4;
    margin-top: -10px;
  }
  .test {
    width: 18.75rem  /* 300/16 */ /* 150/16 */;
    height: 4.6875rem  /* 75/16 */  /* 100/16 */;
    line-height: 3.125rem  /* 50/16 */ /* 100/16 */;
  }
  .log,.introduce1,.introduce2,.QR{
    float: left;
  }
  .log{
    position:absolute;
    left:15%;
    top:30%;
    transform:translate(-50%,-50%);
    line-height: 12.5rem  /* 200/16 */;
    height: 7.5rem  /* 120/16 */;
    width: 7.5rem  /* 150/16 */;
    /*background: url("~@/assets/img/index.css");*/
  }
  .introduce1{
    position:absolute;
    left:38%;
    top:50%;
    transform:translate(-50%,-50%);
    color: white;
  /*  border: 1px red solid;*/
    line-height: 12.5rem  /* 200/16 */;
    height: 8.125rem  /* 160/16 */  /* 180/16 */  /* 150/16 */;
    width: 18.75rem  /* 300/16 */;
  }
  .introduce2{
    position:absolute;
    left:64%;
    top:50%;
    transform:translate(-50%,-50%);
    line-height: 12.5rem  /* 200/16 */;
    height: 8.125rem  /* 130/16 */  /* 180/16 */  /* 150/16 */;
    width: 20%;
  }

  .QR{
    position:absolute;
    left:85%;
    top:30%;
    transform:translate(-50%,-50%);
    line-height: 12.5rem  /* 200/16 */;
    height: 8.125rem  /* 130/16 */  /* 180/16 */  /* 150/16 */;
    width: 7.5rem  /* 150/16 */;
  }
  #footer {
    margin-top: 6.25rem /* 100/16 */ /* 250/16 */ /* 300/16 */;
    /*background-color: #0a3f89;*/
    background-color: rgba(10,63,137,1);
    height: 10.3125rem  /* 165/16 */  /* 170/16 */ /* 150/16 */;
    width: 100%;
    position: relative;
  }
</style>
