



const programmingBooks = [
  
 
    "JavaScript: The Good Parts",
      "Clean Code: A Handbook of Agile Software Craftsmanship",
      "Code Complete: A Practical Handbook of Software Constructi",
   
      "The Rust Programming Language",
    ];
    
    // Buscar el índice de "You Don’t Know JS"
    let indiceLibro = programmingBooks.indexOf("You Don't Know JS");
    
    // Verificar si se encontró el libro y mostrar el resultado
    if (indiceLibro !== -1) {
      
   
    alert("El libro 'You Don't Know JS' se encuentra en la estantería número: " + indiceLibro);
    } else {
      
      
    alert("El libro 'You Don't Know JS' no se encontró en ninguna estantería.");
    }