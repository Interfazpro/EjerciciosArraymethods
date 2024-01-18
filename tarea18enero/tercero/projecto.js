let phrase = 'La programación web es fundamental para el progreso en Visual Studio Code';

let cleanedPhrase = phrase.replace(/[.,;:!?]/g, '');



let words = cleanedPhrase.split(' ');

let wordsWithMoreThan3Letters = words.filter(word => word.length > 3);


alert('Palabras con más de 3 letras:', wordsWithMoreThan3Letters);