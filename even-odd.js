// Find a number is Even or Odd type

function isEven(number) {
    if (number % 2 === 0) return true;

    return false;
}

function isOdd(number) {
    if (number % 2 !== 0) return true;

    return false;
}

const num = 7;

console.log('This number is even: ', isEven(num), `// ${num}`);
console.log('This number is odd', isOdd(num), `// ${num}`);