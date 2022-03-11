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
  display: flex;
  color: white;
  font-size: 20px;
  height: 300px;


div:nth-child(1) {
  display: flex;
  margin: 50px;
  flex-direction: column;
  background-color:#8B4726;
  height: 200px;
  justify-content: center;


input {
  margin: 15px;
  margin-top: 0px;
}

button{
 width:70px;
 align-self: center;
}

p {
 align-self:center;

}

}

div:nth-child(2){
  display: flex;
  margin: 50px;
  width: 250px;
  flex-direction: column;
  background-color:#8B4726;
  /* height: 100px; */
  
p{
  align-self:center;
}


} 


div:nth-child(3) {
  display: flex;
  margin: 50px;
  flex-direction: column;
  background-color:#8B4726;
  height: 300px;
  justify-content: center;
  width: 300px;

}
 
p {
  align-self:center;
  height: 10px;

}



`

const ListaMusica= styled.div `
 color: white;
 width:10px;

`





class App extends React.Component {
state ={
playlists: [],
inputCriar: "" 

}

componentDidUpdate () {
 this.getAllPlaylists ()

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
    <ListaMusica>
      <p key ={playlist.id} > {playlist.name}</p>
      <button onClick={() => this.deletePlaylist(playlist.id)}>excluir playlist</button>
    </ListaMusica>
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
      </div> 

        <div>
          <p>Lista de Playlists</p>
            {renderizaPlaylists}
        </div>

      <div>
          <p>Suas músicas</p>
          {/* {adicionarMusicas} */}
      </div>

   </Background>
     
           
 </div>



   )


  }


}

export default App;
