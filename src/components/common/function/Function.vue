<template>
   <div class="col-lg-3 col-md-4 col-sm-6 col-6 card" @click="jumpViews(url)">
     <svg class="icon" aria-hidden="true">
       <use :xlink:href="icon"></use>
     </svg>
     <!--  老师对老师进行评教-->
     <span>{{title}}</span>
   </div>
</template>

<script>
export default {
  name: "Function",
  data(){
    return{
    }
  },
  props:['title','icon','url','powers'],
  created() {
  },
  methods:{
    jumpViews(url){
      this.$router.push("/"+url)
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  font-size: 16px;
}

.card:hover {
  box-shadow: 0 0 5px #a4a4a4;
  z-index: 2;
}

.card svg {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

.card:hover svg {
  width: 70px;
  height: 70px;
  transition: 0.4s;
}

.card:hover span {
  font-size: 18px;
}
</style>
