/******************
 * Q: 
 *    Trapping Rainwater Problem states that given an array of N non-negative integers arr[] representing an elevation map where 
 * the width of each bar is 1, compute how much water it can trap after rain.
 * 
 * A: 
 *    as example heights = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 
 *                            3|               ✅
 *                            2|      ✅ ☰☰☰ ✅✅☰✅
 *                            1|  ✅☰✅✅☰✅✅✅✅✅✅
 *                       index --0-1-2-3-4-5--6-7-8--9-10-11
 * 
 * For solution i am going to check.......... 
 * 1. each height, left value max and right value max.
 * 2. After that I check min between (left-max) and (right-max) and store as max-water-limit
 * 3. And subtract current height from max-water-limit which is the actual water-count 
 * This will give water-count for each height from the heights array
 * 
 */

/************************  INPUT DATA  ************************/
const heights1 = [0,1,0,2,1,0,1,3,2,1,2,1];

const heights2 = [4, 2, 0, 3, 2, 5];

/************* Below code demonstrate solution based on time_complexity = O(N2) and space_complexity = O(1) */

function countTotalWater(array) {
    const arrayLength = array.length;
    let countWater = 0;

    for (let index = 0; index < arrayLength; index++) {
        const height = array[index];

        // For each hight from array we find leftMax
        let leftMax = array[0];
        for (let j = 1; j <= index; j++) {
            leftMax = Math.max( leftMax, array[j]);
        }

        // For each hight from array we find rightMax
        let rightMax = height;
        for (let j = (index + 1); j < arrayLength; j++) {
            rightMax = Math.max(rightMax, array[j]);
            // if(index === 6) console.log(rightMax)
        }

        // console.log(leftMax, rightMax, height);
        countWater += (Math.min(leftMax, rightMax)) - height;
    }

    return countWater;
}

console.log('output: ',countTotalWater(heights2));

/************* Above code demonstrate solution based on time_complexity = O(N2) and space_complexity = O(1) */


/************ Below code demonstrate solution based on time_complexity = O(0) and space_complexity = O(n) */

function leftMaxArr(arr) {
    const returnArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        returnArr.push(Math.max(arr[i], returnArr[i - 1]));
    }

    return returnArr;
}

function rightMaxArr(arr) {
    const returnArr = []; //= [arr[(arr.length-1)]];
    returnArr[arr.length - 1] = arr[arr.length - 1];
    // console.log(returnArr); // Print returnArr
    for (let i = (arr.length-2); i >= 0; i--) {
        returnArr[i] = Math.max(arr[i], returnArr[i + 1]);
    }
    return returnArr;
}

function totalWater(arr) {
    const arrLength = arr.length;
    const leftMax = leftMaxArr(arr);
    const rightMax = rightMaxArr(arr);
    let countWater = 0;
    for (let i = 0; i < arrLength; i++) {
        // console.log(leftMax[i], rightMax[i], arr[i]);
        countWater += ((Math.min(leftMax[i], rightMax[i])) - arr[i]);
    }
    return countWater;
}

console.log(totalWater(heights2))

/************ Above code demonstrate solution based on time_complexity = O(0) and space_complexity = O(n) */

