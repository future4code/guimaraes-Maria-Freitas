import React from "react"
import styled from "styled-components"
import axios from 'axios'

const AppContainer =styled.div `
border: 2px solid red;
height: 70vh;
width: 300px;
margin: auto;
margin-top: 30px;
background-color: #EEE5DE;

`

const AppHeader =styled.div `
display: flex;
/* flex-direction: row; */
justify-content: space-around;



h3 {
 margin: 5px;
 color: red;
 padding-left: 55px;
   
}

button {
 margin-top: 5px;
 color: red;
 border-radius: 50%;
 width: 30px;
 height: 30px;
 font-size: 20px;
 border: 1px solid red;

}

`
const AppMain = styled.div `
 


`

const AppFooter = styled.div `
 display: flex;
 justify-content: space-evenly;
 
 
 

button{
 border-radius: 50%;
 width: 50px;
 height: 50px;
 border: 1px solid red;
 font-size: 35px;
 transform: scale(0.9);
 
}



`




export function TelaPrincipal () {
  
const executaMatch = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"


const profile = [
  {
    id: "xUrxMGvODWZa4ZASbfwx",
    age: 26,
    name: "Carol Danvers",
    photo: "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
    bio: "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."
 },
 {

    id: "71gMbZs2txS9LDvGK5Ew",
    age: 26,
    name: "Anitta",
    photo: "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
    bio: "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
},

]

const ProfileToChoose = () => {
 axios
 .get (executaMatch,profile)
 .then (()=> {})
}





return (
    <AppContainer>
                
         <AppHeader>
            <h3>AstroMatch</h3>
            <button>♥️</button>
         </AppHeader>
{/* 
          <AppMain>
            <p>teste</p> 
          </AppMain> */}

          <AppFooter>
            {/* <button class="sc-gZMcBi fRXBMM">♥️</button>
            <button class="sc-gZMcBi lbldej">X</button> */}
          </AppFooter> 
               
    </AppContainer>
 )

}

