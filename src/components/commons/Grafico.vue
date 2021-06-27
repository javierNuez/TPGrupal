<template>
    <div id="grafico">
        <canvas id="myChart"></canvas>
    </div>
    
</template>
<style>
#grafico{
    padding: 20px;
    margin-left: 30px;
    width: 350px;
    height: 350px;    
}

</style>
<script>

import Chart from "../../assets/chart.js"
export default {
    
    mounted(){
        

        var ctx= document.getElementById("myChart").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"pie",
            data:{

                labels: [ "torta1","torta2","torta3"],

                datasets:[{      
                        data:[2,20,30],
                        backgroundColor:[
                            'rgb(66, 134, 244,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)'
                        ]
                }]
            }/*,
            options:{
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }*/
        });
        document.setElementById(myChart);
    },
}
</script>