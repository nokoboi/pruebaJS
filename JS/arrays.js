// Declaración de Arrays
let frutas = ['Manzana', 'Pera', 'Naranja'];
// console.log(frutas)
// console.table(frutas)

// // Acceder al indice de un array
// console.log(frutas[1]);
// console.log(frutas[3]);

// // Cambiar contenido de arrays
// frutas[0]='Sandía';
// console.log(frutas[0]);

// // Añadir un elemento a un array
// frutas[3] = 'Melocotón';
// console.log(frutas)

// // Añadir con función
// frutas.push('Fresa')
// console.log(frutas)

// // Conocer longitud de un array
// console.log(frutas.length);

// Bucles

// Bucle for
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);    
// }

// // bucles foreach
// frutas.forEach(fruta=>{
//     console.log(fruta)
// })

// frutas.forEach((fruta, index) =>{
//     console.log(`${fruta} indice: ${index}`);

// })

// Método random
// let aleatorio = Math.random() * 10;
// aleatorio = Math.floor(aleatorio)
// console.log(aleatorio)

// let numeros = [34, 56, 89, 23, 12, 58, 74, 33, 60, 5]
// console.log(numeros[aleatorio])

let frases = [
    'Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento',
    'El objetivo no está siempre destinado a ser alcanzado, a menudo sirve simplemente como una meta a la cual que apuntar',
    'No hay que ir para atrás ni para darse impulso',
    'Solo imagina lo precioso que puede ser arriesgarse y que todo salga bien',
    'La vida es un 10% lo que te sucede y un 90% de cómo reaccionas a ello'
]

function frase(){
    let randomIndex = Math.random() * frases.length;
    randomIndex = Math.floor(randomIndex);

    const prediccion = frases[randomIndex];
    document.getElementById('ponerFrase').textContent = prediccion;

}