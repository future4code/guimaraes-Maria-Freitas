function calculaNota(ex, p1, p2) {
  
 let mediaNota = (ex + p1 + p2) / 3
  
 let conceito = if (mediaNota >= 9){
   return A
 } else if (mediaNota < 9 && >= 7.5) {
   return B
 } else if (mediaNota < 7.5 && >= 6) {
   return C
 } else 
   return D}
  
  
  return conceito 

  }

  // não rolou esse exercício hoje.