//clases

class Persona{
        static contadorObjetosPersona = 0; //atributo de clase
        static get MAX_OBJ(){
            return 5;
        }
        email = 'valor default email'; // atributo de objeto
      
        constructor(nombre,apellido){

         
            if(Persona.contadorObjetosPersona < Persona.MAX_OBJ){
                this.idPersona == ++Persona.contadorObjetosPersona;
    
            }else{
                console.log('Se superó el maximo de objetos permitidos');
            }
    
    

            this._nombre = nombre;
            this._apellido = apellido;
    

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
            return this.idPersona+ ' ' +  this.nombre + ' ' + this.apellido;
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

let p2 = new Persona('Santiago','Romero');

let p3 = new Persona('Santiago','Romero');

let p4 = new Persona('Santiago','Romero');

let p5 = new Persona('Santiago','Romero');

let p6 = new Persona('Santiago','Romero');

console.log(Persona.contadorObjetosPersona);

console.log(p6.toString());