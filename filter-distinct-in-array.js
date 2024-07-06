// const arr = [1, 2, '1', '3', 5, '7', 3, '5', '6', 2, 4];

// const newMyArray = [];

// arr.forEach((item)=>{
//     if (
//         !newMyArray.includes(parseInt(item)) &&
//         !newMyArray.includes(item.toString())
//     ) {
//         newMyArray.push(item);
//     }
// })

// console.log(newMyArray)
// console.log(newMyArray.sort())

const arr = [1, 2, '1', '3', 5, '7', 3, '5', '6', 2, 4];

const newMyArray = [];
const seenElements = {};

arr.forEach((item) => {
    const intItem = parseInt(item);
    const strItem = item.toString();
    console.log(intItem, strItem);

    if (!seenElements[intItem] && !seenElements[strItem]) {
        newMyArray.push(item);
        seenElements[intItem] = true;
        seenElements[strItem] = true;
    }
});

console.log(newMyArray);
