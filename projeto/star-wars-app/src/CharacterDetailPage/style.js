import styled from "styled-components";
import fundo from '../assets/../img/img.jpg'


export const Container = styled.div `
color: white;
background-image: url(${fundo});
width: 100%;
height: 100vh;


`
export const Imagem =styled.div`
display: flex;
/* width: 40px; */
height:100px;
left:40px;

`


export const ContainerDetails = styled.div`
flex-direction: column;
justify-self: center;
height: 657px;


button{
width: 80px;
border-radius: 10px;
border:white;
padding: 10px;


}

p{
  margin: 35px;
  font-size: 20px;
 
}

h1{
  text-shadow: 0 0 20px #FFFF00;
  color:#E8E8E8;
  font-size: 70px;
  padding: 50px;
  
}


`