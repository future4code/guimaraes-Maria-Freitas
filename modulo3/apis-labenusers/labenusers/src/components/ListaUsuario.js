import React from 'react';



export default class ListaUsuario extends React.Component{
    render() {
      return (
       <div>
        <p>Lista Usuário</p>
        <button onClick={this.props.irParaCadastro}>Cadastro</button>
       </div>
      )

    }

}