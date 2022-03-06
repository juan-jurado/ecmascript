//Array.prototype.flat(nivel_de_profundidad)

// Vamos a crear un arreglo a partir de una matrix
let array = [1,2,3, [1,2,3, [1,2,3]]];

// devuelve una matriz con una sub matrix aplanada
console.log(array.flat());

//Ahora con un tamaño de 2
console.log(array.flat(2));

//------------------------------------------------------------------------------

// Array.prototype.flatMap()
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value *2]));

//------------------------------------------------------------------------------

// String.prototype.trimStart() | String.prototype.trimEnd()

let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

//------------------------------------------------------------------------------

let hello = 'hello world          ';
console.log(hello);
console.log(hello.trimEnd());

//------------------------------------------------------------------------------

// try/catch: