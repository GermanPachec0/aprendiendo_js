
class Cliente extends Persona {
    static IdClienteCounter=0;
    constructor(fechaRegistro){
        super(idPersona,nombre,apellido,edad);
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
            return `${super()}
             ${this._idCliente}
             ${this._fechaRegistro}`;
        }
}