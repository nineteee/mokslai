function calculate(num1, num2, operation) {
    try {
        let result;
        if (operation === '+') {
            result = num1 + num2;
        } else if (operation === '-') {
            result = num1 - num2;
        } else if (operation === '*') {
            result = num1 * num2;
        } else if (operation === '/') {
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            result = num1 / num2;
        } else {
            throw new Error("Invalid operation");
        }
        return result;
    } catch (error) {
        console.error(error.message);
    }
}
console.log(calculate(10, 2, "+"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, 0, "/"));
console.log(calculate(10, 2, "&"));
