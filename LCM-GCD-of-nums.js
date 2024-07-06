
function findGCD(a, b) {
    if(b == 0){
        return a;
    } else {
        return findGCD(b, a % b );
    }
}

function findLCM(a, b) {
    return (a * b) / findGCD(a, b)
}

console.log('LCM', findLCM(10, 6))
console.log('GCD', findGCD(8, 16))