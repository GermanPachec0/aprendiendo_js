let condicion = true;

if(condicion){
    console.log("es verdader");
}
else
{
    console.log("Es falso");
}

let numero=3;
if(numero == 1){
    console.log("Numero 1");
}else if(numero ==2){
    console.log("Numero dos");
}else if(numero==3){
    console.log("Numero 3");
}else if(numero ==4){
    console.log("Numero 4");
}
let mes =12;
let estacion;

if(mes==1 || mes==2 || mes == 12){
    estacion ="Invierno";
}
else if(mes == 3 || mes==4 || mes == 5){
    estacion = "primavera";
}else if(mes == 6 || mes==7 || mes == 8){
    estacion = "Verano";
}else if(mes == 9 || mes==10 || mes == 11){
    estacion = "Otoño";
}else{
    estacion ="valor incorrecto";
}
console.log(estacion);

let num = 5;
let numeroTexto= "Valor desconocido";

switch(num){
    case 1:
        numeroTexto = "Número uno";
        break;

case 2:
    numeroTexto ="Numero Dos";
    break;
case 3:
    numeroTexto="Numero tres";
case 4:
    numeroTexto ="Numero cuatro";
    break;
    default:
        numeroTexto ="Caso no enconrado";
        break;       
}
console.log(numeroTexto);
