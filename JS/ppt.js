const opciones = ['Piedra', 'Papel', 'Tijera']
let contadorM = 0;
let contadorU = 0;

function ppt(eleccionUsuario) {
    const maquina = Math.floor(Math.random() * opciones.length);
    const eleccionMaquina = opciones[maquina];
    let res;
    let texto = `Tu elección: ${eleccionUsuario} || Máquina: ${eleccionMaquina}`;

    console.log('Elección máquina: ' + eleccionMaquina);
    console.log('Elección usuario: ' + eleccionUsuario);

    if (eleccionMaquina === eleccionUsuario) {
        res = 'Empate';
    } else if (
        (eleccionMaquina === 'Piedra' && eleccionUsuario === 'Tijera') ||
        (eleccionMaquina === 'Papel' && eleccionUsuario === 'Piedra') ||
        (eleccionMaquina === 'Tijera' && eleccionUsuario === 'Papel')
    ) {
        res = 'Perdiste...';
        contadorM++;
    } else {
        res = '¡Ganaste!';
        contadorU++;
    }

    document.getElementById('resultado').textContent = res;
    document.getElementById('texto').textContent = texto;
    document.getElementById('contadorMaquina').textContent=`Máquina: ${contadorM} `;
    document.getElementById('contadorTu').textContent= `Tú: ${contadorU}`;
}