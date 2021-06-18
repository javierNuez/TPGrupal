<template>
  <div class="container-login">
    <form @submit.prevent="onSubmit" class="formContainer">
      <img src="../../assets/LogoBanco.jpg" width="272" />
      <h3>Iniciar sesión</h3>
      <div class="inputContainer">
        <label for="input-dni">Ingrese su identificador</label>
        <b-form-input id="input-dni" type="number" placeholder="12345678" />
      </div>
      <b-button variant="outline-primary" value="Ingresar" type="submit"
        >Ingresar</b-button
      >
    </form>
  </div>
</template>

<script>
import { saveLSItemData } from "../../utils/localStorageHelper";
export default {
  name: "Login",
  data: function () {
    return {};
  },
  beforeCreate() {
    this.$store.dispatch("setResetState");
  },
  methods: {
    onSubmit: function () {
      const inputValue = document.getElementById("input-dni").value;
      saveLSItemData("userId", inputValue);
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style escoped>
.login-title {
  color: white;
  font-size: 50px;
  width: 20rem;
  text-align: initial;
}
.container-login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(35, 139, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.formContainer {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  min-height: 28rem;
  min-width: 20rem;
  justify-content: space-between;
}
.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
