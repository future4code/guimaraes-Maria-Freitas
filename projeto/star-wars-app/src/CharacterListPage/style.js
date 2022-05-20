import styled from "styled-components";
import fundo from '../assets/../img/img.jpg'



export const Fundo = styled.div `
  background-image: url(${fundo});
  width: 100%;
  height: 100vh;

`

export const CardHeader = styled.div `
display: flex;
justify-content: center;


h1{
  text-shadow:  0 4px #EEC900;
  color:white;
  font-size: 60px;
  padding: 50px;

}

h4{
  color: white;
  margin: 30px;

}


`
export const CardList =styled.div `
display: flex;
flex-wrap: wrap;
color: white;
justify-content: center;



p{
  
  margin: 15px;
  width: 200px;
  height:20px;
  font-size:18px;
}

button{
width: 100px;
border-radius: 10px;
border:white;
padding: 10px;
height: 50px;
}


`