<template>
    <div class="form-container">
        <h2>Formulario de Persona</h2>
        <form class="formulario">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre"  placeholder="Ingrese su nombre">
            </div>
            <div class="form-group">
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" placeholder="Ingrese su apellido">
            </div>
            <div class="form-group">
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fechaNacimiento" >
            </div>
            <div class="form-group">
                <button type="submit" class="btn-submit">Guardar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Se montó en la página el componente FormularioComponente.vue');
    }
}
</script>

<style scoped>
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

.form-group {
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

.btn-submit {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn-submit:hover {
    background: #0056b3;
}
</style>
