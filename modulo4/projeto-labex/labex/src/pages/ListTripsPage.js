import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerList } from '../Styled'
import axios from 'axios'
import {Div} from "./styles";
import trip



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



//está aparecendo no console log, mas preciso renderizar na tela
//https://vimeo.com/user108074337/review/531497744/b633dfbd32 - Video Chijo



  console.log(allTrips)
  const goToListTripsPage = () => {
    navigate('/')

  }

  const goToApplicationFormPage = () => {
    navigate('/aplication')


  }
  //Renderizando a lista de viagens
  // Erro 

  const renderTrip = allTrips.map ((trip) => {
   return ( 
     <Div key={trip.id}>
      <p>{trip.name}</p>
      <p>{trip.name}</p>
      <p>{trip.planet}</p>
      <p>{trip.description}</p>
      <p> Duração:{trip.duractionInDays}</p>
    </Div>
   )
  }
  )


  return (

    <div>

      <ContainerList>
        <h1>Lista das diversas viagens - area pública</h1>
        <button onClick={goToListTripsPage}>Ir para Home</button>
        <button onClick={goToApplicationFormPage}>Inscreva</button>
      </ContainerList>

    
      <div>
        {renderTrip}
      </div>
   
    )
  }


export default ListTripsPage