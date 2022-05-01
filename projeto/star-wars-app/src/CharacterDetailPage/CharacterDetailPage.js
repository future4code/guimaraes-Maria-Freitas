import React from "react"
import {useNavigate} from 'react-router-dom'


const CharacterDetailPage= (props) => {
 const navigate = useNavigate ()



 const goToListPage= () => {
  navigate ('/')
 }



  return (

    <div>
      <h1>Detalhes Star Wars Página</h1>
      <p>{props.url}</p>
      <p>{props.url.id}</p>
    
      <button onClick ={goToListPage}>Lista</button>
    </div>

  )

  }


export default CharacterDetailPage;
