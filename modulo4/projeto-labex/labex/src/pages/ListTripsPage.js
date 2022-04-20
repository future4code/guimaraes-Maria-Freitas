import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerList } from '../Styled'
import axios from 'axios'



const ListTripsPage = () => {
  const navigate = useNavigate()

  const [allTrips, setAllTrips] = useState([])


  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-freitas-turmaGuimaraes/trips')
      .then((resp) => {
        setAllTrips(resp.data.trips)
        
        // console.log("Deu certo", resp) 
      })
      .catch((err) => { console.log("Deu errado", err) })
  }, [])

  console.log(allTrips)
  const goToListTripsPage = () => {
    navigate('/')

  }

  const goToApplicationFormPage = () => {
    navigate('/aplication')



    // const getTrips = () => {
    //  axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-freitas-turmaGuimaraes/trips')
    //  .then((resp)=> {console.log("Deu certo",resp)})
    //  .catch((err) =>{console.log("Deu errado",err)})
    // }





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