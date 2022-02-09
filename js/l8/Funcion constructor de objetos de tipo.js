//Funcion constructor de objetos de tipo persona

function Persona(nombre,apellido,email)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){

        return this.nombre + ' '  + this.apellido;
    }
}


let padre = new Persona ('Juan','Perez','jperez@gmail.co');
console.log(padre);

let madre = new Persona('Laura','Quintero','lquinteros@gmail.com');

padre.nombre = "carlos";

console.log(padre.nombreCompleto());
console.log(madre);

let miOjbeto2= {};
let miCadena1  = new String('holhola');
let micadena2 =  'hola';
let miNumero2 =1;


let miNumero = new Number(1);
let miNumero2= 1;

let miBoolean = new Boolean(false);
let miBoolean = false;

let miArreglo1 = new Array ();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};



