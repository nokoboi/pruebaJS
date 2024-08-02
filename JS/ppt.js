const opciones = ['Piedra', 'Papel', 'Tijera']
let contadorM = 0;
let contadorU = 0;

function ppt(eleccionUsuario) {
    // Declaramos las variables para que la máquina tenga una elección aleatoria
    // Además declaramos las variables de resultado para mostrar y el texto mostrado
    const maquina = Math.floor(Math.random() * opciones.length);
    const eleccionMaquina = opciones[maquina];
    let res;
    let texto = `Tu elección: ${eleccionUsuario} || Máquina: ${eleccionMaquina}`;

    console.log('Elección máquina: ' + eleccionMaquina);
    console.log('Elección usuario: ' + eleccionUsuario);

    // Lo primero que hacemos es comprobar que el usuario y la maquina empaten
    if (eleccionMaquina === eleccionUsuario) {
        res = 'Empate';
        // Comprobamos si la máquina en algun momento gana y le sumamos un punto
    } else if (
        (eleccionMaquina === 'Piedra' && eleccionUsuario === 'Tijera') ||
        (eleccionMaquina === 'Papel' && eleccionUsuario === 'Piedra') ||
        (eleccionMaquina === 'Tijera' && eleccionUsuario === 'Papel')
    ) {
        res = 'Perdiste...';
        contadorM++;
    } else {
        // Al comprobar todo lo demás de arriba, la otra opción posible es que haya ganado el usuario
        res = '¡Ganaste!';
        contadorU++;
    }

    // Llamamos a una función para actualizar la pantalla en todo momento
    actualizarPantalla(res,texto);
}

function actualizarPantalla(res, texto){
    // Accedemos a los <p> para rellenarlos con los resultados que nos llegan de la función de jugar
    document.getElementById('resultado').textContent = res;
    document.getElementById('texto').textContent = texto;
    document.getElementById('contadorMaquina').textContent=`Máquina: ${contadorM} `;
    document.getElementById('contadorTu').textContent= `Tú: ${contadorU}`;
}