function q2d(qArr) {
    qArr = qArr.replace(/@+/g, arr => arr.length);
    qArr = qArr.replace(/~+/g, arr => '0'.repeat(arr.length - 1));
    return qArr;
}

function d2q(dArr) {
    const m = ('' + dArr).match(/0+|\d/g);
    const r = m.map(arr => arr[0] == '0' ? '~'.repeat(arr.length) : '@'.repeat(arr) + '~').join('');
    return dArr % 10 ? r.slice(0, -1) : r;
}

function calculate(quipu) {
    const e = quipu.replace(/[@~]+/g, q2d);
    const r = eval(e);
    return d2q(r);
};
debugger;
console.log(calculate("@~@@*@@"));
console.log(calculate("@~@@+@@~~"));