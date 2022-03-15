// import styled from 'styled-components';
// import axios from 'axios';
// import React from 'react';


// class adicionarMusicas extends React.Component () {

// state ={
//   list: [],
//     musicaDigitada:"",
//     artistaDigitado:"",
//     urlDigitada:"",
// }

// criaMusica = () => {
//     const body = {
//       name: this.state.musicaDigitada,
//       artist: this.state.artistaDigitado,
//       url: this.state.urlDigitada,
//     }

//     axios
//     .post(`https://us-central1-https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/a93d83c6-c292-4234-8d69-f5d63c43f77b/tracks`, body,
//     {
//       headers: {
//           authorization: "maria-freitas-turmaGuimaraes" }
//     }
//     )
//     .then(response => {
//       console.log(response.data)
//       alert(`Musica Criada com Sucesso`)

//     })
//     .catch(erro => {
//       console.log(erro)
//       alert("ERRO ao criar Musica")
//     })

// }

// }

// export default adicionarMusicas;