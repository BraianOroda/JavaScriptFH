let juegos = ['Zelda', 'Mario', 'Metroid', 'Resident evil'];

console.log('Largo: ', juegos.length); // Cuantos elementos hay dentro del arreglo

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ];

console.log(primero);
console.log(ultimo);

juegos.forEach( (elemento, inidice, arr) => {
    console.log({ elemento, inidice, arr });
});

let nuevalongintd = juegos.push('Resident Evil 7'); // Agrega un uevo elemento al final del array
console.log( {nuevalongintd, juegos} );

nuevalongintd = juegos.unshift('Bloodborne');   // Agrega un nuevo elemento al inicio del array
console.log({ nuevalongintd, juegos });

let juegoBorrado = juegos.pop(); // Remuenve el ultimo elemento del arreglo y regresa un string de ese elemento
console.log({ juegoBorrado, juegos });

let juegoposicion = 1;

// elimina elemntos 
// => recibe una posicion incial y luego como 2do parametro recibe cuantas posiciones mas debe avanzar
let juegosBorrados = juegos.splice( juegoposicion, 2); 
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex });