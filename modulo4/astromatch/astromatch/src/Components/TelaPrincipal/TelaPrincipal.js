import React from "react"
import styled from "styled-components"



const HeaderCabecalho = styled.div `
display: flex;
justify-content: space-between;

`

const MainLayout =styled.div `



`

export function TelaPrincipal () {


return (
  <div>
    
    <HeaderCabecalho>
        <h3>Astromatch</h3>
        <button>match</button>
    </HeaderCabecalho>  

    <MainLayout>
       <p>TESTE</p>
    </MainLayout>  
        
    <footer>
      <button>X</button>
      <button>♥️</button>
    </footer>


  </div>
 )

}

