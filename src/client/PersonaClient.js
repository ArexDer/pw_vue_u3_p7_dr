//Un CLIENTE POR CADA SERVICIO.....

/*
Me permite ser el cliente para consumir la API
*/

import axios from 'axios';

// http://localhost:8080/matriculaAPI/v1.1/personas/2

//con el fetch puedo hacerlo  pero el axios es completo.

const obtenerPorId = async (id) => {

     const data = await axios.get(`http://localhost:8080/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);
    console.log(data);
    return data;
}


//METODO FACHADA
 export const obtenerPorIdFachada = async (id) => {
    return await obtenerPorId(id);
}   
