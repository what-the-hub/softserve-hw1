function meeting(x, need) {
    if (need === 0) {
        return 'Game On'
    } else {
        let neededChairs = need;
        let arrChairs = [];
        for (let i = 0; i < x.length && neededChairs > 0; i += 1) {
            arrChairs[i] = 0;
            let emptyChairs = x[i][1] - x[i][0].length;
            while (neededChairs > 0 && emptyChairs > 0) {
                emptyChairs -= 1;
                neededChairs -= 1;
                arrChairs[i] += 1;
            }
        }
        if (neededChairs > 0) {
            return 'Not enough!'
        } else {
            return arrChairs
        }
    }
}

console.log(meeting([['XXX', 3],['XXXXX', 6],['XXXXXX', 9]], 4));
console.log(meeting([['XXX', 1],['XXXXXX', 6],['X', 2],['XXXXXX', 8],['X', 3],['XXX', 1]], 5));
console.log(meeting([['XX', 2],['XXXX', 6],['XXXXX', 4]], 0));
console.log(meeting([['XX', 2],['XXXX', 6],['XXXXX', 4]], 4));