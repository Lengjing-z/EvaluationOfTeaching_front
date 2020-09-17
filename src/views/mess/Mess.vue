<template>
    <div>
      <Nav></Nav>
      <table class="msg" border="1">
        <tr>
          <th>11</th>
          <th>111</th>
          <th>111</th>
        </tr>
        <tr>
          <th>22</th>
          <th>222</th>
          <th>2222</th>
        </tr>
        <tr>
          <th>33</th>
          <th>333</th>
          <th>3333</th>
        </tr>
        <tr>
          <th>44</th>
          <th>444</th>
          <th>4444</th>
        </tr>
      </table>
    </div>
</template>

<script>
  import Nav from "../../components/content/nav/Nav";
  export default {
    name: "Mess",
    components:{
      Nav,
    }
  }
</script>

<style scoped>
  table {
    width: 70%;
    margin: 0.625rem  /* 10/16 */ auto;
  }
  table th{
    width: 33.3%;
  }
</style>
