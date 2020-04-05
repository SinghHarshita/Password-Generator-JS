const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

const form = document.getElementById('passForm')
const includeUpperCaseElement = document.getElementById('includeUppercase')
const includeSymbolsElement = document.getElementById('includeSymbols')
const includeNumbersElement = document.getElementById('includeNumbers')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHight(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHight(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHight(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHight(33, 47).concat(
    arrayFromLowToHight(58, 64)
).concat( 
    arrayFromLowToHight(91, 96)
).concat(
    arrayFromLowToHight(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


form.addEventListener('submit', e => {
    e.preventDefault()
    const charAmt = characterAmountNumber.value
    const includeUpperCase = includeUpperCaseElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const includeNumbers = includeNumbersElement.checked

    const password = generatePassword(charAmt, includeUpperCase, includeNumbers, includeSymbols)

    passwordDisplay.innerText = password
})

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

function generatePassword(charAmt, includeUpperCase,includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    
    // Include upper case characters
    if (includeUpperCase) {
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    }

    // Include numbers
    if (includeNumbers) {
        charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    }

    // Include symbols
    if (includeSymbols) {
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    }

    const passwordChar = []
    for (let i = 0; i < charAmt; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]

        passwordChar.push(String.fromCharCode(characterCode))
    }

    return passwordChar.join('')
}

function arrayFromLowToHight(low, high) {
    const array = []
    for (let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}