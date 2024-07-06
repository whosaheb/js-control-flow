// check whether a number is Positive, Negative or Zero

function checkNumber(number) {
    if(!number || (typeof number !== 'number')){
        return 'Please enter valid number';
    }

    if(number === 0) return 'This is a Zero';

    if( number < 0) return 'This is a negative number';

    if( number > 0) return 'This is a positive number';
}

console.log(checkNumber(9));    // This is a positive number