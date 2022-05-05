import './App.css';
import {  useState } from 'react';

const urlApi = "https://restcountries.com/v3.1/all";

function App() {

  const [paises, setpaises] = useState([]);

  const buscarPaises = async (region) => {
    const respuesta = await fetch(urlApi);
    const data = await respuesta.json();

    const result = data.filter(pais => pais.region === region);

    setpaises(result);
    console.log(result);

  }

  return (
    <>
      <h1>Paises</h1>
      <button onClick={() => buscarPaises("Americas")}>
        Americas
      </button>
      <button onClick={() => buscarPaises("Asia")}>
        Asia
      </button>
      <button onClick={() => buscarPaises("Europe")}>
        Europe
      </button>


      <div>
        {
          paises.map(pais => (
            <h2 >{pais.name.common}</h2>
          ))
        }
      </div>
    </>
  );
}

export default App;