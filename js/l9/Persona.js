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
