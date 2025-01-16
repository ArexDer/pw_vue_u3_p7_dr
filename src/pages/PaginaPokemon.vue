<template>
   
    <h2>Adivina el Pokemon de la IMAGEN</h2>
    <PokemonImagen/>
    <PokemonOpciones/>
  
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

<style>

</style>