let arr = ["Яблоко", "Банан", "Ананас"];
let a = ["Яблоко", "Банан", "Ананас"].map(el => el[0]);
let b = ["Яблоко", "Банан", "Ананас"].filter(el => el[0].toLocaleLowerCase() == "а");
let c = arr.forEach((el, i, arr) => arr[i] = `${i + 1}: ${el};`);

const arr2 = ["Яблоко", "Банан", "Ананас"];
let reduceMap = arr2.reduce(function (newArr, arr2) {
    newArr.push(arr2[0]);
    return newArr;
}, []);

let reduceFilter = arr2.reduce(function (total, el) {
    if (el[0].toLocaleLowerCase() == "а") {
        return el;
    }
});

// .reduce((acc, currentValue, index, arr )

let reduceForEach = arr2.reduce((newArr, arr2, i) => {
        newArr.push(`${i + 1}: ${arr2};`);
        return newArr;
    }, []

)
console.log(reduceMap, "reduceMap");
console.log(reduceFilter, "reduceFilter");
console.log(reduceForEach, "reduceForEach");