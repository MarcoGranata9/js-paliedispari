const userWord = prompt("Inserisci una parola ti dirò se è palindroma o no")
console.log(userWord)

palindromeWordCheck(userWord)


// Functions
/**
 * Funzione che cicla una stringa al contrario e che stampa in console se è palindroma oppure no 
 * @param {string} word
 * @returns {any}
 */
function palindromeWordCheck(word) {
    let invertedWord = ""

    for (let i = word.length - 1; i >= 0; i--) {
        const currentLetter = word[i];
        console.log(currentLetter);
    
        invertedWord += `${currentLetter}`
        console.log(invertedWord)     
    }

    if (invertedWord === word) {
        console.log("Palindroma")
    } else {
        console.log("Non palindroma")
    }
}