<template>
   <div class="container" v-if="pokemonObjeto!=null">

  
    <h2>Quien ese POKEMON?</h2>

    <PokemonImagen ref="miHijo" :pokemonID="pokemonObjeto.id" :show-pokemon="pokemonShow"/>
    <!--
    <PokemonOpciones v-on:seleccionado="validarRespuesta" :pokemons="pokemonArr" />
    -->
    <PokemonOpciones @seleccionado="validarRespuesta($event)" :pokemons="pokemonArr" v-show="componenteMostrar" />


</div>
  
</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue'
import PokemonOpciones from '../components/PokemonOpciones.vue'

/*import consultarPokemonsFachada from "../client/PokemonClient.js"*/
import {consultarPokemonsFachada, obtenerAleatorioFachada} from "../client/PokemonClient.js"

export default {
    name: 'PaginaPokemon',
    components: {
        PokemonImagen,
        PokemonOpciones
    },
    data() {
        return {
            pokemonArr: [],
            pokemonObjeto:null,
            pokemonShow:false,
            componenteMostrar:true,
            contador:0
        }
    },
    //Se ejecuta cunado el componente se monta en la página
    mounted() {

        console.log('Se monto en la PÁGINA EL COMPONETE PokemonPage.vue')
        this.cargarJuego();
    
    },
    //Es una fase antes de crearse el COMPONENTETE
    beforeCreate(){
        console.log('BEFORECREATE:Se va a CREAR el componente PokemonPage.vue')
    },
    //Es una fase despues de crearse el COMPONENTETE
    created(){
        console.log('CREATED:Se CREO el componente PokemonPage.vue')
    },
    //Es una fase antes de montarse el COMPONENTETE
    beforeMount(){
        console.log('BEFOREMOUNT:Se va a MONTAR el componente PokemonPage.vue')
    },
    //Es una fase cunado un componente sufre un cambio, se ejecuta.
    updated(){
        console.log('UPDATED:Se ACTUALIZO el componente PokemonPage.vue')
    },
   
    beforeUpdate(){
        console.log('BEFOREUPDATE:Antes de que se ACTUALIZE el componente PokemonPage.vue')
    },
    
    methods: {
        async cargarJuego(){
            const arregloPokemons = await consultarPokemonsFachada();
           
            console.log(arregloPokemons);
            this.pokemonArr = arregloPokemons;

            const valorAleatorio =obtenerAleatorioFachada(0,3);
            console.log("Este es el ALEATORIO: "+valorAleatorio);
            const pokemonCorrecto =this.pokemonArr[valorAleatorio];
            this.pokemonObjeto = pokemonCorrecto;

        },

        validarRespuesta(id){
            console.log("Llego el evento al PADRE: "+ id);
            console.log(id);
            const idSeleccionado=id.idObj;

            if(idSeleccionado===this.pokemonObjeto.id){
                this.contador++;
                console.log("Respuesta Correcta de POKEMON ");

                this.pokemonShow=id.valor2; //DESPUES

                //this.pokemonShow=true;  ANTESSS
                this.componenteMostrar=false;

            }else{
                console.log("ERROR... ");
                this.pokemonShow=false;

            }
            const valorHijo = this.$refs.miHijo.pokemonID;
            console.log("Valor del Hijo: ");
            console.log(valorHijo);
            console.log(valorHijo.propiedadPrueba);
            this.$refs.miHijo.mostrarPrueba();


            //---
           
        }

            
    },

}
</script>

<style scoped>
h2{
    color: white;
    text-align: center;
}
.container{
   
    background: #f44336;
}



</style>