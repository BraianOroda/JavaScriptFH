let personaje = {
    nombre: 'Bruce Wayne',
    condeName: 'Batman',
    vivo: true,
    edad: 35,
    coord: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: [
        'VS Superman',
        'Tradicional',
    ],
    'ultima-pelicula': 'BATMAN',
};

console.log( personaje );
console.log('Nombre:', personaje.nombre);

console.log('Nombre:', personaje['nombre']);

console.log('Edad:', personaje.edad);

console.log('Coords:', personaje.coord.lng);

console.log('Nro de trajes:', personaje.trajes.length);

console.log('Ultimo traje:', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo:', personaje[x] ); /// Es el mismo escenario de la linea 19 

console.log('Ultima pelicula:', personaje['ultima-pelicula']);

// Mas detalles:

delete personaje.edad;
console.log( personaje );

personaje.casado = true; // Agrega un atributo al perosnaje

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

Object.freeze( personaje ); 
// Congela las asignaciones del objeto haacinedolo inmutable pero no congela los valores de los objetos
// conteniedo dentro el objeto persobaje

personaje.dinero = 'Infinito';      // No es posible añadir un nuevo atributo
personaje.trajes.push('Blindado');  // Es posible añadir un item a uno de sus atributos y/o modificar su valor

console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const values      = Object.values( personaje );     
console.log({ personaje, values });