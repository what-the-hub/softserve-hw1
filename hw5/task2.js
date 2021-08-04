function findPartMaxProdValue(n) {
    var arr1 = [],
        arr2, maxProductValue, res = 1;

    if (n === 2 || n === 3)
        maxProductValue = n - 1;

    if (n % 3 === 1)
        arr1.push(4);

    while (n > 4) {
        n -= 3;
        res *= 3;
        arr1.push(3);
    }

    if (n === 2 || n === 3)
        arr1.push(n);

    if (arr1[0] === 4) {
        arr2 = arr1.slice(1);
        arr2.push(2, 2);
    }

    maxProductValue = n * res;

    return arr2 ? [arr1, arr2, maxProductValue] : [arr1, maxProductValue];
}

console.log(findPartMaxProdValue(8));
console.log(findPartMaxProdValue(10));
