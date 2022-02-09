class Orden{
    static contadorOrdenes = 0;
    
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados=0;
    }

    static get MAX_PRODUCTOS(){
        return 5;
    }

    agregarProducto(producto){
            if(this._productos.length < Orden.MAX_PRODUCTOS)
            {
                this._productos.push(producto);
            }else {
                console.log('No se puede agregar mas prudcots')
            }
    }

     calcularTotal() {
        let total = 0;
        for(let myProd of this._productos)
        {
             total = myProd._precio + total;
       }
       return total;
    }

    mostarOrden(){
        let prod='';
        for(let myProd of this._productos)
        {
             prod +='\n{'+ myProd.toString() + '} ';
       }
       console.log(`Orden ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${prod} `)

    }

    toString(){
        return this._idOrden + ' ' + this.Productos + this.Orden.calcularTotal();
    }


}

class Producto{
    static contadorProductos=0;
    constructor(nombre,precio)
    {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
        
    }

    Producto(){}

    get Nombre(){
        return this._nombre;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    get IdProducto(){
        return this._idProducto;
    }

    get Precio(){
        return this._precio;
    }

    set Precio(precio){
        this._precio = precio;
    }

    toString(){
            return `idProducto : ${this._idProducto}, Nombre : ${this._nombre}, Precio: $${this._precio}` ;
    }




}
let product1 = new Producto('Pantalon',200);
let product2 = new Producto('Camisa',400);
let product3 = new Producto('Cinturon',400);

console.log(product1.toString());
console.log(product2.toString());

let orden1 = new Orden();

orden1.agregarProducto(product1);
orden1.agregarProducto(product2);

orden1.mostarOrden();


let orden2 = new Orden();

orden2.agregarProducto(product1);
orden2.agregarProducto(product2);
orden2.agregarProducto(product3);
orden2.mostarOrden();
