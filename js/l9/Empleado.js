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
        return `${super()}
        ${this._idEmpleado} 
        ${this._sueldo}`;
    }

}