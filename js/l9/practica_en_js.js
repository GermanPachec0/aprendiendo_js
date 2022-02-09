class Persona
{
    static contadorPersonas = 0;
    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
     
    
    }

    get getIdPersona() {
        return this._idPersona;
    }
    set setIdPersona(idPersona){
        this._idPersona = idPersona;
    }

    get getApellido() {
        return this.apellido;
    }

    set setApellido(apellido){
        this._apellido = apellido;
    }

    get getNombre(){
        return this._nombre;
    }

    set setNombre(nombre){
        this._nombre = nombre;
    }

    get getEdad(){
        return this._edad;
    }

    set Edad(edad){
        this._edad = edad;
    }


    toString(){

        return `${this._idPersona} 
        ${this._apellido} 
        ${this._nombre} 
        ${this._edad}`;  
    }

}

class Empleado extends Persona {
    static idCounter  = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++Empleado.idCounter;
        this._sueldo = sueldo; 
    }

    get getIdEmpleado(){
        return this._idEmpleado;
    }
    
    get getSueldo(){
        this._sueldo;
    }

    set setSueldo(sueldo){
            this._sueldo = sueldo;
    }

    toString(){
      return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }

}


class Cliente extends Persona {
    static IdClienteCounter=0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.IdClienteCounter;
        }

        get getIdCliente(){
            return this._idCliente;
        }

        get getFechaRegistro(){
            return this._fechaRegistro;
        }

        set setFechaRegistro(fecha){
            this._fechaRegistro = fecha;
        }

        toString(){
            return `${super.toString()}
             ${this._idCliente}
             ${this._fechaRegistro}`;
        }
}



let p1 = new Persona('juan','perez',10);
console.log(p1.toString());

let p2 = new Persona('Jose','Ramirez',10);
console.log(p2.toString());

let e1 = new Empleado('Karla','Gomez','25',5000);
console.log(e1.toString());
let e2 = new Empleado('German','Pacheco','22',30000);
console.log(e2.toString());

let cliente1 = new Cliente('Miguel','Cervantes',30,new Date());
console.log(cliente1.toString());
