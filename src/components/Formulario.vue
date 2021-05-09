<template>
  <div>
     <div class="container">

    <br>
    <div class="banner">
    </div>

    <div id="app">

        <!--<h1 v-text="`${getDocumentosUnicos.size} Internos`"> </h1>!--><h1>Internos & Mails</h1>

        <input type="text" class="form-control form-control-lg" v-model="criterioDeBusqueda"

            placeholder="Ingrese su busqueda..">

        <br>

 

        <h5 v-text="`${personasFiltradas.length} resultados`"> </h5>

 

        <div class="card-deck">

            <div class="row">

                <div class="col" v-for="persona in personasFiltradas" :key="persona.interno">

                    <div class="card mb-3">

                        <div>

                            <div class="card-body">

                                <h4 class="card-title">{{persona.sector}}</h4>

                                <h5 class="card-title">{{getNombreCompleto(persona)}}</h5>

                                <p class="card-text">Interno: <b>{{persona.interno}}</b></p>

                                <a :href="`mailto:${persona.correo}`">{{persona.correo}}</a>

                                <p class="card-text">{{persona.sucursal}}</p>

 

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

 

    </div>

 

</div>

</div>


<script>
export default {

}

 data() {
     return {

            criterioDeBusqueda: '',

            personas:

                [   { sector: 'Conmutador',nombre: 'Rosa', apellido: 'Mc. Phillips', interno: 0, correo: '', sucursal: 'BSAS' } ]

         };

        };

        computed: {

           

            personasFiltradas() {

                let resultado = []

                resultado = this.personas.filter((persona) => {

                   

                    let registroConcatenado = `${persona.sector}${persona.nombre}${persona.apellido}${persona.interno}${persona.correo}${persona.sucursal}`

                   

                    return registroConcatenado.toLowerCase().includes(this.criterioDeBusqueda.toLowerCase())

                });

                return resultado

 

            };

 

            getDocumentosUnicos() {

                return new Set(this.personas.map(p => p.interno))

                

            }

        };

        methods: {

            getNombreCompleto(persona) {

                return `${persona.nombre} ${persona.apellido}`

            };

            

            quitarPersonasRepetidas() {

                const setDeIntUnicos = this.getDocumentosUnicos

 

                let resultado = this.personas.filter(persona => {

                    if (setDeIntUnicos.has(persona.interno)) {

                        setDeIntUnicos.delete(persona.interno)

                        return true

                    }

                    else {

                        return false

                    }

                })

                this.personas = resultado

            }

 

        };
</script>

