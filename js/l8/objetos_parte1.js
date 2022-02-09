let x =10;
console.log(x.length);
let persona ={
    nombre : 'Juan',
    apellido : 'perez',
    email : 'jperez@gmail.com',
    edad : 20,
    nombreCompleto : function(){
        return this.apellido + " " + this.apellido;
    },
    myFunction : function(){
        return this.edad;
    }
}


console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());


let persona2 = new Object();
persona.nombre = 'Carlos';
persona.telefono = "345532";
persona.direccion  = "Venus 13";

console.log(persona2.telefono);

console.log(persona['email']);

//buscar el nombre de las propiedades y mostrar el valor de la propiedad;,,,
for(nombrePropiedad in persona)
{
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

persona.calle = 'corrientes';

console.log(persona);

delete persona.calle;
console.log(persona);

//concatenar valores de cada propiedad;

console.log(persona.nombre + ', '+ persona.apellido);

for(propiedad in persona){
    console.log(persona[propiedad]);
}

let personaString = JSON.stringify(persona);
console.log(personaString);
