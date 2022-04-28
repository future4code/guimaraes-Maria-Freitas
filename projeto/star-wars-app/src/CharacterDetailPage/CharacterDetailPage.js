import React from "react"
import {useNavigate} from 'react-router-dom'


const CharacterDetailPage= () => {
 const navigate = useNavigate ()

 const goToListPage= () => {
  navigate ('/')

 }

  return (

    <div>
      <h1>Detalhes Star Wars Página</h1>
      <button onClick ={goToListPage}>Ir para Lista</button>
    </div>

  )
}

export default CharacterDetailPage;
