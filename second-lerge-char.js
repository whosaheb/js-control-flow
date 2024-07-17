const str = 'I am good programmer saheb';

function findSecondLarge(string) {
    const strArr = string.split(" ");

    const { first, second } = strArr.reduce((acc, it) => {
        if (it.length > acc.first.length) {
            acc.second = acc.first;
            acc.first = it;
        }
        
        if(it.length > acc.second.length && it.length < acc.first.length) acc.second = it;

        return acc;
    }, { first: '', second: '' });

    return second;
}

console.log(findSecondLarge(str));