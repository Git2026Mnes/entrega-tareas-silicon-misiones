
import { useState } from "react";

function VisorPassword({ password }) {

  const [copiado, setCopiado] = useState(false);

  function copiarPassword() {

    // Si no hay password,
    // no hacemos nada

    if (!password) {
      return;
    }

    navigator.clipboard.writeText(password);

    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 3000);
  }

  return (

    <div className="visor">

      <input
        type="text"
        readOnly
        value={password}
        placeholder="P4$5ord!"
      />

      <button
        className="btn-copiar"
        onClick={copiarPassword}
      >
        {copiado ? "¡Copiado!" : "Copiar"}
      </button>

    </div>

  );
}

export default VisorPassword;
