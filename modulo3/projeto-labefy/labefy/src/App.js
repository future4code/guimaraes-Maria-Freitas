import styled from 'styled-components';
import axios from 'axios';
import React from 'react';

const Header =styled.header `
 background-color: #39752D;
 display: flex;
 justify-content: center;
 color: white;
 font-size: 30px;
 margin: 0px;
 

`
const Layout = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
background-color:#BDD5B8;


criacaoPlaylist {
 display: flex; 
 flex-direction: column;
 align-items: center;
 width:200px;
 background-color:#82C175;
 color: white;
 margin: 100px;
 padding: 50px;
 font-size: 25px;
 font-family:Arial;
 font-style:italic;
}

button {
  margin: 15px;
  padding:10px;
  font-size: 15px;
  font-weight: bold;  
}



playlistCriada { 
display: flex; 
width:150px;
height: 400px;
background-color:#82C175;
color: white;
margin: 500px;
padding: 80px;
margin-top: 0px;
font-family:Arial;
font-style:italic;
font-size: 20px;
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
   <Layout>

      <Header> 
        <p>Labefy</p>
      </Header>
      
      <criacaoPlaylist> 
        <p><u>Crie sua Playlist</u></p>
          <input placeholder="Diga aí sua playlist" value ={this.state.inputCriar} 
          onChange= {this.manuseioDoInput}/>
          <button onClick={this.createPlaylist}>adicionar</button>
      </criacaoPlaylist> 
      
      <playlistCriada>
        <p><u>Lista de Playlists</u></p>
          {renderizaPlaylists}
      </playlistCriada>


      <p>Adicionar música</p>

   </Layout>
 </div>



   )


  }


}

export default App;
