
function obtenerAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerArregloNumerico=() =>{
    const arreglo = [];
    for (let i = 0; i < 4; i++) {
       // arreglo.push(obtenerAleatorio(1, 600));
       arreglo[i]=obtenerAleatorio(1, 600);
    }
    return arreglo;
}

const obtenerArregloPokemons= (arreglo)=>{

    const arregloPokemons=[];
    const obj1={
        nombre: "",
        imagen: ""
    };
    const obj2={
        nombre: "",
        imagen: ""
    };
    const obj3={
        nombre: "",
        imagen: ""
    };
    const obj4={
        nombre: "",
        imagen: ""
    };
    arregloPokemons[0]=obj1;
    arregloPokemons[1]=obj2;
    arregloPokemons[2]=obj3;
    arregloPokemons[3]=obj4;
/*
    for(let i=0; i<arreglo.length; i++){
        const data = fetch(`https://pokeapi.co/api/v2/pokemon/${arreglo[i]}`)
        .then(response => response.json())
        console.log(data);
    }
        */

   
}