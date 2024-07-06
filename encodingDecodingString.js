/*
The task is to implement the RLE algorithm. RLE stands for Run-Length Encoding, a method where sequences of repeating symbols are replaced by the count of occurrences followed by the symbol itself. 
For example, the sequence "AAAAABBBCCDAA" would be encoded as "5A3B2C1D2A" after applying RLE. 

*/

////////////////////////////////////// Using help of Object called map 
const encodeString = (str) => {
    const map = {};
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === str[i - 1]) && i > 0) {
            map[Object.keys(map)[Object.keys(map).length - 1]].count++;
        } else {
            if (Object.keys(map).length > 0) {
                const item = map[Object.keys(map)[Object.keys(map).length - 1]]
                result += `${item.count}${item.key}`;
            }
            map[`${str[i]}${i}`] = {
                "key": str[i],
                "count": 1
            };
        }
    }
    const item = map[Object.keys(map)[Object.keys(map).length - 1]]
    item ? result += `${item.count}${item.key}` : item;

    return result;
}

console.log('EncodingAsObject: ', encodeString('AAAAABBBCCDAA')) // 5A3B2C1D2A


////////////////////////////////////// Encoding Using help of Array called arrResult 
const encodeStringAsArray = (str) => {
    const arrResult = [];
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === str[i - 1]) && i > 0) {
            const index = arrResult.length - 2;
            arrResult[index] = parseInt(arrResult[index] + 1);
        } else {
            arrResult.push(1);
            arrResult.push(str[i]);
        }
    }
    return arrResult.join('');
}
console.log('encodeStringAsArray: ', encodeStringAsArray('KolabooService@2024')) // 1S1c1h2o1l

////////////////////////////////////// Decoding Using help checking current value is number or not
const decodeString = (str) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let num = NaN;
    let char = '';
    let result = ''
    for (let i = 0; i < str.length; i++) {
        char = str[i];
        if (numbers.includes(parseInt(char))) {
            num = parseInt(char);
        }

        if (num && !numbers.includes(parseInt(char))) {
            for (let j = 0; j < num; j++) result += char;
        }
    }

    return result;
}
console.log('decodeString As Non Array: ', decodeString('5A3B2C1D2A')) // AAAAABBBCCDAA

////////////////////////////////////// Decoding Using help of Array called arrResult 
const decodeStringAsArray = (str) => {
    let arrResult = [];
    let countLimit = NaN;
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            countLimit = parseInt(str[i]);
        } else {
            for (let j = 0; j < countLimit; j++) arrResult.push(str[i]);
        }
    }

    return arrResult.join('');
}

console.log('decodeStringAsArray: ', decodeStringAsArray('1S1c1h2o1l')) // School