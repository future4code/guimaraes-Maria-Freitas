
// essa parte de cima não entendi. Perguntar
import React, {Component} from 'react'
import styled from 'styled-components'


//campo de escrita do comentário estilizando no css
const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`
//colocando margem direita 5 px e altura 100%
const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
// essa parte estudar mais
export class SecaoComentario extends Component {
	state = {

	}

	onChangeComentario() {

	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={''}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
