
/**
 * Js array has a prototype method called reduce().
 * 
 * reduce((accumulator, iteration, index, array)=>{}, initValue) // take first two arguments
 * First argument is a callback function (take first two arguments as Required and other two as Optional)
 * Second argument is optional, this define initial value of the accumulator.
 * 
 * // Accumulator:
 * accumulator works as kind of global variable. 
 * The accumulator parameter is the single value that will be returned by the reduce() method. 
 * It will contain the value returned by the 
 * callback function in each iteration.
 * Default value is the first value of the array
 * 
 * // Iteration: This is represent current item or value of the array
 * 
 * // Index: This is represent current index of the array while iterating
 * 
 * // Array: Original array
 * 
 */

/************************************** Js array reducer example codes **************************************************/

//Find total of number s from the given array // arr=[1,2,3,4,5]
const arr = [1, 2, 3, 4, 5];
const totalFromArray = arr.reduce((acc, item) => acc += item, 0);
console.log('output :', totalFromArray); // output : 15

// find rounded value then sum // arr1 = [1.12, 2.34, 3.7865, 4.1232, 5.594]
const arr1 = [1.12, 2.34, 3.7865, 4.1232, 5.594];
const totalFromArrayByRound = arr1.reduce((acc, item) => acc += Math.round(item), 0);
console.log('output :', totalFromArrayByRound); // output : 17 // Math.round(3.7865)=4, Math.round(5.594)=6

// you are tasked to get the sum of the price property and get the total price from an array of objects
const arrObjs = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
];

const totalPriceFromArrayOfObjs = arrObjs.reduce((acc, item) => acc += item.price, 0);
console.log(totalPriceFromArrayOfObjs); // 6

// Example of Grouping similar items together using reduce()
const groupingArrInput = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
];

const groupingArrResult = groupingArrInput.reduce((acc, item)=>{if(!acc[item.category])acc[item.category] = []; acc[item.category].push(item.name); return acc}, {});

console.log(groupingArrResult); // { Fruit: [ 'Apple', 'Orange' ], Vegetable: [ 'Onion', 'Lettuce' ] }

// How to Remove Duplicates Using the reduce() Method
const duplicatesInArrInput1 = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const rmDuplicatesInArr1 = duplicatesInArrInput1.reduce((acc, item)=> { 
    if(!acc.includes(item)){
        acc.push(item);
    }
    return acc;
}, []);
console.log(rmDuplicatesInArr1); // [ 1, 2, 3, 7, 8 ]

const duplicatesInArrInput2 = [1, '2', 3, '1', 2, 3, '7', 8, 7];
const rmDuplicatesInArr2 = duplicatesInArrInput2.reduce((acc, item)=> { 
    const intItem = parseInt(item);
    const strItem = item.toString();
    if(!acc.includes(intItem) && !acc.includes(strItem)){
        console.log(typeof item, item)
        acc.push(item);
    }
    return acc;
}, []);
console.log(rmDuplicatesInArr2); // [ 1, 2, 3, 7, 8 ]


