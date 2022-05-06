import React, {useEffect,useState} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../constants/urls"
import { CharacterCard} from "./style"
// Descrevendo: Importei os comandos que precisava
// Axios para as API's
// useEffect para ao renderizar o código, meu uruário tem as informações na tela
// useNavigate são as rotas onde transitamos pelas páginas, dando funções as botões.
// Criei um estado vazio para guardar as informações passadas.
// criei uma pasta onde guardei a URL, importante e entre chaves chamando a API principal e /people o que a primeiro momento precisaria.


const CharacterListPage= () => {
const navigate = useNavigate ()

const [characterList, setCharacterList] =useState([])

const goToDetailPage= (i) => {
  navigate (`/detail/:i`)
  
 }
     
  useEffect (()=> {
    getCharacterList ()
  
  },[])
  

  const getCharacterList= () => {
     axios.get(`${BASE_URL}/people`)
    .then ((res) => setCharacterList(res.data.results))
    .catch((err) => console.log (err.response)) 
  
  }

  const listPeople= characterList.map((persona,i)=> {
    return <button onClick={() => goToDetailPage(i+1)}>
     <p key={i}> {persona.name} </p>
    </button>
  })
    
  return (
   
    <div>
      <CharacterCard>
          <h3>Lista de Personagens Star Wars</h3>
          <p>{listPeople} </p>
       </CharacterCard>   
  </div> 
      
  )
      
}

export default CharacterListPage;

