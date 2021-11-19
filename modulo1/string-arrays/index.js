// Exercício 1

// A - No console executaria a letra a, pois está na string e a lista.
// B - O Array é nulo, não sei se nesse caso daria erro. No console log executaria a letra b pois está na string
// c - O comando length é quando conta cada caractere até mesmo os espaço e no console executaria a letra c e contaria a quantidade.
// D - Declarei uma variável i dando o valor de 0. No console executaria a letra d pois está na string mais a lista array na variável 0 que declarei.
// E - Tenho uma função array onde estão meus números onde chamaria a variável let + 1, a "parte 19" não entendi a lógica
// F - criei uma variável valor e atribui a minha lista array i = 0 + 6 que seria o valor 0 na posição 6
//
// o valor impresso seria: "Subi num ônibus em Mirrocos"
// Primeiro pedi ao meu usuário que digitasse uma frase. Depois no console a frase seria todos em caracteres maiúsculos pela toUpperCase,
// trocaria as letras 'A" pela "I" tendo que ser em letras maiúsculas pois já pedi para ser e o último conta quantos caracteres tem, por lenght


// Exercício de escrita 1

let seuNome =prompt ("Qual o seu nome?")
let seuEmail =prompt ("Qual o seu e-mail?")
console.log (`O e-mail ${seuEmail} foi cadastrado com sucesso. Seja bem vinde,
${seuNome}`)

//Exercício de escrita 2

const comidasPreferidas = ["Macarrão" , "estrogonofe de shimeji" , "ovo frito" , "hambúrguer" , "batata frita"]
console.log (comidasPreferidas)

console.log (comidasPreferidas[0])
console.log (comidasPreferidas[1])
console.log (comidasPreferidas[2])
console.log (comidasPreferidas[3])

console.log ("Essas são minhas comidas preferidas:" [0 , 1 , 2 , 3])

comidasPreferidas[1] =prompt(" Qual a sua comida preferida?")
console.log (comidasPreferidas)



// Exercício de escrita 3

let listaDeTarefas = []

listaDeTarefas[0] =prompt ('Diga uma tarefa')
listaDeTarefas[1] =prompt ('Diga uma tarefa')
listaDeTarefas[3] =prompt ('Diga uma tarefa')

let indice = prompt ('Digite o índice da tarefa que você realizou:0 para ${listaDeTarefas[0]}, 1 para ${listaDeTarefas[1]} e 2 para ${listaDeTarefas[2]}')
const indiceNumero =Number (indice)

console.log (listaDeTarefas)
listadeTarefa.splice (indice ,1)




//Desafio
//const frase = ("Você está bem?")
//const array = frase.split {" "}
//console.log (array)

// Dei o máximo nesse exercício. Fritei a cabeça e preciso estudar mais.
