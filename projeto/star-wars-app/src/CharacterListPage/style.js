import styled from "styled-components";
import fundo from '../assets/../img/img.jpg'


export const Fundo = styled.div `
  background-image: url(${fundo});
  width: 100%;
  height: 150vh;

`

export const CardHeader = styled.div `
display: flex;
justify-content: center;



h1{
  text-shadow: 0 0 20px #FFFF00;
  color:#E8E8E8;
  font-size: 120px;
  padding: 50px;
  
  

}

h4{
  color: white;
  margin: 50px;
  margin-top: 40px;
  font-size: 25px;

}

button{
width: 100px;
border-radius: 10px;
border:white;
padding: 10px;
height: 40px;
margin-top: 40px;
margin-left: 100px;

}

`
export const CardList =styled.div `
display: flex;
flex-wrap: wrap;
padding: 30px;
margin-left: 15px;
color: white;
justify-content: center;


p{
  
  margin: 25px;
  width: 200px;
  height:103px;
  font-size:25px;
}



`