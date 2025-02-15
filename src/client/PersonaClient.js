//Un CLIENTE POR CADA SERVICIO.....

/*
Me permite ser el cliente para consumir la API
*/

import axios from 'axios';

// http://localhost:8080/matriculaAPI/v1.1/personas/2

//con el fetch puedo hacerlo  pero el axios es completo.

const obtenerPorId = async (id) => {

     const data = await axios.get(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);
    console.log(data);
    return data;
}


const insertar = async (persona) => {
    const data = await axios.post(`http://localhost:8081/matriculaAPI/v1.1/personas`, persona)
    .then(r => r.data);
    console.log(data);
    return data;
}

const actualizar = async (id, persona) => {
    const data = await axios.put(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, persona)
    .then(r => r.data);
    console.log(data);
    return data;
}

const actualizarParcial = async (id, persona) => {
    const data = await axios.patch(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, persona)
    .then(r => r.data);
    console.log(data);
    return data;
}

const eliminar = async (id) => {
    const data = await axios.delete(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`)
    .then(r => r.data);
    console.log(data);
    return data;
}
/*
-------------------------------------------------------------
-------------------------------------------------------------
*/


//METODO FACHADA
 export const obtenerPorIdFachada = async (id) => {
    console.log("Fachada....");
    return await obtenerPorId(id);
}  


//METODO FACHADA PARA INSERTAR
export const insertarFachada = async (persona) => {
    console.log("Insertar OBJETO/PERSONA/BODY");
    return await insertar(persona);
}

//METODO FACHADA PARA ACTUALIZAR
export const actualizarFachada = async (id, persona) => {
    console.log("Actualizar OBJETO/PERSONA/BODY");
    return await actualizar(id, persona);
}

//METODO FACHADA PARA ACTUALIZAR PARCIAL
export const actualizarParcialFachada = async (id, persona) => {
    console.log("Actualizar Parcial OBJETO/PERSONA/BODY");
    return await actualizarParcial(id, persona);
}

//METODO ELIMINAR   
export const eliminarFachada = async (id) => {
    console.log("Eliminar OBJETO/PERSONA/BODY");
    return await eliminar(id);
}