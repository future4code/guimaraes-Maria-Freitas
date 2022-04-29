import React, {useEffect,useState} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../constants/urls"

// Descrevendo: Importei os comandos que precisava
// Axios para as API's
// useEffect para ao renderizar o código, meu uruário tem as informações na tela
// useNavigate são as rotas onde transitamos pelas páginas, dando funções as botões.
// Criei um estado vazio para guardar as informações passadas.
// criei uma pasta onde guardei a URL, importante e entre chaves chamando a API principal e /people o que a primeiro momento precisaria.


const CharacterListPage= () => {
const navigate = useNavigate ()

const [characterList, setCharacterList] =useState([])


const goToDetailPage= () => {
  navigate ('/CharacterDetailPage')
 }
   
  
  useEffect (()=> {
    getCharacterList ()
  
  },[])
  

  const getCharacterList= () => {
     axios.get(`${BASE_URL}/people`)
    .then ((res) => setCharacterList(res.data.results))
    .catch((err) => console.log (err.response)) 
  
  }

  const listPeople= characterList.map((persona)=> {
    return (

       <div>
         <p>{persona.name}</p> 
       </div>

    )
   }
  ) 
    

  return (
    <div>
      <p>Lista Page Star Wars</p>
      <button onClick ={goToDetailPage}>Ir para Detalhes</button>
      {listPeople}  
      </div>
  )
}

export default CharacterListPage;
