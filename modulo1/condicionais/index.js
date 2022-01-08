//Exercício 1

// A) Ele pede ao usuário para digitar um número.
// Se o número for divisível por 2 - imprimi no console " Passou no teste"
// Senão " Não passou no teste".

//B) Para os tipos de números pares divisíveis por 2.
//C) Para os tipos de números ímpares que não são divisíveis por 2.

//Exercício 2

// A) Ele pede ao usuário um nome da fruta. Se for as quais ele identifica, imprimi
//o valor da fruta, senão estiver no escopo de frutas relacionadas o preço é 5.
// B) O preço da fruta maçã é R$ 2,25)
// C) O preço da fruta pêra é R$ 5,50 e 5,00

//Exercício 3

//A) Pedindo ao usuário para digitar um número
//B) 10 é maior que zero - Esse número passou no teste.
// não tem o comando "ELSE". Senão for maior que 10, dá erro, por naço ter o comando.
// não tem nenhum erro pois está chamando fora do escopo do if.

// Exercício de escrita de código

let idadeDoUsuario = Number (prompt("Qual a sua idade?"))
if (idadeDoUsuario >= 18) {
  console.log ("Parabéns, vá dirigir")
}else {
  console.log ("Espere seus 18 anos")
}

console.log (idadeDoUsuario)

// aqui poderia também criar uma função. Pois como a professora da última aula nos disse: Evite deixar uma variável solta

// Exercício 2

function verTurno (){
if (turnoDeEstudo.toUpperCase()=== "M") {
    console.log ("Bom dia estudante")

}else if (turnoDeEstudo.toUpperCase()=== "V") {
   console.log ("Boa tarde estudante")

}
else {(turnoDeEstudo.toUpperCase()=== "N")
   console.log ("Boa noite estudante")
}

}

let turnoDeEstudo =prompt ("Digite a primeira letra do turno que você estuda")
verTurno (turnoDeEstudo)

// Exercício 3

let periodo = prompt ("Qual é a inicial do turno que você estuda?")
let hora
switch (periodo) {
case "M":
    hora = "Matutino"
    break;
case "V":
    hora = "Vespertino" 
    break;
case "N":
    hora = "Noturno"
    break;       
}
console.log (hora)

//Exercício 4 + 1 parte do desafio

let generoFilme = prompt ("Qual o gênero de filme à assistir?")
let valorIngresso = Number (prompt ("Qual o valor do ingresso?"))
let comida = prompt ("Qual lanchinho você vai levar?")

if (generoFilme === "fantasia", valorIngresso <= 15 , comida){
   console.log ("Bom filme, aproveite o seu", comida)

}else {
      console.log("Vá a praia que é mais barato")

}




















