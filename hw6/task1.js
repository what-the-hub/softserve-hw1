
let arr = ["Яблоко", "Банан" , "Ананас"];
let a = ["Яблоко", "Банан" , "Ананас"].map(el=>el[0]);
let b = ["ЯБЛОКО", "Банан" , "Ананас"].filter(el=>el[0].toLocaleLowerCase() == "a");
let c = arr.forEach((el,i,arr) => arr[i] = `${i + 1}: ${el};`);
console.log(a);
console.log(b);
console.log(c);

console.log(arr);
const arr2 = ["Яблоко", "Банан" , "Ананас"];
let reduceMap = arr2.reduce(function (newArr, arr2){
    newArr.push(arr2[0]);
    return newArr;
}, []
);
let reduceFilter = arr2.reduce(function (newArr, arr2){
    if (arr2[0]){
        arr2[0].toLocaleLowerCase();
    }
    return newArr;
}, []
);

// .reduce((acc, currentValue, index, arr )

let reduceForEach = arr2.reduce((acc, currentValue, index, arr ) => {
    currentValue = `${index+1}: ${currentValue}`;
    return acc;
    `${index}: ${acc}`

} )
console.log(reduceMap, "reduceMap");
console.log(reduceFilter, "reduceFilter");
console.log(reduceForEach, "reduceForEach");