<template>
  <div class="container">
    <div class="container-pokemon">

    
    <img v-show="!showPokemon"
      :src="imagenFuente"
      alt="No se visualiza el Pokemon" class="ocultar"  />

      <img v-show="showPokemon"
      :src="imagenFuente"
      alt="No se visualiza el Pokemon"  />
    
     </div>

  </div>
</template>

<script>
export default {
     props:{

     pokemonID:{
          type: Number,
          required: true,
        
     },
     showPokemon:{
          type: Boolean,
          default: true,
     }
   },
     computed: {
          
          imagenFuente(){
              /*
               return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonID+".svg";
                */
                 return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`;
               
               
          }
               
             
              
     }
};
</script>

<style scoped>
.ocultar{
     filter: brightness(0);
}
img{
     width: 200px;
     height: 200px;
     position: absolute; /* Los elementos ddejan de respetar a las reglas de mi contenedor quitarle del espaciuo que ociupa en el DISPLAY.*/
     right: 40%;
     border: 5px solid white;
     padding: 5px;
     

}
.container-pokemon{
     height: 300px;
}
</style>