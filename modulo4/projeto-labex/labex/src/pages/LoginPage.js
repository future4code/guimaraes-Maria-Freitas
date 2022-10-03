import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerLogin } from '../Styled'


const LoginPage = () => {
    const navigate = useNavigate ()

   

    const goToAdminHomePage = () => {
     navigate ('/admin')
    }


 return (
  <ContainerLogin>

    <h1>Login Administrador</h1>
    <input placeholder='email'/>
    <input placeholder='nome'/>
    <button onClick={goToAdminHomePage}>LOGGIN</button>
     
  </ContainerLogin>  
 )




}
export default LoginPage
