/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert ("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer jogar?")) {
 true
 console.log ("Vamos começar")
} else {
 false
 console.log ("O jogo acabou")
}


let cartaUsuario1 = comprarCarta()
console.log (`Usuario, cartas: ${cartaUsuario1.texto} , pontuacao: ${cartaUsuario1.valor}`)

let cartaUsuario2 = comprarCarta()
console.log (`Usuario, cartas: ${cartaUsuario2.texto} , pontuaçao: ${cartaUsuario2.valor}`)

let cartaComputador1 = comprarCarta()
console.log (`Computador, cartas: ${cartaComputador1.texto} , pontuacao: ${cartaComputador1.valor}`)

let cartaComputador2 = comprarCarta()
console.log (`Computador, cartas: ${cartaComputador2.texto} , pontuacao: ${cartaComputador2.valor}`)


if (cartaUsuario1 + cartaUsuario2 < cartaComputador1 + cartaComputador2){
 console.log (" O usuario ganhou!")

} else if ( cartaUsuario1 + cartaUsuario2 > cartaComputador1 + cartaComputador2){
 console.log (" O computador ganhou!")

} else (cartaUsuario1 + cartaUsuario2 === cartaComputador1 + cartaComputador2)
  console.log ("Empatamos!")


