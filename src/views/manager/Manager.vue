<template>
<div>
<header>
  <NavBar></NavBar>
</header>
  <BreadcrumbNav></BreadcrumbNav>
  <BreadcrumbNav></BreadcrumbNav>
  <BreadcrumbNav></BreadcrumbNav>
  <div>
    <MessCard></MessCard>
  </div>
  <footer>
    <Footer></Footer>
  </footer>
</div>

</template>

<script>
  import NavBar from "components/content/nav/NavBar";
  import Footer from "components/content/footer/Footer";
  import BreadcrumbNav from "components/common/breadcrumbnav/BreadcrumbNav";
  import MessCard from "components/content/messcard/MessCard";
  export default {
    name: "Manager",
    components:{
      NavBar,
      Footer,
      BreadcrumbNav,
      MessCard
    },
    data() {
      return {

      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },

    }
  }

</script>


<style  scoped="scoped">
header{
  background-color: #0a408a;
  margin-bottom: 20px;
}
</style>
