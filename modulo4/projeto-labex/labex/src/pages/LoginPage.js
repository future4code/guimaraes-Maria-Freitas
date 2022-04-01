import React from 'react'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const navigate = useNavigate ()

    const goToLoginPage = () => {
     navigate ('/admin')



 return (
  <div>
    <h1>Login Administrador</h1>
    <input placeholder='email'/>
    <input placeholder='nome'/>
    <button onClick={goToLoginPage}>LOGGIN</button>
    
  </div>  
 )


}

}
export default LoginPage