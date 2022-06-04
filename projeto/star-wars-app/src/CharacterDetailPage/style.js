import styled from "styled-components";
import fundo from '../assets/../img/img.jpg'


export const Container = styled.div `
color: white;
background-image: url(${fundo});
width: 100%;
height: 100vh;
display: flex;


`
export const Imagem =styled.div`
margin-top: 40px;


`
export const ContainerDetails = styled.div`
flex-direction: column;
justify-self: center;



button{
width: 70px;
border-radius: 10px;
border:white;
padding: 5px;
margin:5px;


}

p{
  margin: 35px;
  font-size: 30px;

   
}

h1{
  text-shadow: 0 0 20px #FFFF00;
  color:#E8E8E8;
  font-size: 50px;
  padding: 50px;
  
}


`