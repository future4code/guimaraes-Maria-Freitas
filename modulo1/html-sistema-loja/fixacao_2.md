~~~
function calculaPrecoTotal(quantidade) {
  
  let compra = 0
  
  if (quantidade < 12) compra = quantidade * 1.3
  else compra = quantidade
  return compra
}
~~~