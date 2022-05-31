import axios from "axios"
import React, { useEffect, useState} from "react"
import { BASE_URL } from "../constants/urls"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {Container,ContainerDetails,Imagem} from "./style"


const CharacterDetailPage= () => {

const [details, setDetails] = useState ([]) 
const [planet, setPlanet] = useState ()
const navigate = useNavigate ()
const params = useParams()

useEffect (() => {
  getDetail()


}, [])

const getDetail= () => {
 axios.get(`${BASE_URL}/people/${params.i}`)
  .then((res) => {
    setDetails(res.data)
    axios.get(res.data.homeworld)
  .then((res) => {
    setPlanet(res.data)
 })
  .catch((err)=> {console.log(err)})
  
 })
  .catch((err)=> {console.log(err)})

}
console.log(details.homeworld)



const goToList= () => {
  navigate ("/")

  }


 return (
  
      <Container>

          <ContainerDetails>
              <h1>Detalhes Star Wars - Personagens </h1>
              <p>Nome:{details.name}</p>
              <p>Altura:{details.height}</p>
              <p>Cor dos olhos:{details.eye_color}</p>
              <p>Cor do cabelo:{details.hair_color}</p>
              <p>Cor da pele:{details.skin_color}</p>
              <p>Data de nascimento:{details.birth_year}</p>
              {/* <p>Planeta:{planet.name}</p> */}
              <button onClick={goToList}>Voltar</button>
          </ContainerDetails>

          <Imagem>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${params.i}.jpg`}></img>
          </Imagem>
      </Container>
    
  )

  }

export default CharacterDetailPage;
  
