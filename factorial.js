// calculate factorial of a number

function calFactorial(number) {
    if (!number || (typeof number !== 'number') || (number < 1)) {
        return 'Please enter valid number';
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

console.log(calFactorial(6))