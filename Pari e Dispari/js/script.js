const userOddEven = prompt("La somma sarà pari o dispari?")
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"))

const computerNumber = generateRndNum(1, 5)
console.log(userOddEven, userNumber, computerNumber);

const numberSum = userNumber + computerNumber;
console.log(numberSum)
const oddEven = oddEvenNumberChecker(numberSum)
console.log(oddEven)

let resultString = ("Hai perso")
if (userOddEven === oddEven) {
    resultString = ("Hai vinto")
}
console.log(resultString)

const result = document.querySelector(".result")
result.innerHTML = resultString

// Functions

/**
 * Genera un numero casuale tra un numero minimo e uno massimo
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function generateRndNum(min, max) {
    const rndNum = Math.floor(Math.random() * (max - min) ) + min;
    return rndNum
}

/**
 * Se il numero è pari restituisce stringa "pari" altrimenti stringa "dispari"
 * @param {number} number
 * @returns {string}
 */
function oddEvenNumberChecker(number) {
    let oddEven = "dispari"
    if (number % 2 === 0) {
        oddEven = "pari"
    }
    return oddEven
}