const inputData = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
];//26

// const inputData = [
//     [1, 2, 3],
//     [33, 22, 55],
//     [16, 42, 345, 79, 1]
// ];//24

// const inputData = [
//     [-11, 2, 3],
//     [33, 22, 55],
//     [16, 42.2, 345, 79, 1]
// ];//error

if (checkData(inputData)) {
    console.log('Your array is: ', inputData);
    count(inputData);
} else {
    console.log('Something wrong. Check your array')
    console.log('Your array was: ', inputData);
}

function checkData(array) {
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array[i].length; j += 1) {
            if (checkValue(array[i][j])) {
                return true;
            } else return false;
        }
    }
}

function count(array) {
    let arrFromMin = [];
    for (let i = 0; i < array.length; i += 1) {
        arrFromMin.push(Math.min(...array[i]));

    }
    console.log('Array from min values: ', arrFromMin);
    let result = arrFromMin.reduce(function (sum, current) {
        return sum + current
    });
    console.log('this is result: ', result);
}

function checkValue(value) {
    return Number.isInteger(value) === true && value >= 0;
}