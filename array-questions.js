const arr = [1,2,3,4,5,3,4,1,9,15,11,9,5]; // get the non-repeated numbers only

/** Best Approach */
elementCount = arr.reduce((acc, item, i)=>{
    acc[item]=(acc[item] || 0) + 1;
    return acc;
}, {});

const checkerArray = arr.filter(item => elementCount[item] === 1);

console.log(checkerArray);

/***
 * // Bad practice's result such solution ('_') 
const arr = [1,2,3,4,5,3,4,1,9,15,11,9,5];

checkerArray = arr.reduce((acc, item, i)=>{ 
    acc[item] = (acc[item] === false)? true : false;
    return acc
}, {});

console.log(arr.filter((item)=>checkerArray[item]!==true));

 */
