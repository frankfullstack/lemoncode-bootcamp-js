validateNumber = (event) => {
    //event.preventDefault();
    if (isNaN(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    }
}

// Get elements from the DOM

const sumOperationBtn = document.querySelector(".sum button")
const subtractOperationBtn = document.querySelector(".subtract button")
const multiplyOperationBtn = document.querySelector(".multiply button")
const divideOperationBtn = document.querySelector(".divide button")

const resultElement = document.querySelector(".result")
const resultValue = document.querySelector(".result__value")
const resultErrorElement = document.querySelector(".result-error")
const resultErrorMessage = document.querySelector(".result-error__message")

// Calculator basic functions

const sum = (op1, op2) => op1 + op2;
const subtract = (op1, op2) => op1 - op2;
const multiply = (op1, op2) => op1 * op2;
const divide = (op1, op2) => {
    if (op2 !== 0) {
        return op1 / op2
    } else {
        const resultElement = document.querySelector(".result")
        const resultErrorElement = document.querySelector(".result-error")
        resultErrorElement.classList.add("visible")
        resultErrorElement.classList.remove("hidden")
        resultElement.classList.remove("visible")
        resultElement.classList.add("hidden")
        resultErrorMessage.innerHTML = "No se puede dividir por cero"
    }
}

const hasErrors = () => {
    const operator1Value = parseFloat(document.querySelector(".operator-1").value)
    const operator2Value = parseFloat(document.querySelector(".operator-2").value)

    const resultElement = document.querySelector(".result")
    const resultErrorElement = document.querySelector(".result-error")

    const resultErrorMessage = document.querySelector(".result-error__message")
    resultErrorMessage.innerHTML = `Por favor, rellene los operadores para realizar los
    c&aacute;lculos`

    if (isNaN(operator1Value) || isNaN(operator2Value)) {
        resultErrorElement.classList.add("visible")
        resultErrorElement.classList.remove("hidden")
        resultElement.classList.remove("visible")
        resultElement.classList.add("hidden")
        return true;
    }
        resultErrorElement.classList.remove("visible")
        resultErrorElement.classList.add("hidden")
        resultElement.classList.add("visible")
        resultElement.classList.remove("hidden")
        return false;
    

}

const handleSum = (event) => {
    const operator1Value = parseFloat(document.querySelector(".operator-1").value)
    const operator2Value = parseFloat(document.querySelector(".operator-2").value)
    //console.log(hasErrors(), operator1Value, operator2Value, sum(operator1Value, operator2Value))

    if (!hasErrors()) {
        const result = sum(operator1Value, operator2Value)
        resultValue.innerHTML = (Number.isSafeInteger(result)) ? result : result.toFixed(3)
    }

}

const handleSubtract = (event) => {
    const operator1Value = parseFloat(document.querySelector(".operator-1").value)
    const operator2Value = parseFloat(document.querySelector(".operator-2").value)

    if (!hasErrors()) {
        const result = subtract(operator1Value, operator2Value)
        resultValue.innerHTML = (Number.isSafeInteger(result)) ? result : result.toFixed(3)
    }
}

const handleMultiply = (event) => {
    const operator1Value = parseFloat(document.querySelector(".operator-1").value)
    const operator2Value = parseFloat(document.querySelector(".operator-2").value)

    if (!hasErrors()) {
        const result = multiply(operator1Value, operator2Value)
        resultValue.innerHTML = (Number.isSafeInteger(result)) ? result : result.toFixed(3)
    }
}

const handleDivide = (event) => {
    const operator1Value = parseFloat(document.querySelector(".operator-1").value)
    const operator2Value = parseFloat(document.querySelector(".operator-2").value)

    if (!hasErrors()) {
        try {
            const result = divide(operator1Value, operator2Value)
            resultValue.innerHTML = result.toFixed(3)    
        } catch (error) {
            console.error("No se puede dividir entre cero")
        }
    }
}

sumOperationBtn.addEventListener("click", handleSum);
subtractOperationBtn.addEventListener("click", handleSubtract);
multiplyOperationBtn.addEventListener("click", handleMultiply);
divideOperationBtn.addEventListener("click", handleDivide);

