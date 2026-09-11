//PONDRIA TODO EL CODIGO DE MI BOTON PARA QUE SE CREE
//PARA QUE GESTIONE LO QUE NECESITO

console.log('Generando funciones de boton')

const TIPOS_DE_BOTONES = {
        green : {
            className: 'btn btn-success'
        },
        blue : {
            className: 'btn btn-info'
        },
        red : {
            className : 'btn btn-danger'
        }
    }
function generarClick() {
//PROCEDIMIENTO QUE QUEREMOS HACER PARA QUE EL BOTON RECCAIONE AL CLICK
console.log('soy el boton que quieren hacer click')
//TRACKEA EVENTOS
//GESTIONA CACHE DEL USUARIO (SESION DE USUARIO)
//VERIFICA ROLES Y PERMISOS
//MANEJAR ESTE ERROR/EXCEPCION
}

//Responsabilidad: crear Boton Flexible

function createButtonTrackeable(tipoDeBoton) {

        //Primero valido el Boton
        if(tipoDeBoton !== 'green' && tipoDeBoton !== 'blue' && tipoDeBoton !== 'red'){
            return Error('esto no es un boton aceptable')
        }

        //Luego realizo el procedimiento
    const elementoButton = document.createElement('button');
    elementoButton.setAttribute('id', 'button');
    elementoButton.textContent ='mi propio string';

    elementoButton.addEventListener('input', generarClick);
    elementoButton.className = TIPOS_DE_BOTONES[tipoDeBoton].className;

    return elementoButton;
}