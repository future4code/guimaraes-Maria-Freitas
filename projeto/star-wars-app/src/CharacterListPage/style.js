import styled from "styled-components";
import fundo from '../assets/../img/img.jpg'



export const Fundo = styled.div `
  background-image: url(${fundo});
  width: 100%;
  min-height: 100vh;

`

export const CardHeader = styled.div `
display: flex;
justify-content: center;



h3{
  text-shadow:  0 3px #EEC900;
  color:white;
  font-size: 50px;

}


`
export const CardList =styled.div `
display: flex;
color: white;
border: 3px solid white;



`