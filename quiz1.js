let a = {};
let b = a;
console.log(a === b);

//respuesta: true

console.log(1 + '1' - 1);

//respuesta: 10
//La respuesta es true porque en JavaScript, los objetos se asignan y comparan por referencia, no por valor.

console.log(typeof NaN);
//respuesta: number
//La respuesta es number porque en JavaScript, NaN (Not-a-Number) es un valor especial que representa un resultado numérico inválido.


let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);

//respuesta: [1,2,3,4]
//La respuesta es [1, 2, 3, 4] porque en JavaScript, los arrays son objetos y, al asignarlos a otra variable, ambas comparten la misma referencia en memoria

let x = 10;
(function() {
 console.log(x);
  let x = 20;
})();
// respuesta: Referenceerror
//La respuesta es un ReferenceError porque dentro de la función hay un problema de "temporal dead zone" (TDZ) debido al uso de let.

let x = 5;
let y = x++;
console.log(y);
//respuesta: 5
//La respuesta es 5 porque el operador x++ es un operador de post-incremento, lo que significa que devuelve el valor actual de x antes de incrementarlo.

console.log(0 == '0');
//respuesta: true
//La respuesta es true porque en JavaScript, el operador == realiza una comparación de igualdad no estricta y coerciona los tipos de datos cuando son diferentes.

console.log(typeof null);
//respuesta: object
//La respuesta es "object" debido a un comportamiento histórico en JavaScript.

console.log([] == false);
//respuesta: true
//La respuesta es true porque, al usar el operador de igualdad no estricta ==, JavaScript realiza una conversión de tipos.

const arr = [1, 2, 3];
const [x, y] = arr;
console.log(y);
//respuesta: 2
//La respuesta es 2 debido a la desestructuración de arrays en JavaScript.

