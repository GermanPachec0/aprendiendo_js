
function myFunction(a,b){
    console.log(arguments.length);
    return (a+b);
}

let rtdo = myFunction(2,3);
console.log(rtdo);


let suma = function(a,b){return a+b};

rtdo = suma(1,2);
console.log(rtdo);

(function(a,b){
    console.log('Ejecutando la funcion: ' + (a+b));

})(3,4);

var miFuncionTexto = myFunction.toString();
console.log(miFuncionTexto);

const sumarFuncionTipoFlecha = (a,b) => a+b;
rtdo = sumarFuncionTipoFlecha(3,5);
console.log(rtdo);

let sumar = function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b
};



let resultado = sumarTodo(5,4,2,13,9);
console.log(resultado);
function sumarTodo(){
    let suma = 0;
    for(let i= 0 ;arguments.length; i++)
    {
        suma +=arguments[i]; 
    return suma;
}
}
//tipo primitivo
let x = 10;

function cambiarValor(a){
    a=20;
   
}
//paso por valor
cambiarValor(x);
console.log(x);

//paso por referencia
const persona = {
    nombre : 'Juan',
    apellido : 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre="Carlos";
    p1.apellido="Perezitos";
}
//paso por referencia
cambiarValorObjeto(persona);
console.log(persona);


