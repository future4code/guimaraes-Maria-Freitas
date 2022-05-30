//Exercício 1 a)

import { isMethodDeclaration } from "typescript";

// let minhaString: string = 5

// Ele não aceita, pois estou tipando uma string ou seria um number.


//Exercício 1 b)

// let meuNumero: number =10,
// let meuNumero: number | string | undefined

//Exercício 1 c)

type Person={
 nome: string,
 idade: number,
 corFavorita:string

}

const Pessoa:Person ={
 nome:"Maria",
 idade:33,
 corFavorita: "verde"
}
console.log(Pessoa)

enum LabenuClass {
MARIA= "Maria",
IDADE= 33,
VERDE= "Verde"
}

const coresFavoritas={
class:LabenuClass.VERDE
}

console.log(coresFavoritas)