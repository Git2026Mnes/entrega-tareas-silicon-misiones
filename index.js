let input = document.querySelector('#nuevaTarea');
let boton = document.querySelector('#agregar');
let lista = document.querySelector('#lista');
let contador = document.querySelector('#contador');
let contenedorFecha = document.querySelector('#fecha') //capturo el div donde voy a mostrar la fecha

function mostrarFecha() {
    let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let hoy = new Date();
    
    // Convierte la fecha a formato local en español y capitaliza la primera letra
    let fechaFormateada = hoy.toLocaleDateString('es-ES', opciones);
    contenedorFecha.textContent = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
}
mostrarFecha();

function actualizarContador() {
    // 1. Contamos todos los elementos de la lista
    let todasLasTareas = lista.querySelectorAll('li');
    let pendientes = 0;

    // 2. Recorremos cada tarea y sumamos solo las que NO tienen el span tachado
    todasLasTareas.forEach(function(item) {
        let span = item.querySelector('span');
        // Si el span existe y NO tiene la clase "hecha", está pendiente
        if (span && !span.classList.contains('hecha')) {
            pendientes++;
        }
    });

    // 3. Mostramos el resultado
    contador.textContent = "Tareas: " + pendientes;
}  

function agregarTarea() {
    let textoTarea = input.value.trim();
   
    if (textoTarea === "") {
        return; 
    }

    let nuevoItem = document.createElement('li');
    let spanTexto = document.createElement('span');
    let botonEliminar = document.createElement('button');

    spanTexto.textContent = textoTarea;
    spanTexto.style.cursor = "pointer";

    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.marginLeft = "10px";

    //tacho las tareas realizadas, y decrementa el contador de tareas pendientes
    spanTexto.addEventListener('click', function () {
        spanTexto.classList.toggle('hecha');
        actualizarContador();
        
    });

spanTexto.addEventListener('click', function () {
        if (spanTexto.style.textDecoration === 'line-through') {
            spanTexto.style.textDecoration = 'none';
            spanTexto.style.color = 'black';
        } else {
            spanTexto.style.textDecoration = 'line-through';
            spanTexto.style.color = 'gray';
        }
    });

    
    botonEliminar.addEventListener('click', function () {
        nuevoItem.remove();
        actualizarContador();
    });

    nuevoItem.appendChild(spanTexto);
    nuevoItem.appendChild(botonEliminar);
    lista.appendChild(nuevoItem);

    actualizarContador();
    input.value = '';
    input.focus();
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});







