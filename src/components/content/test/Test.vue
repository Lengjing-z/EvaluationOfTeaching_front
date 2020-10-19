<template>

</template>

<script>
export default {
  name: "Test"
}
</script>

<style scoped>
.main{
  margin: 0 auto;
}
* {margin: 0; padding: 0;}
html, body
{width: 100%;height: 100%;overflow:auto;font-size:12px;margin:0;padding:0; font-family:"微软雅黑";background:#fff; text-align:center;
}
ul,li{ list-style:none;}
a{ text-decoration:none; color:#666;}
a:hover{text-decoration:none;}
.hover{background:#0f6c8d;}

i{font-style:normal;}


.iconfont{font-family:iconfont!important;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
.top_left i{width:11.25rem  /* 180/16 */; height:5.625rem  /* 90/16 */; display:block; float:left; background: url("~@/assets/img/logo.png") no-repeat center;}
.top_left h1{line-height:6.25rem  /* 100/16 */; display:block; float:left; font-size:1.75rem  /* 28/16 */; }
.top_right a{padding:0 0.625rem  /* 10/16 */; color:#000; font-size:0.875rem  /* 14/16 */; display:block; float:left;}
.top_right a span{padding-right:0.3125rem  /* 5/16 */; display:block; float:left;}
.top_right a i{color:#f00; padding: 0 0.3125rem  /* 5/16 */; display:block; float:left;}
.top_right a b{display:block; float:left;}
.top_right a img{margin-top:1.875rem  /* 30/16 */; display:block; float:left;}
.nav_nr ul{display:block; margin:0;}
.nav_nr ul li{height:3.125rem  /* 50/16 */;  display:block; float:left;}
.nav_nr ul li a{ color:#fff; display:block; height:3.125rem  /* 50/16 */; float:left; padding:0 1.25rem  /* 20/16 */;}
.nav_nr ul li a:hover{text-decoration:none;}
.nav_nr i{color:#fff; display:block; float:left;}


.easyPieChart canvas { position: absolute;top: 0;left: 0;}
.foot{width:100%; height:3.125rem  /* 50/16 */; clear:both;}
.test_main{width:75rem  /* 1200/16 */;  margin:0.9375rem  /* 15/16 */ auto 0;}
.nr_left{width:56.25rem  /* 900/16 */; height:100%; float:left;}

.test{ width:100%;  border:0.0625rem  /* 1/16 */ solid #e4e4e4; text-align:left; float:left;}
.test_title{width:56.25rem  /* 900/16 */; height:2.8125rem  /* 45/16 */; line-height:2.8125rem  /* 45/16 */; background-color:#f7f7f7;position:fixed; bottom:0; z-index:1000;}
.test_title p{padding:0 1.25rem  /* 20/16 */; display:block; float:left;}
.test_time{color:#f00; line-height:2.8125rem  /* 45/16 */;}
.test_time i{font-size:1.25rem  /* 20/16 */; height:2.8125rem  /* 45/16 */; line-height:2.5rem  /* 40/16 */; display:block; float:left}
.test_time b{font-size:1rem  /* 16/16 */; height:2.8125rem  /* 45/16 */; display:block; float:left; margin-left:0.625rem  /* 10/16 */;}
.test_dtk {line-height:2.8125rem  /* 45/16 */;}
.test_dtk i{font-size:1.375rem  /* 22/16 */; height:2.8125rem  /* 45/16 */; line-height:2.8125rem  /* 45/16 */; display:block; float:left; color:#389fc3;}
.test_dtk span{font-size:0.875rem  /* 14/16 */; height:2.8125rem  /* 45/16 */; display:block; float:left; margin-left:0.625rem  /* 10/16 */;}
.test_title font{width:5rem  /* 80/16 */; height:2.8125rem  /* 45/16 */;  display:block; float:right; text-align:center; }
.test_title font input{background:#389fc3; border:none; display:block; width:5rem  /* 80/16 */; height:2.8125rem  /* 45/16 */; cursor:pointer; color:#fff; font-size:1rem  /* 16/16 */; font-weight:bold;}
.test_title font input:active{background:#79aef0;}

.test_content{width:100%; height:auto; margin-top:0.9375rem  /* 15/16 */;}
.test_content_title{width:100%; height:3.125rem  /* 50/16 */; line-height:3.125rem  /* 50/16 */; background:#f7f7f7; text-align:center;}
.test_content_title h2{padding:0 1.875rem  /* 30/16 */; font-size:1rem  /* 16/16 */; font-weight:normal; display:block; float:left}
.test_content_title p{padding:0 0.625rem  /* 10/16 */; height:2.5rem  /* 40/16 */; line-height:2.5rem  /* 40/16 */; background:#389fc3; color:#fff; border-radius:1.875rem  /* 30/16 */; display:block; float:left; margin-top:0.3125rem  /* 5/16 */;}

.test_content_nr{width:100%; border-top:0.1875rem  /* 3/16 */ solid #efefef;}
.test_content_nr>ul>li{width:100%;  border-bottom:0.3125rem  /* 5/16 */ solid #efefef; padding-top:0.625rem  /* 10/16 */;}
.test_content_nr_tt{width:85%; height:auto; line-height:2rem  /* 32/16 */; margin:0 auto; border-bottom:0.0625rem  /* 1/16 */ solid #e4e4e4;}
.test_content_nr_tt i{width:1.5625rem  /* 25/16 */; height:1.5625rem  /* 25/16 */; line-height:1.5625rem  /* 25/16 */; text-align:center; display:block; float:left; background:#5d9cec; border-radius:50%; margin-left:-3.125rem  /* -50/16 */; color:#fff; margin-top:0.5rem  /* 8/16 */; font-size:1rem  /* 16/16 */;}
.test_content_nr_tt span{padding:0 0.5rem  /* 8/16 */;}
.test_content_nr_tt font{font-size:0.875rem  /* 14/16 */}
.test_content_nr_tt b{display:block; float:right; margin-right:-3.125rem  /* -50/16 */; color:#f48c27; font-size:1.25rem  /* 20/16 */;}

.test_content_nr_main{width:85%; margin:0 auto; padding:0.625rem  /* 10/16 */ 0;height:auto;}

.option{line-height:2rem  /* 32/16 */; display:block; background:#fff;color:#666;}
.option:hover{background:#e4e4e4;}
.option input{width:1.25rem  /* 20/16 */; height:1.25rem  /* 20/16 */; display:block; float:left; margin:0.625rem  /* 10/16 */ 0.625rem  /* 10/16 */ 0 0;}
.option label{height:auto;display:block;}

.multiple dd input{width:1.25rem  /* 20/16 */; height:1.25rem  /* 20/16 */; display:block; float:left; margin:0.625rem  /* 10/16 */ 0.625rem  /* 10/16 */ 0 0;}
.multiple dd label{width:45.3125rem  /* 725/16 */; height:2.5rem  /* 40/16 */; display:block; float:left;}
.test_click a{color:#fff;}

.rt_nr1_title h1{width:8.125rem  /* 130/16 */; height:2.8125rem  /* 45/16 */; background:#389fc3; text-align:center; font-size:0.875rem  /* 14/16 */; display:block; float:left; color:#fff;}
.rt_nr1_title h1 i{padding:0 0.3125rem  /* 5/16 */; font-size:0.875rem  /* 14/16 */; font-weight:normal;}
.rt_nr1_title p{width:8.8125rem  /* 141/16 */; height:2.6875rem  /* 43/16 */;  padding-right:0.5rem  /* 8/16 */; border:0.0625rem  /* 1/16 */ solid #e4e4e4; border-left:0; display:block; float:right;}
.rt_nr1_title p i{margin-left:0.625rem  /* 10/16 */;}


.rt_content_tt h2{width:9.375rem  /* 150/16 */; font-size:0.875rem  /* 14/16 */; display:inline-block;}
.rt_content_tt p{width:6.25rem  /* 100/16 */; display:inline-block;}
.answerSheet ul{padding:0.625rem  /* 10/16 */; text-align:left;}
.answerSheet li{ display:inline-block;margin-bottom:0.3125rem  /* 5/16 */; height:1.875rem  /* 30/16 */; width:1.875rem  /* 30/16 */; line-height:1.875rem  /* 30/16 */; text-align:center; border:0.0625rem  /* 1/16 */ solid #e4e4e4;}
.answerSheet li a{display:block;}
.answerSheet li:hover{color:#389fc3;border-color: #389fc3;}
.rt_more_tt h2{width:9.375rem  /* 150/16 */; font-size:0.875rem  /* 14/16 */; display:inline-block;}
.rt_more_tt p{width:6.25rem  /* 100/16 */; display:inline-block;}
.rt_more_nr ul{padding:0.625rem  /* 10/16 */; text-align:left;}
.rt_more_nr ul li{ display:inline-block; margin:0.3125rem  /* 5/16 */; height:1.875rem  /* 30/16 */; width:1.875rem  /* 30/16 */; line-height:1.875rem  /* 30/16 */; text-align:center; border:0.0625rem  /* 1/16 */ solid #e4e4e4;}


</style>
