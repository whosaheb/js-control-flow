// find upto Nth no of fibonacci series

function findNFSeries(n) {
    if (!n || (typeof n !== 'number') || (n < 0)) { // check nth is valid or not
        return 'please enter valid Number';
    }

    let number = 1;
    let prevNum = 0;
    let newNum = 1;
    const series = [0];

    if(n == 1) return series;

    for (let i = 2; i <= n; i++) {
        series.push(newNum);
        number = newNum;
        prevNum = series[i - 2];
        newNum = prevNum + number;
    }

    return series;
}

console.log(findNFSeries(7));