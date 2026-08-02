function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            throw new Error("Invalid operation");
    }
}

function main() {
    const a = 10;
    const b = 5;

    console.log("Addition: " + calculate(a, b, 'add'));
    console.log("Subtraction: " + calculate(a, b, 'subtract'));
    console.log("Multiplication: " + calculate(a, b, 'multiply'));
    console.log("Division: " + calculate(a, b, 'divide'));
}

main(); 
console.log(calculate(4, 3, 'add'));
console.log(calculate(5, 9, 'add'));
console.log("subtract: " + calculate(10, 5, 'subtract'));
console.log("multiply: " + calculate(4, 5, 'multiply'));
console.log("divide: " + calculate(20, 4, 'divide'));