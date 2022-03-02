import axios from 'axios'
import './App.css';
import styled from 'styled-components'

const Usuarios = styled.div `
display:flex,
flex-direction center

`


function App() {
  return (
    <div className="App">

<div>
  <p>Labenubers</p>
</div>

 <Usuarios>
    <input placeholder='Nome'/>
    <input placeholder='E-mail'/>
    <button>enviar</button>
  </Usuarios>

</div>

)
}
  
 
export default App;
