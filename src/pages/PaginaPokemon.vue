<template>
    <div class="container" v-if="pokemonObjeto != null">
      <h2>¿Quién es ese POKÉMON?</h2>
  
      <div class="intentos">
        <h3>Intentos: {{ intentos }}</h3>
        <h3 v-if="porcentaje !== null">Porcentaje de acierto: {{ porcentaje }}%</h3>
      </div>
  
      <div class="pokeImagen">
        <PokemonImagen ref="miHijo" :pokemonID="pokemonObjeto.id" :show-pokemon="pokemonMostrar" />
        <PokemonOpciones @seleccionado="validarRespuesta($event)" :pokemons="pokemonArr" v-show="mostrarOpciones" />
      </div>
  
      <div v-if="mostrarBotonReiniciar" class="reiniciar">
        <button @click="reiniciarJuego">Reiniciar Juego</button>
      </div>
    </div>
  </template>
  
  <script>
  import PokemonImagen from '../components/PokemonImagen.vue';
  import PokemonOpciones from '../components/PokemonOpciones.vue';
  import { consultarPokemonsFachada, obtenerAleatorioFachada } from '../client/PokemonClient.js';
  
  export default {
    name: 'PaginaPokemon',
    components: {
      PokemonImagen,
      PokemonOpciones
    },
    data() {
      return {
        pokemonArr: [],
        pokemonObjeto: null,
        pokemonMostrar: false,
        mostrarOpciones: true,
        intentos: 0,
        porcentaje: null,
        mostrarBotonReiniciar: false
      };
    },
    mounted() {
      console.log('Se montó en la página el componente PokemonPage.vue');
      this.cargarJuego();
    },
    methods: {
      async cargarJuego() {
        const arregloPokemons = await consultarPokemonsFachada();
  
        console.log(arregloPokemons);
        this.pokemonArr = arregloPokemons;
  
        const valorAleatorio = obtenerAleatorioFachada(0, 3);
        console.log('Este es el ALEATORIO: ' + valorAleatorio);
        const pokemonCorrecto = this.pokemonArr[valorAleatorio];
        this.pokemonObjeto = pokemonCorrecto;
  
        // Restablecer estados para un nuevo juego
        this.pokemonMostrar = false;
        this.mostrarOpciones = true;
        this.intentos = 0;
        this.porcentaje = null;
        this.mostrarBotonReiniciar = false;
      },
  
      validarRespuesta(id) {
        console.log('Llegó el evento al PADRE: ' + id);
        console.log(id);
        const idSeleccionado = id.idObj;
  
        // Incrementar intentos
        this.intentos++;
  
        if (idSeleccionado === this.pokemonObjeto.id) {
          // Calcular el porcentaje basado en el número de intentos
          if (this.intentos === 1) {
            this.porcentaje = 100;
          } else if (this.intentos === 2) {
            this.porcentaje = 50;
          } else if (this.intentos === 3) {
            this.porcentaje = 35;
          } else {
            this.porcentaje = 0;
          }
  
          console.log(`Porcentaje: ${this.porcentaje}%`);
  
          // Mostrar el botón de reinicio
          this.mostrarBotonReiniciar = true;
          console.log('¡Respuesta correcta!');
  
          this.pokemonMostrar = id.valor2;
          this.mostrarOpciones = false;
        } else {
          console.log('Error...');
          this.pokemonMostrar = false;
        }
  
        const valorHijo = this.$refs.miHijo.pokemonID;
        console.log('Valor del Hijo: ', valorHijo);
        this.$refs.miHijo.mostrarPrueba();
      },
  
      reiniciarJuego() {
        this.cargarJuego();
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: white;
    text-align: center;
  }
  
  .container {
    background: #f44336;
    padding: 20px;
    border-radius: 10px;
  }
  
  .intentos {
    margin-bottom: 20px;
    color: white;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
  
  .reiniciar {
    text-align: center;
    margin-top: 20px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  