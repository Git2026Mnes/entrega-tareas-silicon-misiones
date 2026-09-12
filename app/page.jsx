"use client";

import { useEffect, useState } from "react";


// ------------------------------------
// CREAR TABLERO
// ------------------------------------

function crearTablero() {
  const valores = [1, 2, 3, 4, 5, 6, 7, 8];

  const duplicados = [...valores, ...valores];

  const mezclados = [...duplicados].sort(() => Math.random() - 0.5);

  return mezclados.map((valor, index) => ({
    id: index,
    valor: valor,
    dadaVuelta: false,
    encontrada: false,
  }));
}


// ------------------------------------
// COMPONENTE PRINCIPAL - tenemos 6 estados diferentes: tablero, movimientos, tiempo, jugando, ganaste y bloqueado.
// ------------------------------------

export default function Home() {

  const [tablero, setTablero] = useState(crearTablero); // Estado para el tablero de juego, guarda las 16 fichas

  const [movimientos, setMovimientos] = useState(0); //cuenta cada vez que se dan vuelta dos fichas

  const [tiempo, setTiempo] = useState(0); // muestra el tiempo en segundos

  const [jugando, setJugando] = useState(false); 

  const [ganaste, setGanaste] = useState(false);

  const [bloqueado, setBloqueado] = useState(false);


  // ------------------------------------
  // FICHAS DADAS VUELTA
  // ------------------------------------

  const fichasDadasVuelta = tablero.filter(
    (ficha) => ficha.dadaVuelta && !ficha.encontrada
  );


  // ------------------------------------
  // CLICK EN UNA FICHA
  // ------------------------------------

  function manejarClick(id) {

    if (bloqueado) {
      return;
    }

    const ficha = tablero.find((ficha) => ficha.id === id);

    if (!ficha) {
      return;
    }

    if (ficha.dadaVuelta || ficha.encontrada) {
      return;
    }

    // Comienza el juego con el primer click
    if (!jugando) {
      setJugando(true);
    }

    setTablero((tableroAnterior) =>
      tableroAnterior.map((ficha) =>
        ficha.id === id
          ? { ...ficha, dadaVuelta: true }
          : ficha
      )
    );
  }


  // ------------------------------------
  // COMPARAR LAS DOS FICHAS
  // ------------------------------------

  useEffect(() => {

    if (fichasDadasVuelta.length !== 2) {
      return;
    }

    const [primera, segunda] = fichasDadasVuelta;

    // Cada vez que se completan dos fichas
    setMovimientos((movimientosAnterior) => movimientosAnterior + 1);

    // Bloqueamos nuevos clicks
    setBloqueado(true);


    // --------------------------------
    // SI COINCIDEN
    // --------------------------------

    if (primera.valor === segunda.valor) {

      setTablero((tableroAnterior) =>
        tableroAnterior.map((ficha) => {

          if (
            ficha.id === primera.id ||
            ficha.id === segunda.id
          ) {
            return {
              ...ficha,
              encontrada: true,
            };
          }

          return ficha;
        })
      );

      setBloqueado(false);

    }


    
    // SI NO COINCIDEN LAS FICHAS
    

    else {

      const temporizador = setTimeout(() => {

        setTablero((tableroAnterior) =>
          tableroAnterior.map((ficha) => {

            if (
              ficha.id === primera.id ||
              ficha.id === segunda.id
            ) {
              return {
                ...ficha,
                dadaVuelta: false,
              };
            }

            return ficha;
          })
        );

        setBloqueado(false);

      }, 1000);


      // Limpiar el temporizador
      return () => clearTimeout(temporizador);
    }

  }, [tablero]);


  
  // TEMPORIZADOR
  
  useEffect(() => {

    if (!jugando || ganaste) {
      return;
    }

    const intervalo = setInterval(() => {

      setTiempo((tiempoAnterior) => tiempoAnterior + 1);

    }, 1000);


    return () => {
      clearInterval(intervalo);
    };

  }, [jugando, ganaste]);


  
  // SE VERIFICA SI GANÓ
  

  useEffect(() => {

    if (tablero.every((ficha) => ficha.encontrada)) {

      setGanaste(true);
      setJugando(false);
    }

  }, [tablero]);


  // ------------------------------------
  // FORMATEAR TIEMPO
  // ------------------------------------

  function formatearTiempo(segundos) {

    const minutos = Math.floor(segundos / 60);

    const segundosRestantes = segundos % 60;

    return `${minutos}:${segundosRestantes
      .toString()
      .padStart(2, "0")}`;
  }


  // ------------------------------------
  // NUEVA PARTIDA
  // ------------------------------------

  function nuevaPartida() {

    setTablero(crearTablero());

    setMovimientos(0);

    setTiempo(0);

    setJugando(false);

    setGanaste(false);

    setBloqueado(false);
  }


  // ------------------------------------
  // RENDER
  // ------------------------------------

  return (

    <main className="contenedor">

      <header className="header">

        <h1>Game of Memory</h1>

        <button
          className="boton-nueva"
          onClick={nuevaPartida}
        >
          Nueva Partida
        </button>

      </header>


      {/* --------------------------------
          TABLERO
      -------------------------------- */}

      <section className="tablero">

        {tablero.map((ficha) => (

          <button
            key={ficha.id}
            className={`ficha ${
              ficha.dadaVuelta || ficha.encontrada
                ? "ficha-visible"
                : ""
            } ${
              ficha.encontrada
                ? "ficha-encontrada"
                : ""
            }`}
            onClick={() => manejarClick(ficha.id)}
          >

            {ficha.dadaVuelta || ficha.encontrada
              ? ficha.valor
              : "?"}

          </button>

        ))}

      </section>


      {/* --------------------------------
          INFORMACIÓN
      -------------------------------- */}

      <footer className="footer">

        <div className="tarjeta">

          <span>Tiempo</span>

          <strong>
            {formatearTiempo(tiempo)}
          </strong>

        </div>


        <div className="tarjeta">

          <span>Movimientos</span>

          <strong>
            {movimientos}
          </strong>

        </div>

      </footer>


      {/* --------------------------------
          PANTALLA DE VICTORIA
      -------------------------------- */}

      {ganaste && (

        <div className="mensaje-victoria">

          <div className="victoria-card">

            <h2>¡Lo lograste!</h2>

            <p>
              Encontraste todos los pares.
            </p>

            <div className="resumen">

              <div>
                <span>Tiempo</span>
                <strong>
                  {formatearTiempo(tiempo)}
                </strong>
              </div>

              <div>
                <span>Movimientos</span>
                <strong>
                  {movimientos}
                </strong>
              </div>

            </div>

            <button
              className="boton-jugar"
              onClick={nuevaPartida}
            >
              Jugar de nuevo
            </button>

          </div>

        </div>

      )}

    </main>
  );
}
    
