// Objetos en JS
// let persona = {
//     nombre: 'Pepa',
//     edad: 20,
//     ciudad: 'Granada',
// };

// console.log(persona)
// const alumnos = [
//     {
//         nombre: 'Fran',
//         edad: 18,
//         ciudad: 'Granada'
//     },
//     {
//         nombre: 'Kevin',
//         edad:30,
//         ciudad: 'Granada'
//     },
//     {
//         nombre: 'Antonio',
//         edad: 20,
//         ciudad: 'Maracena'
//     },

//     {
//         nombre: 'Simón',
//         edad: 23,
//         ciudad: 'Jaén'
//     },

//     {
//         nombre: 'María',
//         edad: 40,
//         ciudad: 'Almería'
//     }
// ]

// //console.log(alumnos)
// alumnos.forEach(alumno=>{
//     console.log(`${alumno.nombre} tiene: ${alumno.edad} años`)
// })

const frases = [
    {
        frase: 'Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento',
        autor: 'Henry Ford.'
    },
    {
        frase: 'El objetivo no está siempre destinado a ser alcanzado, a menudo sirve simplemente como una meta a la cual que apuntar',
        autor: 'Bruce Lee'
    },
    {
        frase: 'No hay que ir para atrás ni para darse impulso',
        autor: 'Lao Tsé'
    },
    {
        frase: 'Solo imagina lo precioso que puede ser arriesgarse y que todo salga bien',
        autor: 'Mario Benedetti.'
    },
    {
        frase: 'La vida es un 10% lo que te sucede y un 90% de cómo reaccionas a ello',
        autor: 'Charles R. Swindoll.'
    }
]
let indexActual = -1;
function frase() {
    // Hacemos un numero aleatorio, lo pasamos a entero con floor y le decimos que sea con la longitud del array
    let randomIndex = Math.floor(Math.random() * frases.length)
    console.log(randomIndex)

    if (randomIndex === indexActual) {
        randomIndex = (randomIndex + 1) % frases.length;
    }
    
    document.getElementById("ponerFrase").textContent = frases[randomIndex].frase
    document.getElementById("autor").textContent = frases[randomIndex].autor

    indexActual = randomIndex
}