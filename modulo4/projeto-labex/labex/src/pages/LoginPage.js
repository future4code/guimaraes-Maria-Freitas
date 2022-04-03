import React from 'react'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const navigate = useNavigate ()

   

    const goToAdminHomePage= () => {
     navigate ('/admin')

// essa página não está aparecendo os inputs e o botão - ir para a página do administrador

 return (
  <div>
    <h1>Login Administrador</h1>
    <input placeholder='email'/>
    <input placeholder='nome'/>
    <button onClick={goToAdminHomePage}>LOGGIN</button>
    
    
  </div>  
 )


}

}
export default LoginPage
