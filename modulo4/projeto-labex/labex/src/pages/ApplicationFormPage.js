import React from 'react'
import { useNavigate } from 'react-router-dom'
import {ContainerApplication} from '../Styled'


const ApplicationFormPage = () => {
    const navigate = useNavigate ()

    const goToListApplicationFormPage= () => {
        navigate ('/')
 }

 const goListTrip = () => {
  navigate (-1)

 }
  
// fazer acontecer no formulário de inscrição, botão enviar não funciona

 return (
 <ContainerApplication>
   <h1>Formulário de inscrição</h1>
   <button onClick={goToListApplicationFormPage}>Ir para Home</button>
   <button onClick={goListTrip}>voltar</button>
   <p>nome</p>
   <input placeholder='nome'/>
   <p>endereço</p>
   <input placeholder='endereço'/>
   <p>telefone</p>
   <input placeholder='telefone'/>
   <p>Qual seu destino?</p>
   <input placeholder='qual destino'/>
   <button>Enviar</button>
 </ContainerApplication>    


 )

}



export default ApplicationFormPage