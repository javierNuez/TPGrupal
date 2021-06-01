<template>
  <div>
    <h1>Pagos</h1>
    <h1>VUEX {{ $store.getters.getCounter }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    increment: function() {
      this.$store.dispatch("increment");
    },
    decrement: function() {
      this.$store.dispatch("decrement");
    },
  },
};
</script>
