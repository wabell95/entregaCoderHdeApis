import { useEffect, useState } from "react"

const urlApi = "https://restcountries.com/v3.1/all";
const Paises = () => {


    const [paises, setPaises] = useState([]);

    useEffect(() => {
        buscarPaises("Americas");

    }, [])



    const buscarPaises = async (continente) => {
        //  const urlApi = "https://restcountries.com/v3.1/all";
        let respuesta = await fetch(urlApi);
        let respuestaJSON = await respuesta.json();
        const result = respuestaJSON.filter(pais => pais.region === "Americas");
        setPaises(result);


    }
    return (<>

        <button onClick={buscarPaises}>America</button>
        <button onClick={buscarPaises}>Europa</button>
        <button onClick={buscarPaises}>Asia</button>
        <div >
            {paises.map((pais, i) => 
            
            <ul>
                 <li>{pais.name.common}</li>
                 {/* <img className="card-img-top img-fluid:100%" src={pais.flags.png} alt="bandera de pais"></img> */}
            </ul>)}
        </div>
        

        
    </>
    )

}
export default Paises