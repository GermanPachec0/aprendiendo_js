//clases

class Persona{
        static contadorObjetosPersona = 0; //atributo de clase
        email = 'valor default email'; // atributo de objeto



        constructor(nombre,apellido){
            this._nombre = nombre;
            this._apellido = apellido;
            this.idPersona = Persona.contadorObjetosPersona++;

        }
        get nombre(){
            return this._nombre;

        }
        
        set nombre(nombre){
            this._nombre = nombre;
        }
        get apellido(){
            return this._apellido;
        }

        set apellido(apellido){
            this._apellido = this.apellido;
        }

        nombreCompleto(){
            return this.nombre + ' ' + this.apellido;
        }

        toString(){
            //polimorfismo(multiples formas en tiempo de ejecucion)
            // se ejecuta el metodo depdendiento si es de tipo padre o hijo
            return this.nombreCompleto();
        }

        static saludar(){
            console.log('holahola');
        }

        static saludar2(p){
                console.log(p.nombre+ ' ' + p.apellido);
        }
        

}

class Empleado extends Persona{
    constructor (nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //Redefinicion
    nombreCompleto(){
        return super.nombreCompleto()+', '+ this.departamento;
    }
}

let p1 = new Persona('jj','pp');

p1.nombre  = 'Juan Carlos';//Set nombre automatico
console.log(p1.nombre); 
//p1.saludar();// no se puede usar un metodo statica desde un objeto

let e1 = new Empleado('María','Jimenez','Sistemas');
console.log(e1);
console.log(e1.nombre);



console.log(e1.nombreCompleto());
console.log(e1.toString());

Persona.saludar();
Persona.saludar2(e1);

console.log(p1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

console.log(p1.email);
console.log(Persona.email);
