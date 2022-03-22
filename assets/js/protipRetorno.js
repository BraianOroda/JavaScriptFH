 // ... es un parametro tipo rest que al enviarle varios datos este crear un array con ellos
 const imprimitArgumenteo2 = (edad, ...args) => { 
    //console.log({ edad, args });
    return args;
 }

// const argumentos = imprimitArgumenteo2( 10, true, false, 'Fernando', 'Hola' );
// console.log({ argumentos });

const [ casado, vivo, nombre, saludos ] = imprimitArgumenteo2( 10, true, false, 'Fernando', 'hola'); 
console.log({ casado, vivo, nombre, saludos });
// La edad no se va a devolver debido a que solo se esta devolviendo el array args

// Los () serian el cuerpo de la funcion
const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

// Esto es posible debido a que conozco el nombre del atributo que necesito
const { apellido: nuevoApellido } = crearPersona( 'Fernando', 'Herrera' );
console.log({ nuevoApellido });

let bruce = {
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

// NO ES BUENA PRACTICAR DEFINIR UNA FUNCION ABAJO DE CODIGO

// desestruturacion del objeto que voy a recibir + agregarle un valor por defecto a un campo en caso de 
// que ese dato no este definido en el objeto
const imprimepropiedades = ({ nombre, codeName, vivo, edad = 0, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimepropiedades( bruce );