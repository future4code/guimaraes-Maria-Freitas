import React from 'react'
import { useNavigate } from 'react-router-dom'


const AdminHomePage = () => {
    const navigate = useNavigate ()

    const goToTripDetailsPage= () => {
     navigate ('/trip')
    }

     const goLoginPage = () => {
      navigate (-1)

     }


// Essa página privada o administrador precisa ver os detalhes das viagens, deletadas.
// nessa parte temos a API GETGet Trip Detail, DEL Delete Trip
//botão de excluir precisa funcionar
//





 return (

 <div>
   <h1>Lista de viagens - área privada - vejo as listas de viagens</h1>
   <button>excluir viagens</button>
   <button onClick={goToTripDetailsPage}>Acessar as listas</button>
   <button onClick={goLoginPage}>voltar</button>
  
 </div>
   

 )

 } 



export default AdminHomePage