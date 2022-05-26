import React from "react";
import styled from 'styled-components'
import CadastroUsuario from "./components/CadastroUsuario"
import ListaUsuario from "./components/ListaUsuario"




export default class App extends React.Component{
 state ={
  tela:"cadastro"
 }

 escolheTela = () => {
  switch (this.state.tela){
    case "cadastro":
     return <CadastroUsuario irParaLista ={this.irParaLista}/>
    case "lista":
      return <ListaUsuario irParaCadastro ={this.irParaCadastro}/>
     default:
       return <p>Erro.</p> 
  }
 }

irParaCadastro = () => {
 this.setState ({tela:"cadastro"})
}

irParaLista= () => {
  this.setState ({tela:"lista"})
 }
 


 render () {
  return (
    <div>
      <p><u>Labenusers</u></p>
       {this.escolheTela()}
    </div>
  )

 }

}
  
 

