//metodo_call_por_argumentos;
let persona1 = {
    nombre : 'juan',
    apellido : 'perez',
    nombreCompleto : function(titulo,tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}
let persona2 = {
    nombre : 'Carlos',
    apellido : 'Lara',
 
}
console.log(persona1.nombreCompleto.call(persona2,'Ing','3456333'));    