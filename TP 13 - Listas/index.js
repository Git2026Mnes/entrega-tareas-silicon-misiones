let input = document.querySelector('#nuevaTarea');
let boton = document.querySelector('#agregar');
let lista = document.querySelector('#lista');
let contador = document.querySelector('#contador');
let contenedorFecha = document.querySelector('#fecha') //capturo el div donde voy a mostrar la fecha
                                                        // arriba a la derecha

function mostrarFecha() {
    let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let hoy = new Date();
    
    // Convierte la fecha a nuestro formato
    let fechaFormateada = hoy.toLocaleDateString('es-ES', opciones);
    contenedorFecha.textContent = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
}
mostrarFecha();

function actualizarContador() {
    
    let todasLasTareas = lista.querySelectorAll('li');
    let pendientes = 0;

    
    todasLasTareas.forEach(function(item) {
        let span = item.querySelector('span');
        
        if (span && !span.classList.contains('hecha')) {
           
            pendientes++;
        }
    });

    
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







