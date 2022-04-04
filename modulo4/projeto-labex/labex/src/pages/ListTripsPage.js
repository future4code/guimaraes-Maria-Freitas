import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerList} from '../Styled'
import axios from 'axios'


const ListTripsPage = () => {
 const navigate = useNavigate ()

    const goToListTripsPage = () => {
     navigate ('/')

 }

  const goToApplicationFormPage =() => {
    navigate ('/aplication')

  const executeRequest = () => {
   axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips')


  }

// nessa parte, preciso renderizar a lista de viagens para o usuário (público)
// no vídeo do Darvas, ele cria um botão para renderização, mas aqui ao sair do HOME, já precisa ir para página seguinte com as listas.
// como fazer aparecer essa listagem sem precisar criar um botão? apenas aparecer na página? 
// Se eu colocar a requisição no corpo, ele vai renderizar várias vezes num looping, atualizando e renderizando.
// 

  }

 return (
 <ContainerList>
   <h1>Lista das diversas viagens - area pública</h1>
    <button onClick={goToListTripsPage}>Ir para Home</button>
    <button onClick={goToApplicationFormPage}>Inscreva</button>
 </ContainerList>    
 
 )

 }

export default ListTripsPage