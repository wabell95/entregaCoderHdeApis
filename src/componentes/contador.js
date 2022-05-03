import { useEffect, useState } from "react"

const Contador = () => {

  const [suma, setSuma] = useState(0)
  const [otraResta, setResta] = useState(0)
  
  useEffect( ()=>{
    console.log('Efecto');
  })

  useEffect( ()=>{
    console.log('Efecto en mounting');
  }, [])

  useEffect( ()=>{
    console.log('Efecto en cambio en suma');
  }, [suma])

  useEffect( ()=>{
    console.log('Efecto en cambio en resta');
  }, [otraResta])
  
  const onClickHandler = () => {
    console.log('click onClickHandler')
    setSuma( suma + 1 ) 
    
  }

   const otraRestaHandler = () => {
     console.log('click otraSumaHandler')
     setSuma( suma - 1 ) 
   }

  return (
    <div>

      <button onClick={otraRestaHandler} className="btn">-</button>
      {suma}

      <button onClick={onClickHandler} className="btn">+</button>
      

    </div>

  )
}
export default Contador