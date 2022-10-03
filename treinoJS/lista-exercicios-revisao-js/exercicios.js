// EXERCÍCIO 01
function inverteArray(array) {
return array.reverse()
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
const pares=retornaNumerosPares(array)
const elevados =pares.map((n)=> {
 return n ** 2

})
return elevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const pares= array.filter((n)=>{
    return n % 2 === 0
  })
 return pares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  // const maior= numeroMaior(array);
  // const ultimo= maior.length -1;
  // return maior[ultimo]

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 return array.includes()
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
const arrayNumero= retornaArray(array)
const maior= arrayNumero[arrayNumero.length - 2]
const menor=arrayNumero[1]
return[maior, menor];

}



// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
   if(arrayDePessoas > 18){
   console.log (`Você é maior de ${maioresDe18}`)
  }else {
     console.log("Você não é maior de 18")
   }
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
