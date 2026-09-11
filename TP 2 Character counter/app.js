//TEORIA
//Evento: una accion que sucede en el navegador a la cual podemos responder
// Cuando a nosotros nos pasan un evento, este puede llegar, con Argumento de tipo Evento
// Se representa como un objeto que tiene todas las propiedades que necesita un Evento

//CAJA DE VARIABLES
//PASO 2 - Seleccion de elementos
const textAreaContador= document.getElementById('textarea-character-counter');
const inputExcludeSpace = document.getElementById('input-exclude-space');
const inputSetCharacterLimit = document.getElementById('input-set-character-limit');

const formulario = document.querySelector('form'); 

//Mostradores
const textoAproxReadingTime =document.getElementById('text-reading-time')
const textoTotalCharacters =document.getElementById('text-total-characters')
const textoWordCound =document.getElementById('text-word-cound')

const textoPalabrasRestantes =document.getElementById('text-words-remaining')



//TODO --agregar el último contador



//PASO 3 - Escuchar la escritura
textAreaContador.addEventListener('input', manejadorEventoInput);  //este es un callBack

inputExcludeSpace.addEventListener('change', actualizarContadorCaracteres);

function actualizarContadorCaracteres() {

    const textoLimpio = textAreaContador.value.trim();

    let cantidadCaracteres = textoLimpio.length;

    if (inputExcludeSpace.checked) {
        cantidadCaracteres = textoLimpio.replace(/\s/g, '').length;
    }

    textoTotalCharacters.textContent = cantidadCaracteres;
}

function manejadorEventoInput(evento) {
    const textoLimpio = evento.target.value.trim();
    console.log(textAreaContador.value);

    if (textoAproxReadingTime) {
    textoAproxReadingTime.textContent = readingTime(textoLimpio);
        }
    if (textoTotalCharacters) {
    textoTotalCharacters.textContent = textoLimpio.length;
    }
    if (textoWordCound) {
    const palabras = textoLimpio.split(/\s+/).filter(palabra=>palabra.length>0);
    textoWordCound.textContent = palabras.length;

    // Calcular palabras restantes
    const limitePalabras = 280;
    const palabrasRestantes = limitePalabras - palabras.length;

    // Mostrar palabras restantes
    if (textoPalabrasRestantes) {
       textoPalabrasRestantes.textContent = palabrasRestantes;
    
    //se indica en rojo, si se excede el límite de 280 palabras
       if (palabrasRestantes < 0) {
        textoPalabrasRestantes.style.color = 'red';
            } else {
        textoPalabrasRestantes.style.color = '';
            }
      }
     }
    }


function readingTime(post) {
    const WORDS_PER_MINUTE = 50;
    const regex = /\w+/g;
    const wordCount = post.split(regex).filter(p=>p.length>0).length;

    return Math.ceil(wordCount / WORDS_PER_MINUTE);
}

console.log(textAreaContador.value);

//console.log('Hola mundo');

document.body.appendChild(createButtonTrackeable('green'));

