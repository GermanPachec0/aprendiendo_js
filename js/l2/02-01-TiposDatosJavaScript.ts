
/**/
var nombre = "carlos";
console.log(nombre);

var numero =1000;
console.log(numero);

//tipo de dato objeto
var objeto= {
    nombre : "Juan",
    apellido : "Perez",
    telefono: "303030"
}

console.log(objeto);
console.log(typeof objeto);

//boolean
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function

function miFuncion(){}
    console.log(typeof miFuncion);
 
    //Tipo de dato Symbol;
    var simbolo = Symbol("mi simbolo");
    console.log(simbolo);
    console.log(typeof simbolo);

//Tipo de clase es una function

class Persona{
    constructor(nombre, apellido){
        nombre = nombre;
        apellido = apellido;
    }
}

console.log(Persona);

//undefined
var x;
console.log(x);
//null 
var y = null;
console.log(null);
//ARRAYS

var autos = ['BMV','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

var z='';
console.log(z);
console.log(typeof z);
