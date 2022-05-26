import React from 'react';
import axios from 'axios';



export default class CadastroUsuario extends React.Component{
 state = {
   nome: "",
   email: ""
 }

 mudarNome =(event) => {
  this.setState ({nome:event.target.value})
 }


 mudarEmail =(event) => {
    this.setState ({email:event.target.value})
}
  
criaUsuario = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body ={
     name: this.state.nome,
     email: this.state.email

    }
 const headers = {
   headers: {
       Authorization: "maria-freitas-turmaGuimaraes"
   }

 }

 axios.post (url, body, headers)
 .then((res) =>{
   alert ("ok criado")
 })
 .catch ((err) =>{
   alert (err.response.data.message) 

 })

}


  render() {
   return (
    <div>
      <button onClick={this.props.irParaLista}>Lista</button>
      <p>Lista Cadastro</p>
      <input 
      placeholder='nome'
      value={this.state.nome}
      onChange={this.mudarNome}
      />
      <input 
      placeholder='email'
      value={this.state.email}
      onChange={this.mudarEmail}
      />
      <button onClick={this.criaUsuario}>cadastro</button>
    </div>

   )
  }
 }

