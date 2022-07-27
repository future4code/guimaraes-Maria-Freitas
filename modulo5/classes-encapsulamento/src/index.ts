//Exercício 1

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    // A) O Constructor executa o que colocamos na Class. Sempre que tiver a class, tem que ter um constructor
    // B) Uma vez só. Criei uma instância dessa classe como dadosPessoais e nela atribui valores.
    // C) Acessamos com this.
    // É de boas práticas colocar cada Class em um arquivo diferente, porém nesse exercício coloquei no index.ts

     
    constructor(

       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getCpf():string{
     return this.cpf
    }
  
    getName():string{
        return this.name
    }
    
    getAge():number{
        return this.age
    }   

    setName = (newName:string)=>{
      this.name = newName

    }
   
    setAge = (newAge:number)=> {
     this.age = newAge

    }

    setCpf = (newCpf:string)=>{
     this.cpf = newCpf
    }

  }

  const dadosPessoais = new UserAccount("11111", "Maria",34)
  dadosPessoais.setName("Tiago")
  dadosPessoais.setAge(30)
  dadosPessoais.setCpf("22222")

  console.log(dadosPessoais)

  //Exercício 2

  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

   getDate():string{
    return this.date      
   }

   getValue():number{
    return this.value      
   }

   getDescription():string{
    return this.description  
    
   }

   setDate = (newDate:string)=>{
    this.date = newDate
   }
   
   setValue = (newValue:number)=>{
    this.value = newValue
   }
  
   setDescription = (newDescription:string)=>{
    this.description = newDescription
   }


  }

  const transaçõesPessoais = new Transaction("12/07/2022" , 1000 , "Transferência")
  transaçõesPessoais.setDate("03/02/1993")
  transaçõesPessoais.setValue(5000.00)
  transaçõesPessoais.setDescription("Vai dar certo")

  console.log(transaçõesPessoais)

  // falta entender essa última parte

  //Exercício 3

  class Bank {
    private accounts: UserAccount[];
    private name: string
    private age: number
    private cpf: string
    private date:string
    private description:string
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    getName():string{
        return this.name     
       }
    
       getAge():number{
        return this.age     
       }
    
       getCfp():string{
        return this.cpf  
       }

       getDate():string{
        return this.date 
       }

       getDescription():string{
        return this.description
       }
  
  
  }