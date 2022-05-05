import './App.css';
import Contador from './componentes/contador';
import Heroes from './componentes/Heroes';
import Navbar from './componentes/Navbar';
import Paises from './componentes/Paises';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountriesDetail from './componentes/countries/CountriesDetail';
function App() {
  return (
    <>
    <div className='container'>

      <BrowserRouter>
      <Paises></Paises>
      <Heroes></Heroes>
      <Routes>
        <Route path='/countries/Countriesdetail.js' element={CountriesDetail}></Route>
      </Routes>
      </BrowserRouter>

   
      
      
    </div>
    
    </>
  );
}

export default App;
