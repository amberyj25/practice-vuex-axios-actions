<template>
  <div>
  <ul>
    <li v-for="item in products">
      <img :src="item.imageUrl" alt="img" style="width:250px; height:auto;">
    </li>

  </ul>
  </div>
</template>

<script>
export default{
  name:"App",
  mounted(){
    this.$store.dispatch("a");
  },
  computed:{
    products(){
      return this.$store.state.rooms;
    }
  },
}
</script>

<style>
ul{
  list-style:none;
  display: flex;
}
</style>