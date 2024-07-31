function calcularEdad() {
    // Obtener nombre de la mascota introducida por el usuario
    let nombreMascota = document.getElementById('nombreMascota').value;

    // Obetener la edad de la mascota introducida por el usuario
    let edadMascota = document.getElementById('edadMascota').value;
    edadMascota = Number(edadMascota);
    // edadMascota = parseInt(edadMascota)

    // Declaramos el mensaje que vamos a enviar
    let mensaje;

    if (edadMascota > 0 && edadMascota < 50) {
        // Calcular la edad humana de la mascota
        let edadHumana = edadMascota * 7;

        // Mensaje que queremos sacar
        mensaje = `La edad de ${nombreMascota} es de ${edadHumana} años humanos`;
    } else {
        mensaje = `Los datos no son correctos`;
    }

    // Mandamos el mensaje al <p>
    document.getElementById('resultado').textContent = mensaje;

    // Para saber el tipo de variables que son
    // console.log(typeof(nombreMascota))
    // console.log(typeof(edadMascota))
}

function calcularCompra() {
    // Iva de la compra, pongamos un 21%
    let iva = 21;
    let ivaReducido = 4;

    // Obtenemos el nombre del usuario
    let nom = document.getElementById('nombreUser').value;

    // Obtenemos el importe de la compra
    let compra = document.getElementById('importeCompra').value;
    compra = Number(compra);

    // Guardamos el valor del checkbox
    let cbIVA = document.getElementById('ivaReducido').checked;

    let mensaje;
    if (compra > 0 && !cbIVA) {
        let porcentaje = compra * iva / 100;
        let resFinal = compra + porcentaje;

        // Preparamos el mensaje a enviar
        // tofixed formatea los decimales de los numeros
        mensaje = `El importe final de la compra de ${nom} compra es ${resFinal.toFixed(2)}`;
    } else if (cbIVA && compra > 0) {
        let porcentaje = compra * ivaReducido / 100;
        let resFinal = compra + porcentaje;
        // tofixed formatea los decimales de los numeros
        mensaje = `El importe final de la compra de ${nom} compra es ${resFinal.toFixed(2)}`;
    } else {
        mensaje = `La compra no puede ser negativa`;
    }

    // Mandamos al <p> el mensaje
    document.getElementById('res').textContent = mensaje
}


function calcular() {
    // Obtenemos las variables
    let num1 = document.getElementById('numero1').value;
    let num2 = document.getElementById('numero2').value;
    let seleccion = document.getElementById('selector').value;
    let res;

    // Pasamos los numeros de string a numero
    num1 = Number(num1);
    num2 = Number(num2);

    console.log(seleccion)

    if (seleccion == '+') {
        res = num1 + num2;
    } else if (seleccion == '-') {
        res = num1 - num2;
    } else if (seleccion == '*') {
        res = num1 * num2;
    } else if (seleccion == '/') {
        if (num1 > 0 && num2 > 0) {
            res = num1 / num2;
        } else {
            res = 'No se puede dividir entre 0'
        }
    }

    document.getElementById('resultadoCalculadora').textContent = res;
}

function limpiar() {
    let num1 = document.getElementById('numero1').value = '';
    let num2 = document.getElementById('numero2').value = '';
    let seleccion = document.getElementById('selector').value = '+';


    document.getElementById('resultadoCalculadora').textContent = '';
}