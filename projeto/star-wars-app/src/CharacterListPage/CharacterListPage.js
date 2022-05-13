import React, {useEffect,useState} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../constants/urls"
import {Fundo,CardList,CardHeader} from "./style"


const CharacterListPage= () => {


const [characterList, setCharacterList] =useState([])
const navigate = useNavigate ()


     
  useEffect (()=> {
   getCharacterList ()
  
  },[])
  

  const getCharacterList= () => {
     axios.get(`${BASE_URL}/people`)
    .then ((res) => {setCharacterList(res.data.results)})
    .catch((err) => {console.log (err.response)})
  }
 
  const goToDetailPage= (i) => {
  navigate (`/detail/${i}`)

  }

  const listPeople= characterList.map((persona,i)=> {
   return <div onClick={()=>goToDetailPage(i+1)}>
     <p key={i}> {persona.name}</p>
   </div>

   
  })
  
  
  return (
   
    <Fundo>
        <CardHeader>
          <h3>Star Wars</h3> 
        </CardHeader>

        <CardList>
        {listPeople} 
        </CardList>   
           
    </Fundo>
     
  )
  
}

export default CharacterListPage;

