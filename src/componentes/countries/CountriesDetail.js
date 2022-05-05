import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const CountriesDetail = () => {

    const { countrieId } = useParams()
    const [countrie, setCountries] = useState( {} )
    
  
    useEffect(() => {
      setCountries( countriesData.find( m => m.id == countrieId ) )
    }, [countrieId])
    
  
    return (
      <>
        <div>CountrieDetail: {countrieId}</div>
        <li>{countrie.id}</li>
        <li>{countrie.title}</li>
        <li>{countrie.director}</li>
        <li>{countrie.year}</li>
        <Link to='/pelicula/3'>Pelicula 3</Link>
      </>
    )
  }
  export default CountriesDetail