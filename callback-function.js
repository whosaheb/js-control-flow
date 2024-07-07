/**
 * Sequence Control
 * Sometimes you would like to have better control over when to execute a function.
 * Suppose you have two function
 */

function printResult(something) {
    console.log(something);
}

function myCalculator1(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

/** you want to do a calculation, and then display the result. */
const myCalculateValue = myCalculator1(2, 3);
printResult(myCalculateValue);

/** 
 * Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (printResult): 
 * is that you cannot prevent the calculator function from displaying the result.
*/
function myCalculator2(num1, num2) {
    let sum = num1 + num2;
    printResult(sum)
};
myCalculator2(5, 2);

/******************************************** Now it is time to bring in a callback. ********************************* 
 * 
 * A callback is a function passed as an argument to another function.
 * 
*/
function myCalculator3(num1, num2, myCallback) {
    let sum = num1 + num2;
    if (myCallback) myCallback(sum);
}

myCalculator3(5, 10, printResult);


