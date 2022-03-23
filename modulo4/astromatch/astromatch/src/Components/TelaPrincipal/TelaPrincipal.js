import React from "react"
import styled from "styled-components"

const AppContainer =styled.div `
border: 1px solid #8B8989;
height: 70vh;
width: 300px;
margin: auto;
margin-top: 30px;
background-color: #EEE5DE;
display: grid;
grid-template-rows: 1fr 40fr 290fr;
grid-auto-rows: 70px;




h3 {
 margin: 5px;
 color: red;
 padding-left: 90px;
   
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
  
const executaMatch = () => {



}




return (
    <div>
          
        <AppContainer>
            <h3>AstroMatch</h3>
            <button>♥️</button>

          <AppMain>
           <p>teste</p> 
          </AppMain>

          <AppFooter>
            <button onClick={executaMatch}>♥️</button>
            <button>X</button>
          </AppFooter>
          
      </AppContainer>

         
    </div>
 )

}

