
import { useState, useEffect } from 'react';
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";

import axios from 'axios';

function App() {
  // Definir el State
  const [busquedaLetra, guardarBusquedaLetra] = useState({})
  const [letra, guardarLetra] = useState('')

  useEffect( () => {
    if (Object.keys(busquedaLetra).length === 0)  return

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaLetra

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

      const resultado = await axios.get(url)

      guardarLetra(resultado.data.lyrics)
    }

    consultarApiLetra()
  }, [busquedaLetra])

  return (
    <>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
        <div className="col-md-6">
        </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
