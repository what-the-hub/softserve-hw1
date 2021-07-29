function conjunction(words) {
    debugger;
    let newArr = words.split(' '); // если в сплите заменить на /\s+/) то ломаются строки с табуляцией
    for (let item of newArr) {
        if (item.match(/^[a-zA-Z]+$/)) {
            return "Something wrong with your string."; // можно ли оптимизировать
        }
    }
    return newArr.sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

// console.log(conjunction("1 3 222 4444"));
console.log(conjunction("is2 Thi1s T4est 3a"));
console.log(conjunction("4of Fo1r pe6ople  g3ood th5e the2"));
console.log(conjunction("as dsd sfsf")); // error