import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerBotao, ContainerPai} from '../Styled'




const HomePage = () => {
  const navigate = useNavigate ()

  const goToHomePage = () => {
   navigate ('/list')
   
  }

  const goToLoginPage = () => {
    navigate ('/login')

  }
 return (

 <ContainerPai>
  <h1><u>Home da Página</u></h1>

   <ContainerBotao>
    <button onClick={goToHomePage}>Ir para lista</button>
    <button onClick={goToLoginPage}>Login administrador</button>
   </ContainerBotao> 
  
 </ContainerPai>    
  

 )


}

export default HomePage