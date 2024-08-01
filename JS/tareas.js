function addTarea() {
    // Leemos lo que hay en el input
    let tarea = document.getElementById('tarea').value;
    tarea = tarea.trim();
    // Comprobamos que el usuario no mete nada vacio
    if (tarea != '') {
        // Creamos los li de la ul, el parametro recibido al metodo es el nombre de la etiqueta
        let itemLista = document.createElement('li');
        // Añadimos el contenido al li, innerHtml es parecido al textContent, además le añadimos un botón
        itemLista.innerHTML = `${tarea} 
        <button class="botonEliminar">Eliminar</button>`;
        // Al ul del html le añadimos el li con appendchild
        document.getElementById('listaTareas').appendChild(itemLista);

        // Seleccionamos el boton eliminar para añadirle un evento
        itemLista.querySelector('.botonEliminar').addEventListener('click', function(){
            itemLista.remove();
        })
    }
}