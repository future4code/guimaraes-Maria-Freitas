import styled from "styled-components";

// mesmo minhas páginas sendo da mesma cor, estilização de botões, não sei como fazer:
// 1) criar uma pasta styled única para todos, e ir importando/exportando. Porém cada página se faz com flex 
//diferente, pois tem imputs de formulários.
// código muito verboso, melhorar isso.



export const ContainerPai=styled.div `
 border: 1px solid #8B4726;
 height: 600px;
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-color: #FFD39B;


h1{
  color:#8B3A3A;
 }

`

export const ContainerBotao=styled.div `
display: flex;
margin-left: 10px;
/* border: 1px solid; */
width: 200px;


button {
font-size: 15px;
color: #FFD39B;
background-color:#8B4726;
}


`
export const ContainerLogin=styled.div `
 border: 1px solid;
 height: 600px;
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

`

export const ContainerList=styled.div `
background-color: #FFD39B;
height: 600px;
display:flex;
flex-direction: column;
align-items: center;


h1{
  color:#8B3A3A;
 }

`
export const ContainerApplication=styled.div `
border: 1px solid #8B4726;
 height: 600px;
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-color: #FFD39B;
`