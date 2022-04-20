import React from 'react'
import { useNavigate } from 'react-router-dom'




const TripDetailsPage = () => {
   const navigate = useNavigate ()

   // useEffect(() => {
   //    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-freitas-turmaGuimaraes/trips')
   //      .then((resp) => { console.log("Deu certo", resp) })
   //      .catch((err) => { console.log("Deu errado", err) })
   // })
  


   const goToCreateTripPage= () => {
    navigate ('/create')
   }

   const goAdmin = () => {
   navigate (-1)

   }    


//preciso que o adminstrador veja os detalhes de uma viagem específica e os
// candidatos que aplcaram para ela.


 return (

  <div>
      <h1>Detalhes da viagem - área administrativa</h1>
     <button onClick={goToCreateTripPage}>Acessar os detalhes</button>
     <button onClick={goAdmin}>voltar</button>
  </div>
  

 )


}

export default TripDetailsPage