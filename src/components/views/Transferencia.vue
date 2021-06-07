<template >
  <div class="container-transferencia">
      <h1>Transferencia</h1>
 <form  id="app"  @submit="realizarTransferencia()" method="post">

  <p>
    <label for="destinatario">Destinatario:</label>
    <input
      id="destinatario"
      v-model="destinatario"
      type="number"
      name="destinatario"
    >
  </p>

 

  <p>
    <label for="tipoCuenta">Tipo de cuenta:</label>
    <select
      id="cuenta"
      v-model="cuenta"
      name="cuenta"
    >
      <option>Cuenta Corriente</option>
      <option>Cuenta de Ahorro</option>
      
    </select>
  </p>

 <p>
     <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">$</span>
       
        <input
         id="mont"
         v-model="mont"
         type="number"
         name="mont"
         min="0">
     </div>

  <p>
    <input  type="submit" value="Realizar transferencia"
    >
  </p>

</form>
  </div>
</template>


<script>
import SimuladorVue from '../commons/Simulador.vue';
export default {




  methods:{
    realizarTransferencia: function (e) {
      if (this.monto) {
        
        return true;
      }

     
      e.preventDefault();
    }
  }
}


</script>

<style>
.container-transferencia{
     font-family: Helvetica, Arial, sans-serif;
     background-color: rgb(35, 139, 250);
    width: 450px;
    margin-top: 45px;
     margin-right: 5%;
     margin-left: 30%;
     color: rgba(255, 255, 255, 0.66);
     border-radius: 5px;
   
  
}
.input-group-prepend{
    margin-right: 5%;

}
    
 



</style>

  
  

