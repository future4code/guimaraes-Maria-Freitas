import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Icone from ' ./IconeComContador'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha','Leandro' ,'Mário'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
          contador= {'IconeComContador'}
        />
      </MainContainer>
    );
  }
}

export default App;
