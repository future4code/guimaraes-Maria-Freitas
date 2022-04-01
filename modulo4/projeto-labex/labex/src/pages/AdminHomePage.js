import React from 'react'
import { useNavigate } from 'react-router-dom'


const AdminHomePage = () => {
    const navigate = useNavigate ()

    const goToAdminHomePage= () => {
     navigate ('/trip')



 return (

 <div>
   <h1>Lista de viagens - área privada</h1>
   <button>excluir viagens</button>
   <button onClick={goToAdminHomePage}button/>
 </div>
   

 )

 } 

}

export default AdminHomePage