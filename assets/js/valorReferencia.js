let a = 10;
let b = a;

// Cuando se trabaja proprimitovos esto datos se envian por valor
// Todos los primitivos se pasan por valor y todos los objetos son pasados por referencia


console.log({ a, b});

let juan = { nombre: 'Juan' };
let ana = {...juan}; // este operador (expred) => ... rompe la referencia
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiarNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter );

console.log({ peter, tony });

const frutas = ['Manzana', 'Pera', 'Piña'];
// rompe la referencia
console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

// splice crea un nuevo arreglo con los elementoss que le especificacion en caso de no especificar 
// este simplemente crea un nuevo arreglo
console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');
otrasFrutas2.push('Mango');
console.table({ frutas, otrasFrutas });