
// check a number is prime or not
function isPrime(num) {
    // if(!number || (number <= 1)){
    //     return false;
    // }
    // // looping through 2 to number-1
    // for (let i = 2; i < number; i++) {
    //     if (number % i == 0) {
    //         return false;
    //     }
    // }
    // return true;
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === false) return false;
    for (let i = 5; i * i <= num; i += 6) {
        console.log(i, num);
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
// console.log(isPrime(3)); // true

// Find first N th no of prime number
function printNPrimes(n) {
    let count = 0;
    let number = 2;
    const primes = []
    while(count < n) {
        if(isPrime(number)){
            primes.push(number);
            number ++;
            count ++;
        } else number ++;
    }

    console.log(primes);
}

printNPrimes(8)