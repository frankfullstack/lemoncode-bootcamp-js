// Calculator basic functions

const sum = (op1, op2) => op1 + op2;
const subtract = (op1, op2) => op1 - op2;
const multiply = (op1, op2) => op1 * op2;


const divide = (op1, op2) => {
    if (op2 !== 0) {
       return op1 / op2
    } else {
        throw new Error("You cannot divide by zero");
     }
}

// Usage examples

console.log(`The sum result of 1 and 2 is: ${sum(1, 2)}`)
console.log(`The subtract result of 5 and 3 is: ${subtract(5, 3)}`)
console.log(`The multiply result of 12 and 7 is: ${multiply(12, 7)}`)
console.log(`The division result of 5 and 2 is: ${divide(20, 5)}`)

try {
    console.log(`The division result of 5 and 2 is: ${divide(2, 0)}`)
} catch (error) {
    console.log(error)
}

