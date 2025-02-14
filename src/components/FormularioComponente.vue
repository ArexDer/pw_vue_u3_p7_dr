<template>

    <div>
        <h2>Dentro de Formulario Persona</h2>
        <button @click="buscarPersona">Buscar Persona</button>
    </div>
  
</template>


<script>
import { obtenerPorIdFachada  } from '../client/PersonaClient.js';
export default {
    mounted() {
        console.log('Se montó en la página el componente FormularioComponente.vue');
    },

}
</script>

methods: {
    async buscarPersona(){
        const persona = await obtenerPorIdFachada(1);
        console.log(persona);
    }
},

<style>

</style>