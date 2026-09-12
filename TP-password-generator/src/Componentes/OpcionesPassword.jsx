
function OpcionesPassword({

  longitud,
  setLongitud,

  conMayusculas,
  setConMayusculas,

  conMinusculas,
  setConMinusculas,

  conNumeros,
  setConNumeros,

  conSimbolos,
  setConSimbolos,

  generarPassword

}) {

  return (

    <div className="formulario">

      {/* =========================
          LONGITUD
      ========================= */}

      <div className="fila-longitud">

        <span>Nivel Seguridad</span>

        <strong>{longitud}</strong>

      </div>

      {/* =========================
          SLIDER
      ========================= */}

      <input
        className="slider"
        type="range"
        min="0"
        max="20"
        value={longitud}
        onChange={(e) =>
          setLongitud(Number(e.target.value))
        }
      />

      {/* =========================
          CHECKBOXES
      ========================= */}

      <div className="opciones">

        <label>

          <input
            type="checkbox"
            checked={conMayusculas}
            onChange={(e) =>
              setConMayusculas(e.target.checked)
            }
          />

          Incluir mayúsculas

        </label>


        <label>

          <input
            type="checkbox"
            checked={conMinusculas}
            onChange={(e) =>
              setConMinusculas(e.target.checked)
            }
          />

          Incluir minúsculas

        </label>


        <label>

          <input
            type="checkbox"
            checked={conNumeros}
            onChange={(e) =>
              setConNumeros(e.target.checked)
            }
          />

          Incluir números

        </label>


        <label>

          <input
            type="checkbox"
            checked={conSimbolos}
            onChange={(e) =>
              setConSimbolos(e.target.checked)
            }
          />

          Incluir símbolos

        </label>

      </div>

      {/* =========================
          BOTÓN GENERAR
      ========================= */}

      <button
        className="btn-generar"
        onClick={generarPassword}
      >
        GENERAR →
      </button>

    </div>

  );
}

export default OpcionesPassword;
