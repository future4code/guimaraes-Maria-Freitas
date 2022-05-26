import styled from "styled-components";
import fundo from '../assets/../img/img.jpg'


export const Container = styled.div `
display: flex;
flex-direction: column;
justify-self: center;
color: white;
background-color:black;
height: 657px;
background-image: url(${fundo});

img{
height: 300px;
width: 200px;

}

button{
width: 80px;
border-radius: 10px;
border:white;
padding: 10px;

}

p{
  margin: 25px;
  font-size: 20px;
 
}

h1{
  text-shadow:  0 2px #B8860B;
  color:white;
  font-size: 25px;
  padding: 30px;
}


`
export const Imagem= styled.div `
display: flex;
flex-direction: end;

`