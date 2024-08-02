// Accedemos al elemento por su id (el boton), añadimos un listener para el evento, entre comillas
// ponemos el evento que va a ocurrir, con document.body.classlist accedemos a la clase y con toggle, activamos o desactivamos 
document.getElementById('cambiar_color').addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')
})