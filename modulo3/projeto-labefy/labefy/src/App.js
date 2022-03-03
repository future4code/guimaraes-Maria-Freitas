import styled from "styled-components";
import axios from 'axios'
import React from 'react';


export default function App() {


const header = styled.div`
display: flex;
align-items:center;
font-size: 14px;

`

const adicionaPlaylist=() => {
  axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
    headers: {
      Authorization: "maria-freitas-turmaGuimaraes"

    }  
  })

  // {
  //   "name"= "Adiciona sua musica";
  // }
  
}




  return (
    <header>
      <h1>Labefy</h1>
      <input type="text" placeholder='Diz aí sua playlist?'/>
      <button onClick={adicionaPlaylist}>Adicione sua música</button> 
    </header>
  );
}


