<template>
  <div class="box">
    <div id="footer">
      <div class="log">
        <img src="~@/assets/img/logo.png" width="150" height="150" alt="">

      </div>
      <div class="introduce1"></div>
      <div class="introduce2"></div>
      <div class="QR">
        <img src="~@/assets/img/logo.png" width="150" height="150" alt="">
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
  }

  .log,.introduce1,.introduce2,.QR{
    float: left;
  }
  .log{
    position:absolute;
    left:17%;
    top:50%;
    transform:translate(-50%,-50%);
    line-height: 12.5rem  /* 200/16 */;
    height: 11.25rem  /* 180/16 */  /* 150/16 */;
    width: 11.25rem  /* 150/16 */;
    /*background: url("~@/assets/img/index.css");*/
  }
  .introduce1{
    position:absolute;
    left:39%;
    top:50%;
    transform:translate(-50%,-50%);
    background: red;
    line-height: 12.5rem  /* 200/16 */;
    height: 11.25rem  /* 180/16 */  /* 150/16 */;
    width: 22%;
  }
  .introduce2{
    position:absolute;
    left:65%;
    top:50%;
    transform:translate(-50%,-50%);
    background: red;
    line-height: 12.5rem  /* 200/16 */;
    height: 11.25rem  /* 180/16 */  /* 150/16 */;
    width: 22%;
  }
  .QR{
    position:absolute;
    left:90%;
    top:50%;
    transform:translate(-50%,-50%);
    line-height: 12.5rem  /* 200/16 */;
    height: 11.25rem  /* 180/16 */  /* 150/16 */;
    width: 11.25rem  /* 150/16 */;
  }
  #footer {
    margin-top: 6.25rem /* 100/16 */ /* 250/16 */ /* 300/16 */;
    /*background-color: #0a3f89;*/
    background-color: rgba(10,63,137,1);
    height: 12.5rem /* 200/16 */;
    width: 100%;
    position: relative;
  }
</style>
