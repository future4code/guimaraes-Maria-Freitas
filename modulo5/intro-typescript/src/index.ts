//Exercício 1

function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if(a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
    console.log(checaTriangulo(12,7,9))
  }

//Exercício 2

    function imprimeTresCoresFavoritas():void {
    const cor1: string = prompt("Insira sua primeira cor favorita")
    const cor2: string = prompt("Insira sua segunda cor favorita")
    const cor3: string= prompt("Insira sua terceira cor favorita")
    let array: string [] = [cor1 , cor2 , cor3]
    console.log([cor1, cor2, cor3])
 }

 //Exercício 3

 function checaAnoBissexto(ano:number):boolean{
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean= (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1|| cond2
 }

 //
 //Exercício 4