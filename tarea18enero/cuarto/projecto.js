const programmingBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    
    
  "Code Complete: A Practical Handbook of Software Constructi",
  
    "The Rust Programming Language",
  ];
  
  // Solicitar al usuario que ingrese un título
  

  let userInput = prompt("Ingrese un título de libro:");
  
  userInput = userInput.
  userInput = userIn
  
  userInput 
  
  
  toLowerCase();
  

  let libroEncontrado = false;
  
  for (let i = 0; i < programmingBooks.length; i++) {
    
    
    let libroActual = programmingBooks[i].toLowerCase();
  
    
   
  if (libroActual.includes(userInput)) {
      libroEncontrado = 
      libroEncontrado
  
      libroEnc
  
    
  true;
       
  break; // No es necesario seguir buscando una vez que se ha encontrado el libro
    }
  }
  
  
    
  
  // Mostrar el resultado
  if (libroEncontrado) {
    
    
  alert("El libro fue encontrado en la lista.");
  } 
  
  else {
    
    
  alert("El libro no fue encontrado en la lista.");
  }