<template>
  <div>
    <h2 class="fuente">Movimientos:</h2>
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
.fuente{
  Color:#2182a0;
}
</style>