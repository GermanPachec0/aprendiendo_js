let persona1 = {
    nombre : 'Juan',
    apellido : 'Perez',
    nombreCompleto : function(titulo,tel){
        return titulo+': '+this.nombre + ' '+ this.apellido + ', '+tel;
    }
}

let persona2 = {
    nombre : 'Juan',
    apellido : 'Perez',
}

console.log(persona1.nombreCompleto('lic','444333'));


let arreglo = ['ing','444333']
console.log(persona1.nombreCompleto.apply(persona2,arreglo));