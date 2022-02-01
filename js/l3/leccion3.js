let a =3, b=2,c="3";

let z= (a==c); //revisa el valor sin importar el tipo

z = a===c; //revisa los valores pero tambien los tipos

let x=9;
if(x%2==0){
    console.log("Par");

}
else{
    console.log("Es un numero impar");
}

let edad = 20, adulto=18;
if(edad <= adulto){
    console.log("Es un adulto");

}else{
    console.log("Es menor de edad");
}

let s=5,valMin=0,valMax=10;

let v= false,  d=false;

if(d||v){
    console.log("HOLA");
}
else{
    console.log("CHAU");
}

let rtdo=(3>2) ? "Verdadero" : "falso";
console.log(rtdo);

let nro = 9;
resultado = (nro%2==0) ? "Numero Par" : "Numero impar";
console.log(resultado);

let miNumero ="18x";
//console.log(typeof miNumero);

let ed = Number(miNumero);

console.log(ed);

if(isNaN(ed))
{
    console.log("It´s not a number");

}
else{
    if(ed >= 18 ){

    console.log("You can vote");
}
    else{
    console.log("You can´t vote");
}

    }

console.log(typeof edad);



r = (ed>=18) ? "Puede Votar" : "No puede votar";
console.log(r);

let xe=5;
let ye=10;
let ze= ++xe + ye--;
console.log(ze);

let re = 4+5*6;
