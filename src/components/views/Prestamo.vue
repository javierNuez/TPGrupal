<template>
  <div>
      <h1>Historial de prestamos</h1>
      <Formulario :items=getAllItems()></Formulario>
  </div>
</template>

<script>
 import Formulario from '../commons/Formulario'
export default {
  data: function(){
    const itemsData = [
       { fecha: '10-3-2020', Movimiento: 'Dickerson', Importe: 'Macdonald' },
       { fecha: '20-3-2020', Movimiento: 'Dickerson', Importe: 'Macdonald' },
       { fecha: '30-3-2020', Movimiento: 'Dickerson', Importe: 'Macdonald' },
       { fecha: '40-3-2020', Movimiento: 'Dickerson', Importe: 'Macdonald' },
       { fecha: '50-3-2020', Movimiento: 'Dickerson', Importe: 'Macdonald' }
     ]
    return {
      items: itemsData
    }
  },
 components:{
    Formulario
  },
  methods: {
    getAllItems: function () {
      return this.items
    }
  }
}
</script>

<style>

</style>