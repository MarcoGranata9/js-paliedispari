const userWord = prompt("Inserisci una parola ti dirò se è palindroma o no")
console.log(userWord)

const stringResult = palindromeWordCheck(userWord)
console.log(stringResult);

document.querySelector(".result").innerHTML = stringResult



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

    let stringResult = ""
    if (invertedWord === word) {
        stringResult = "Palindroma"
    } else {
        stringResult = "Non palindroma"
    }
    return stringResult
}