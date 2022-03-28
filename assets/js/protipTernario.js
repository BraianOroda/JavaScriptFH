const elmayor = ( a, b) => {
    return ( a > b ) ? a : b;
}

// Booleano
const tieneMenbresia = ( miembro ) => {
    return (miembro) ? '2 Dolares' : '10 Dolares';
}

console.log( elmayor( 15, 10 ) );
console.log( tieneMenbresia(true) );

const amigo = false;
const amigosArrrr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki'
];

console.log( amigosArrrr );

const nota = 82.5;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 80 ? 'B'  :
              nota >= 70 ? 'C'  : 'F' ;

console.log({ nota, grado });