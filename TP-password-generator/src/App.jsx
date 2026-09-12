
import { useState } from "react";
import "./App.css";

import VisorPassword from "./Componentes/VisorPassword";
import OpcionesPassword from "./Componentes/OpcionesPassword";
import Fortaleza from "./Componentes/Fortaleza";

function App() {

  // =========================
  // ESTADOS
  // =========================

  const [password, setPassword] = useState("");

  const [longitud, setLongitud] = useState(10);

  const [conMayusculas, setConMayusculas] = useState(true);
  const [conMinusculas, setConMinusculas] = useState(true);
  const [conNumeros, setConNumeros] = useState(true);
  const [conSimbolos, setConSimbolos] = useState(true);

  const [error, setError] = useState("");

  // =========================
  // GENERAR PASSWORD
  // =========================

  function generarPassword() {

    // Validación

    if (
      longitud === 0 ||
      (
        !conMayusculas &&
        !conMinusculas &&
        !conNumeros &&
        !conSimbolos
      )
    ) {
      setError("Marca al menos una opcion");
      return;
    }

    // Si todo está correcto,
    // limpiamos el error

    setError("");

    // =========================
    // CARACTERES PERMITIDOS
    // =========================

    let permitidos = "";

    if (conMayusculas) {
      permitidos += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (conMinusculas) {
      permitidos += "abcdefghijklmnopqrstuvwxyz";
    }

    if (conNumeros) {
      permitidos += "0123456789";
    }

    if (conSimbolos) {
      permitidos += "!@#$%&*";
    }

    // =========================
    // GENERAR
    // =========================

    let resultado = "";

    for (let i = 0; i < longitud; i++) {

      const posicion = Math.floor(
        Math.random() * permitidos.length
      );

      resultado += permitidos[posicion];
    }

    // Guardamos la contraseña

    setPassword(resultado);
  }

  return (

    <main className="app">

      <h1>Generador de contraseña</h1>

      <section className="card">

        {/* VISOR DE PASSWORD */}

        <VisorPassword
          password={password}
        />

        {/* ERROR */}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {/* OPCIONES */}

        <OpcionesPassword
          longitud={longitud}
          setLongitud={setLongitud}

          conMayusculas={conMayusculas}
          setConMayusculas={setConMayusculas}

          conMinusculas={conMinusculas}
          setConMinusculas={setConMinusculas}

          conNumeros={conNumeros}
          setConNumeros={setConNumeros}

          conSimbolos={conSimbolos}
          setConSimbolos={setConSimbolos}

          generarPassword={generarPassword}
        />

        {/* FORTALEZA */}

        <Fortaleza
          longitud={longitud}
          conMayusculas={conMayusculas}
          conMinusculas={conMinusculas}
          conNumeros={conNumeros}
          conSimbolos={conSimbolos}
        />

      </section>

    </main>
  );
}

export default App;
