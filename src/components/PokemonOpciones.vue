<template>
    <div class="options-container">
     
      <ul>
          <li @click="seleccionado(pokemon.id)"  v-for="pokemon in pokemons" :key="pokemon.id" >{{ pokemon.nombre }}</li>
       
      </ul>
   
    </div>
  </template>
   
  <script>
  export default {
      props:{
        pokemons:{
              type:Array,
              required:true,
   
          },
      },
      methods:{
          seleccionado(id){
              console.log("CLICK en Seleccionado");
              console.log(id);
              const constobjetoEnviado={
                idObj:id,
                valor2: true,
                valor3:" fff"
              }
              //Emitir un evento, para que el padre sepa que pokemon fue seleccionado
              //le pongo un nombre 'seleccionado' y le paso el id como segundo argumento
              //2do parametro, variable, quemado ,id pokemon
                this.$emit('seleccionado',constobjetoEnviado);
                //Lo mando y lo recibo en el padre con un $event  HIJO a  PADRE
          }
      }
   
   
   
   
  };
  </script>
   
  <style>
  ul{
      list-style-type: none;
  }
  li{
   
      background: white;
      width: 250px;
      border: solid 1px ;
      border-radius: 15px;
      margin-top:8px;
      cursor:pointer;
     
     
  }
  li:hover{
      background: rgba(0,0,0,0.05);
  }
  .options-container{
      display: flex;
      justify-content: center;
      }
  </style>