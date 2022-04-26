import React from "react";
import {useNavigate} from 'react-router-dom'


const CharacterListPage= () => {
  const navigate = useNavigate ()
   
    const goToDetailPage= () => {
     navigate ('/CharacterDetailPage')
    }

  return (
    <div>
      <h1>Lista Page Star Wars</h1>
      <button onClick ={goToDetailPage}>Ir para Detalhes</button>
    </div>
  )
}

export default CharacterListPage;
