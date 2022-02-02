import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
//Temos uma varíavel camelcase estilizando uma div e colocando o display flex - dois blocos lado à lado


const IconImage = styled.img`
	margin-right: 5px;
`

// variaável camelcase estilizando uma imagem, 5 px margem direita

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}

// exportando a função camelcase colocando a props como parâmetro 
//retornando a variável criada como display flex passando no alt o ícone, mostrando no src o caminho e dando o onclick
