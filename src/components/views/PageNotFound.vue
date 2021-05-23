<template>
  <div class="notFound-container">
    <h2 class="label-404">404</h2>
    <p>No pudimos encontrar la pagina solicitada :/</p>
    <b-button
      variant="outline-primary"
      @click.prevent="handleBack()"
      class="backButton"
      ><b-icon-arrow-left /> volver</b-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    handleBack: function() {
      this.$router.go(-1);
    },
  },
};
</script>

<style escoped>
.label-404 {
  font-size: 40px;
}
.notFound-container {
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.backButton {
  font-weight: 600;
  cursor: pointer;
}
</style>
