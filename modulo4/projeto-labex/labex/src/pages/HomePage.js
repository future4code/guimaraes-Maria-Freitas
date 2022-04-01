import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
  const navigate = useNavigate ()

  const goToHomePage = () => {
   navigate ('/list')
   
  }

  const goToLoginPage = () => {
    navigate ('/login')

  }
 return (
 <div>
  <h1>Home da Página</h1>
  <button onClick={goToHomePage}>Ir para lista</button>
  <button onClick={goToLoginPage}>Login administrador</button>
 </div>    
  

 )


}

export default HomePage