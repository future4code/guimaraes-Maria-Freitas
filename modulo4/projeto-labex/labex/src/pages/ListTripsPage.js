import React from 'react'
import { useNavigate } from 'react-router-dom'


const ListTripsPage = () => {
 const navigate = useNavigate ()

    const goToListTripsPage = () => {
     navigate ('/')

 }

  const goToApplicationFormPage =() => {
    navigate ('/aplication')

  }

 return (
 <div>  
     <h1>LISTA</h1>
    <button onClick={goToListTripsPage}>Ir para Home</button>
    <button onClick={goToApplicationFormPage}>Inscreva</button>
    
</div>    
  
 
 )

 }

export default ListTripsPage