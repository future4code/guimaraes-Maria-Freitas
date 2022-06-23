export type Cliente = {
    nome: string,
    cpf: string,
    dataNascimento: string,
    saldo: number,
    extrato: Transacoes[]
}

export type Transacoes ={
valor: number,
data: string,
descrição:string

}

export const usuario:Cliente[]= [

 {
  nome:"Maria",
  cpf: "02619033303",
  dataNascimento:"20/06/1988",
  saldo:5000.00,
  extrato:[]

 },

 {
    nome:"Jasmim",
    cpf: "41519666796",
    dataNascimento:"03/02/1993",
    saldo:8000.00,
    extrato:[]
 },
  
  
 {
    nome:"Marcos",
    cpf: "1968486548",
    dataNascimento:"10/09/1993",
    saldo:6000.00,
    extrato:[]
 },

]