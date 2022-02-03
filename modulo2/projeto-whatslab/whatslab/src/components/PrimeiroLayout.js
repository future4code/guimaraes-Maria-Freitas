import React from 'react'
import styled from 'styled-components';


const FundoLayout = styled.div`
 width:500px;
 height:550px;
 border: 1px solid; 
 border-color: black;
 margin-left:350px;

`

const onClickBotao = () => {
  alert ('enviado')
}

function PrimeiroLayout() {
    return (
      <div>
         <p>Projeto Whatslab</p>
         <button onClick={onClickBotao}>Enviar</button>
         <FundoLayout/>
      </div>
    )
  }

export default PrimeiroLayout

