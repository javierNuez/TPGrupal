<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data: function(){
    return {}
    },
    props:{
      items: Array
    }
}
</script>

<style>

</style>