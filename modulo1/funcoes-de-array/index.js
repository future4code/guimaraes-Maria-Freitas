  // Exercício 1
  // Ele irá mostrar todos os usuários, começando com nome, apelido de cada um
  // na posição 0. O comando map, faz a verificação de cada intem dentro da lista.

  // Exercício 2
  // O comando map irá verificar cada item do meu array, porém irá me retonar
  //apenas o nome. Sendo impresso apenas os nomes da minha lista.

  // Exercício 3
  // O comando filter, retira itens do meu array.
  // Nesse caso o exercício pede que retorne apenas o que for
  // diferente ao item apelido Chijo. No console log, aparecerá
  // os outros usuários,sendo nome e apelido.

  // Exercício de escrita e código.

  const nomeDog = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"}
  ]
  
  const array = nomeDog.filter ((animal1,animal2,animal3) => {
    return animal1.raca === "Salsicha"
  })

  console.log (array)

 const novoArray = nomeDog.filter ((dog, indice, array) => {
   //return dog.raca === "Poodle"
      
 })
       
   console.log ("Você ganhou um cupom de desconto de 10% para tosar o/a:" + novoArray )

  
  
  