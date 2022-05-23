import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTripPage= () => {
    const navigate = useNavigate ()

    const goLoginPage= () => {
     navigate (-3)
    }

     const goTripPages = () => {
      navigate (-1)

     }


// essa parte preciso que cada input consiga flegar cada campo que preciso
//botão enviar não vai para nenhum lugar.
//lembrar de como cria o alert (enviado com sucesso - mensagem)


 return (
  <div>
    <h1> Formulário para o Administrador</h1>
    <button onClick={goTripPages}>voltar</button>
    <button onClick={goLoginPage}>logout</button>
    <button>enviar</button>
    <p>Nome</p>
    <input placeholder='nome'/>
    <p>Escolha um planeta</p>
    <input placeholder='Qual seu planeta?'/>
    <p>Data da sua viagem</p>
    <input placeholder='Data'/>
    <p>Descrição</p>
    <input placeholder='Descrição da sua viagem'/>
    <p>Duração da alegria</p>
    <input placeholder= 'Duração da sua viagem'/>
  </div>   


 )


}

export default CreateTripPage

//página da criação do formulário, inputs de formulário, botão de enviar e voltar para home.