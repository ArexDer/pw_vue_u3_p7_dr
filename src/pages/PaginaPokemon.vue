<template>
   <div class="container">

  
    <h2>Adivina el Pokemon de la Imagen</h2>
    <PokemonImagen :pokemonID="241" :show-pokemon="true"/>
    <PokemonOpciones/>
</div>
  
</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue'
import PokemonOpciones from '../components/PokemonOpciones.vue'
export default {
    name: 'PaginaPokemon',
    components: {
        PokemonImagen,
        PokemonOpciones
    }

}
</script>

<style scoped>
h2{
    color: white;
    text-align: center;
}
.container{
  background: #c1121f;
}


</style>