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

console.log(add(4, 3));
console.log(add(5,9));
console.log("subtract: " + subtract(10, 5));
console.log("multiply: " + multiply(4, 5));
console.log("divide: " + divide(20, 4));