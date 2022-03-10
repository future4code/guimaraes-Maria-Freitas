import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import adicionarMusicas from './Components/adicionarMusicas';

const Header =styled.header `
 background-color: #8B4726;
 display: flex;
 justify-content: center;
 color: white;
 font-size: 40px;
 margin: 0px;
 
 `

const Background = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #CDAA7D;
  position: absolute;
  /* display:grid; */
  display: flex;
  color: white;
  font-size: 20px;

div {
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  row-gap: 20px;
  column-gap: 20px;
  margin: 10px;
  
}

button {
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}

input {
height: 20px;
width: 180px;

}

 
`


class App extends React.Component {
state ={
playlists: [],
inputCriar: "" 

}

componentDidMount () {
 this.getAllPlaylists ()

}

getAllPlaylists = () => {
 axios
 .get ('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
  {
   headers: {
    Authorization: 'maria-freitas-turmaGuimaraes'
   }
 }).then ((response) => {
   this.setState ({playlists:response.data.result.list})
   console.log (response.data.result.list)

 }).catch ((error) => console.log (error))
 
} 

manuseioDoInput = (event) => {
 this.setState ({inputCriar: event.target.value})
 
}

createPlaylist = () => {
 const body ={
 name:this.state.inputCriar
 }

 axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
 body, {
   headers: {
     Authorization: 'maria-freitas-turmaGuimaraes'
    }
  }).then ((response)=> {
   console.log (response.data) 
   alert ("Playlist criada com sucesso")

  }).catch ((error) => {
    console.log (error.response.data)
  })
    
}

deletePlaylist = (idDaPlaylist) => {
 axios
 .delete (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idDaPlaylist}`,
 {
  headers: {
   Authorization: 'maria-freitas-turmaGuimaraes'
   }
  }).then((response) => {
    this.getAllPlaylists ()
    console.log (response)
    alert("Playlist deletada")
  }).catch ((error) => 
    console.log (error.response))

}

  render() {
   const renderizaPlaylists = this.state.playlists.map((playlist) => {
   return ( 
    <div>
      <p key ={playlist.id} > {playlist.name}</p>
      <button onClick={() => this.deletePlaylist(playlist.id)}>excluir playlist</button>
    </div>
   )

   })
  
    
   return (

 <div>
      
      <Header> 
        <p>Labefy</p>
      </Header>

    <Background>
     <div>
        <p>Crie sua Playlist</p>
          <input placeholder="Diga aí sua playlist" value ={this.state.inputCriar} 
          onChange= {this.manuseioDoInput}/>
          <button onClick={this.createPlaylist}>adicionar</button>
        
          <p>Lista de Playlists</p>
            {renderizaPlaylists}

          <p>Suas músicas</p>
          {/* {adicionarMusicas} */}
      </div>
   </Background>
     
           
 </div>



   )


  }


}

export default App;
