import React from 'react'
import styled from 'styled-components'
// em cima estou importando o React em todos os componentes e App, deixar sempre alinhado isso pois em outras aulas 
//do React teremos que colocar.
//Import style-components, CSS

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

// importando imagens e mostrando o caminho da imagem 


//Abaixo aplicando o comandos de CSS para estilizar
//Criando uma variável camelcase = styled. (div é a tag que colocou no App), abrindo as crases.
const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`
// Aula de ontem. Comandos para inputs, onclick

//Exercício n° 6
// mudei os valores das propriedades e começã com o valor que eu coloquei, porém não conta mais
// Exercício nº 8 - no console aparece "Curtiu"

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
  }

  //.this mostrando o caminho certo do state (como se fosse criação de variável)
  // a pontuação ! não sei.

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })

    //ele não deixa comentar, mas quando clico no botão enviar, ele conta como mensagem enviada.

  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
  // é usada para ao usuário escrevendo e mandando mensagem, vai contanto o número de mensagens escritas no post.



  // Render = Function
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}
//Contador de curtidas tem o onclick (clicado pelo usuário) e a quantidade de curtida
//sempre exportanto para o App - nome da variável
export default Post