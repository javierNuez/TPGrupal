<template>

    <div>
        <h2 class="fuente">Tarjeta de Crédito:</h2>
        <h4 class="fuente">Cierre tarjeta: {{cierreTarjeta}}</h4>
        <h4 class="fuente">Monto disponible $ {{montoDisponible}}</h4>
        <h4 class="fuente">Gastos: $ {{gastosTarjeta}}</h4>
        
        <div id="miTarjeta">

          <div><img class="chip" src="../../assets/sim.png"></div>
           <img class="visa" src="../../assets/visa.jpg"> 
          
          <div class="row">
            <div class="col-xs-6 text-right"><h5 id="nombreTit">{{nombreTitular}}</h5></div>
            <div class="col-xs-6 text-center"><h6 id="vencTit">Ven: {{vencimientoTarjeta}}</h6></div>
            <div class="col-xs-12 text-center"><h4 class="numTarjeta">{{numeroTarjeta}}</h4></div>
          </div>
          
        </div>
        
    </div>
 
</template>
<script>

export default {
  
  data() {
    return {
      nombreTitular: "Juan J. Perez",
      vencimientoTarjeta: "01/29",
      cierreTarjeta: "05/07/2021",
      montoDisponible: 144000,
      gastosTarjeta: 3212,
      numeroTarjeta: "2312 3213 2132",
    };
  },
  
};

</script>
<style>
#miTarjeta{
  background-image: url("../../assets/tj2.jpg");
  margin:auto;
  margin-top: 20px;
  /*background-color: rgb(10, 33, 56);*/
  height: 230px;
  width: 400px;
  border-radius: 20px;
}
.chip{
  margin-top: 50px;
  float: left;
  margin-left: 20px;
  height: 25%;
  width: 18%;
  border-radius: 11px;
}
.visa{
  float: right;
  margin:15px;
  height: 15%;
  width: 14%;
}
#nombreTit{
  color: rgb(196, 225, 250);
  margin-top: 129px;
  text-align:left;
  text-shadow: 1px 1px rgb(10, 33, 56);
}
#vencTit{
  color: rgb(196, 225, 250);
  margin-top: 100px;
  text-align: right;
  text-shadow: 1px 1px rgb(10, 33, 56);
}
.numTarjeta{
  color: rgb(196, 225, 250);
  text-shadow: 1px 1px rgb(10, 33, 56);

}
.fuente{
  Color:#0d7fca;
}
</style>
