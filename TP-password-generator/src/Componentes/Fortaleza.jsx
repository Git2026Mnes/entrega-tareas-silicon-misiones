function Fortaleza({

  longitud,
  conMayusculas,
  conMinusculas,
  conNumeros,
  conSimbolos

}) {

  // =========================
  // CALCULAR PUNTOS
  // =========================

  let puntos = 0;

  if (conMayusculas) {
    puntos++;
  }

  if (conMinusculas) {
    puntos++;
  }

  if (conNumeros) {
    puntos++;
  }

  if (conSimbolos) {
    puntos++;
  }

  if (longitud >= 12) {
    puntos++;
  }

  // =========================
  // DETERMINAR FORTALEZA
  // =========================

  let nivel = "";

  if (puntos <= 1) {
    nivel = "Muy débil";
  }
  else if (puntos === 2) {
    nivel = "Débil";
  }
  else if (puntos === 3) {
    nivel = "Media";
  }
  else {
    nivel = "Fuerte";
  }

  return (

    <div className="fortaleza">

      <span>FORTALEZA</span>

      <strong>
        {nivel}
      </strong>

    </div>

  );
}

export default Fortaleza;

