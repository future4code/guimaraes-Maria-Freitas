// A propriedade é argv - recebemos em []
//Os dois primeiros argumentos são fixos.
//1° argumento - NODE
//2° argumento - O ARQUIVO QUE VAMOS EXECUTAR
// NODE - INDEX.JS

// No meu terminal, para acessar os parâmetros coloco os argumentos que preciso,sendo os dois primeiros fixos.


//Exercício 1
// const nome= process.argv[2];
// const idade= Number(process.argv[3]);
// const futuro= idade + 7;
// console.log(`Olá ${nome}! Você tem ${idade}`)
// console.log(`Olá ${nome}, você tem ${idade} e daqui sete anos terá ${futuro}anos`)

//Exercício 2

// const num1= Number(process.argv[2]);
// const num2= Number(process.argv[3]);

// console.log(`A soma dos números é ${num1 + num2}`);
// console.log(`A subtração dos números é ${num1 - num2}`);
// console.log(`A multiplicação dos números é ${num1 * num2}`);
// console.log(`A divisão dos números é ${num1 / num2}`);

//Exercício 3

const tarefa= process.argv[2]
const listaTarefa= process.argv[3]

console.log(`A tarefa à se fazer é ${tarefa}`);
console.log(`A tarefa à se fazer é ${tarefa} e ${listaTarefa}`)