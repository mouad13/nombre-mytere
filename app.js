var solution = Math.floor(Math.random()* 4);
   
   console.log(solution);

   for (var i = 0; i < 3; i++) {
  
var response = prompt("choisir un chiffre entre 0 et 3")	
  
  console.log(response);
   	
   }

  if (response == solution) {
  	console.log("bravo")
  }

else if (response > solution) {
	console.log("plus grand")
   
   }
   if (response < solution) {
   	console.log("plus petit")
   }
