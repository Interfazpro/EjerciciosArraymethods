



const programmingBooks = [
  
 
    "JavaScript: The Good Parts",
      "Clean Code: A Handbook of Agile Software Craftsmanship",
      "Code Complete: A Practical Handbook of Software Constructi",
   
      "The Rust Programming Language",
    ];
    
    let indiceLibro = programmingBooks.indexOf("You Don't Know JS");
    
    if (indiceLibro !== -1) {
      
   
    alert("El libro 'You Don't Know JS' se encuentra en la estantería número: " + indiceLibro);
    } else {
      
      
    alert("El libro 'You Don't Know JS' no se encontró en ninguna estantería.");
    }
