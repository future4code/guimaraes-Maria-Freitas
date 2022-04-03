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
   <p>nome</p>
   <input placeholder='nome'/>
   <p>endereço</p>
   <input placeholder='endereço'/>
   <p>telefone</p>
   <input placeholder='telefone'/>
   <p>Qual seu destino?</p>
   <input placeholder='qual destino'/>
   <button>Enviar</button>
 </div>    


 )

}



export default ApplicationFormPage