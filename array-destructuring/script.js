//===== PARTE A: array de valores simples =====
console.log("---PARTE A---");

const categorias = ['accion', 'documental', 'deporte', 'comedia']
console.log(categorias);

console.log(categorias.length);

console.log(categorias[0]);
console.log(categorias[categorias.length-1]);

categorias.push("terror");

console.log(categorias);
console.log(categorias.length);

const removido = categorias.pop();
console.log(removido)

//===== PARTE B: objeto =====
console.log("---PARTE B---");

const usuario = {
    nombre:'Ruben',
    edad: 25,
    ciudad:"Posadas",
    TemaFavorito:"Tecnologia"
    }
console.log(usuario);

console.log(`me llamo ${usuario.nombre}, tengo ${usuario.edad} años de edad, soy de ${usuario.ciudad} y mi tema favorito es ${usuario.TemaFavorito}`);

usuario.ciudad= "Iguazu";
console.log(usuario.ciudad)

usuario.carnetDeConducir = "SI"
console.log(`me llamo ${usuario.nombre}, tengo ${usuario.edad} años de edad, soy de ${usuario.ciudad} y mi tema favorito es ${usuario.TemaFavorito}, ${usuario.carnetDeConducir}, tengo carnet de Conducir`);

//===== PARTE C: array de objetos =====
console.log("---PARTE C---");

const catalogo = [
  {
    titulo: "matrix",
    categoria: "acción",
    puntaje: 9,
    visto: true
  },
  {
    titulo: "terminator",
    categoria: "ciencia ficción",
    puntaje: 7,
    visto: true
  },
  {
    titulo: "toy story 5",
    categoria: "animada",
    puntaje: 8,
    visto: false
  },
  {
    titulo: "rapido y furioso 9",
    categoria: "acción",
    puntaje: 9,
    visto: true
  }
];

console.log(catalogo);

console.log(catalogo[0].titulo); 
console.log(catalogo[2].puntaje);

const peli = catalogo[1];
const estadoVisto = peli.visto ? "Visto": "No Visto" ;

const linea_Descrip = `${peli.titulo} - ${peli.categoria} - ${peli.puntaje}/10 - ${estadoVisto}`;
console.log(linea_Descrip);

catalogo[3].puntaje = 7;
console.log(catalogo[3].puntaje)

catalogo.push ({
    titulo:"relato salvaje",
    categoria: "drama",
    puntaje: 10,
    visto: true
})

console.log(catalogo.length);

//===== PARTE D: Destrcturing =====
console.log("---PARTE D---");

const {titulo, categoria, puntaje, visto}= catalogo[0]
console.log(titulo);
console.log(categoria);
console.log(puntaje);
console.log(visto);

const {nombre, ciudad} = usuario
console.log(nombre);
console.log(ciudad);

const [primero, segundo] = catalogo;
console.log(`Primer pelicula: ${primero.titulo}`); 
console.log(`Segundo pelicula: ${segundo.titulo}`);

//===== PARTE E: Complementaria =====
console.log("---PARTE E---");

const {titulo:película} = catalogo[0]
console.log(película);

const {pais = "No definido"}=usuario;
console.log(pais)

let a = "matrix";
let b = "terminator";

[a,b] = [b,a];
console.log(a);
console.log(b);
