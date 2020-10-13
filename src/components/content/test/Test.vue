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
.top_left i{width:180px; height:90px; display:block; float:left; background: url("~@/assets/img/logo.png") no-repeat center;}
.top_left h1{line-height:100px; display:block; float:left; font-size:28px; }
.top_right a{padding:0 10px; color:#000; font-size:14px; display:block; float:left;}
.top_right a span{padding-right:5px; display:block; float:left;}
.top_right a i{color:#f00; padding: 0 5px; display:block; float:left;}
.top_right a b{display:block; float:left;}
.top_right a img{margin-top:30px; display:block; float:left;}
.nav_nr ul{display:block; margin:0;}
.nav_nr ul li{height:50px;  display:block; float:left;}
.nav_nr ul li a{ color:#fff; display:block; height:50px; float:left; padding:0 20px;}
.nav_nr ul li a:hover{text-decoration:none;}
.nav_nr i{color:#fff; display:block; float:left;}


.easyPieChart canvas { position: absolute;top: 0;left: 0;}
.foot{width:100%; height:50px; clear:both;}
.test_main{width:1200px;  margin:15px auto 0;}
.nr_left{width:900px; height:100%; float:left;}

.test{ width:100%;  border:1px solid #e4e4e4; text-align:left; float:left;}
.test_title{width:900px; height:45px; line-height:45px; background-color:#f7f7f7;position:fixed; bottom:0; z-index:1000;}
.test_title p{padding:0 20px; display:block; float:left;}
.test_time{color:#f00; line-height:45px;}
.test_time i{font-size:20px; height:45px; line-height:40px; display:block; float:left}
.test_time b{font-size:16px; height:45px; display:block; float:left; margin-left:10px;}
.test_dtk {line-height:45px;}
.test_dtk i{font-size:22px; height:45px; line-height:45px; display:block; float:left; color:#389fc3;}
.test_dtk span{font-size:14px; height:45px; display:block; float:left; margin-left:10px;}
.test_title font{width:80px; height:45px;  display:block; float:right; text-align:center; }
.test_title font input{background:#389fc3; border:none; display:block; width:80px; height:45px; cursor:pointer; color:#fff; font-size:16px; font-weight:bold;}
.test_title font input:active{background:#79aef0;}

.test_content{width:100%; height:auto; margin-top:15px;}
.test_content_title{width:100%; height:50px; line-height:50px; background:#f7f7f7; text-align:center;}
.test_content_title h2{padding:0 30px; font-size:16px; font-weight:normal; display:block; float:left}
.test_content_title p{padding:0 10px; height:40px; line-height:40px; background:#389fc3; color:#fff; border-radius:30px; display:block; float:left; margin-top:5px;}

.test_content_nr{width:100%; border-top:3px solid #efefef;}
.test_content_nr>ul>li{width:100%;  border-bottom:5px solid #efefef; padding-top:10px;}
.test_content_nr_tt{width:85%; height:auto; line-height:32px; margin:0 auto; border-bottom:1px solid #e4e4e4;}
.test_content_nr_tt i{width:25px; height:25px; line-height:25px; text-align:center; display:block; float:left; background:#5d9cec; border-radius:50%; margin-left:-50px; color:#fff; margin-top:8px; font-size:16px;}
.test_content_nr_tt span{padding:0 8px;}
.test_content_nr_tt font{font-size:14px}
.test_content_nr_tt b{display:block; float:right; margin-right:-50px; color:#f48c27; font-size:20px;}

.test_content_nr_main{width:85%; margin:0 auto; padding:10px 0;height:auto;}

.option{line-height:32px; display:block; background:#fff;color:#666;}
.option:hover{background:#e4e4e4;}
.option input{width:20px; height:20px; display:block; float:left; margin:10px 10px 0 0;}
.option label{height:auto;display:block;}

.multiple dd input{width:20px; height:20px; display:block; float:left; margin:10px 10px 0 0;}
.multiple dd label{width:725px; height:40px; display:block; float:left;}
.test_click a{color:#fff;}

.rt_nr1_title h1{width:130px; height:45px; background:#389fc3; text-align:center; font-size:14px; display:block; float:left; color:#fff;}
.rt_nr1_title h1 i{padding:0 5px; font-size:14px; font-weight:normal;}
.rt_nr1_title p{width:141px; height:43px;  padding-right:8px; border:1px solid #e4e4e4; border-left:0; display:block; float:right;}
.rt_nr1_title p i{margin-left:10px;}


.rt_content_tt h2{width:150px; font-size:14px; display:inline-block;}
.rt_content_tt p{width:100px; display:inline-block;}
.answerSheet ul{padding:10px; text-align:left;}
.answerSheet li{ display:inline-block;margin-bottom:5px; height:30px; width:30px; line-height:30px; text-align:center; border:1px solid #e4e4e4;}
.answerSheet li a{display:block;}
.answerSheet li:hover{color:#389fc3;border-color: #389fc3;}
.rt_more_tt h2{width:150px; font-size:14px; display:inline-block;}
.rt_more_tt p{width:100px; display:inline-block;}
.rt_more_nr ul{padding:10px; text-align:left;}
.rt_more_nr ul li{ display:inline-block; margin:5px; height:30px; width:30px; line-height:30px; text-align:center; border:1px solid #e4e4e4;}


</style>
