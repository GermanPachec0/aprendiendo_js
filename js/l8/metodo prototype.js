//metodo prototype
function Persona(nombre,apellido,email){
    this.nombre= nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel  = '44332211';

let padre  = new Persona ('Juan','Pepeito','j@gmail.com');
padre.tel = '11223344';
console.log(padre.tel);

let madre = new Persona ('Laura','Qinteros','lq@gmail.com');
console.log(madre);

