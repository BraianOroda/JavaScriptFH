let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videojuegos });

console.log( videojuegos[0] );

let arregloCosas = [
    true,
    1234,
    'Braian',
    1 + 2,
    function() {},
    () => {},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]],
];

// console.log( arregloCosas );
console.log( arregloCosas[7][4][1] );