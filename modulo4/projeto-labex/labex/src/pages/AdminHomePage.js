import React from 'react'
import { useNavigate } from 'react-router-dom'


const AdminHomePage = () => {
    const navigate = useNavigate ()

    const goToTripDetailsPage= () => {
     navigate ('/trip')

// Essa página precisa no botão ir para página de detalhes das viagens e não está indo.

 return (

 <div>
   <h1>Lista de viagens - área privada</h1>
   <button>excluir viagens</button>
   <button onClick={goToTripDetailsPage}button/>
 </div>
   

 )

 } 

}

export default AdminHomePage