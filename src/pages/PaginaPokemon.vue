<template>
   <div class="container" v-if="pokemonObjeto!=null">

  
    <h2>Adivina el Pokemon de la Imagen</h2>
    <PokemonImagen :pokemonID="pokemonObjeto.id" :show-pokemon="pokemonShow"/>
    <PokemonOpciones :pokemons="pokemonArr"/>
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
            pokemonShow:false
        }
    },

    mounted() {
        console.log('Se monto en la PÁGINA EL COMPONETE PokemonPage.vue')
        this.cargarJuego();
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