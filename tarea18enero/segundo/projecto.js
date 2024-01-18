

let phrase = 'La programación web es fundamental para el progreso en Visual Studio Code';




let cleanedPhrase = phrase.replace(/[.,;:!?]/g, '');




let words = cleanedPhrase.split(' ');




alert('La frase tiene ' + words.length + ' palabras.');