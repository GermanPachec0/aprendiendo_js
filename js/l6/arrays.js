//let autos = new Array();

const autos  = ['hola','hoola','hoooolaaa'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0 ; i < autos.length  ; i++){
    console.log(autos[0]);

}
autos[1]= 'MercedesBenz';
console.log(autos[1]);

autos.push('ASD00');
console.log(autos);

console.log(autos.length);

console.log(Array.isArray(autos));
console.log(autos instanceof Array);

