<template>

<div class="form-container">
        <h2>Formulario de Persona</h2>
        <div class="formulario">

            <!--Ingreso de el ID.-->
            
            
            <div class="formulario-atributos">

                <label for="id">ID:</label>
            <input type="text" id="id" v-model="persona.id" placeholder="Ingrese su ID">

                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" v-model="persona.nombre"  placeholder="Ingrese su nombre">
            </div>
            <div class="formulario-atributos">
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" v-model="persona.apellido" placeholder="Ingrese su apellido">
            </div>
            <div class="formulario-atributos">
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="datetime" v-model="persona.fechaNacimiento" id="fechaNacimiento" >
            </div>
            <div class="formulario-atributos">
                <button  class="btn-C" @click="buscarPersona">Consultar</button>
                <br>
                <button  class="btn-C" @click="guardarPersona">Guardar</button>
            </div>
        </div>
    </div>
</template>


<script>
import { obtenerPorIdFachada, insertarFachada, actualizarFachada, actualizarParcialFachada, eliminarFachada  } from '../client/PersonaClient.js';
export default {
    data() {
        return {
            persona: {
                id: '',
                nombre: '',
                apellido: '',
                fechaNacimiento: ''
            }
        };
    },
    methods:{
       async buscarPersona(){
            console.log('Mando al mounted AQUI');

            const persona = await obtenerPorIdFachada(this.persona.id);
            console.log('Persona:', persona);
            //this.persona.id= persona.id;
            this.persona.nombre= persona.nombre;
            this.persona.apellido= persona.apellido;
            this.persona.fechaNacimiento= persona.fechaNacimiento;
            
            
        },
        async guardarPersona(){
            const bodyPersona={
                //ESTE NOMBRE nombre: SACO DE LA ESTRUCTURA DE EL JSON
                nombre: this.persona.nombre,
                apellido: this.persona.apellido,
                fechaNacimiento: this.persona.fechaNacimiento

            }
            await insertarFachada(bodyPersona);

           

           
            
            
        },
            


    },
    
    mounted() {
        console.log('Se montó en la página antes de LLAMAR AL API');

        obtenerPorIdFachada(thi.persona.id);
    },
    

}
</script>


<style>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    padding: 20px;
    max-width: 500px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
}
h2 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 15px;
}
.formulario {
    width: 100%;
    text-align: left;
}

.formulario-atributos {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
}
input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

input:focus {
    border-color: #007bff;
    outline: none;
}
.btn-C {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}
.btn-C:hover {
    background: #0056b3;
}


</style>