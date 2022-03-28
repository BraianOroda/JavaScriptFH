class Persona {

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre, codigo, frase ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman   = new Persona('Tony Stark', 'Ironman', 'yo soy Ironman');
console.log( spiderman );
console.log( ironman );

spiderman.quienSoy();
ironman.quienSoy();

spiderman.miFrase();
ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';

console.log( spiderman.getComidaFavorita )