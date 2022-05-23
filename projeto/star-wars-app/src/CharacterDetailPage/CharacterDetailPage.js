import axios from "axios"
import React, { useEffect, useState} from "react"
import { BASE_URL } from "../constants/urls"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {Container} from "./style"


const CharacterDetailPage= () => {

const [details, setDetails] = useState ([]) 
const [planet, setPlanet] = useState ()
const navigate = useNavigate ()
const params = useParams()

useEffect (() => {
  getDetail()
  getPlanet()

}, [])

const getDetail= () => {
 axios.get(`${BASE_URL}/people/${params.i}`)
  .then((res) => {
    setDetails(res.data)
 })
  .catch((err)=> {console.log (err)})

}


const goToList= () => {
  navigate ("/")

  }

console.log (details)
const getPlanet= () => {
 for(const item of details){
  const response= axios.get(item.homeworld)
console.log (response)
 }
 
}

 return (

    <Container>
      <h1>Detalhes Personagens Star Wars </h1>
      <p>Nome:{details.name}</p>
      <p>Altura:{details.height}</p>
      <p>Cor dos olhos:{details.eye_color}</p>
      <p>Cor do cabelo:{details.hair_color}</p>
      <p>Cor da pele:{details.skin_color}</p>
      <p>Data de nascimento:{details.birth_year}</p>
      <button onClick={goToList}>Voltar</button>
     
 
    </Container>
   
  )

  }

export default CharacterDetailPage;
