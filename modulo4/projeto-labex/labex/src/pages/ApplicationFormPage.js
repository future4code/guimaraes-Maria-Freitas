import React from 'react'
import { useNavigate } from 'react-router-dom'


const ApplicationFormPage = () => {
    const navigate = useNavigate ()

    const goToListApplicationFormPage= () => {
        navigate ('/')

 }

  
 return (
 <div>
   <h1>Formulário de inscrição</h1>
   <button onClick={goToListApplicationFormPage}>Ir para Home</button>
   <button>Enviar</button>
 </div>    


 )

}



export default ApplicationFormPage