import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/88107710?v=4"
          nome="Maria Karolina Teixeira de Freitas" 
          descricao="Olá,sou Maria Karolina, 33 anos e moro em São Vicente/SP. Analista Financeira em transição de carreira para Web Full Stack.
          Gosto do cheiro de café e torta de limão.Estudante assídua de programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          email="E-mail: mar_krol@hotmail.com"
        />

         <CardPequeno
          endereco= "Endereço: Brasil"
        />

        

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="ModalGR" 
          descricao="Futura Desenvolvedora Front-End." 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-5.png"
          nome="Analista Financeira" 
          descricao="Contas, contas, contas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
