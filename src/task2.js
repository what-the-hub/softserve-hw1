enterData();

function enterData() {
    alert("You need to enter 6 values. This will be the A1-3 & B1-3. Please note that these 6 values must be natural numbers.")
    let inputA1 = prompt("Enter inputA1: ");
    inputA1 = checkValue(inputA1);
    let inputA2 = prompt("Enter inputA2: ");
    inputA2 = checkValue(inputA2);
    let inputA3 = prompt("Enter inputA3: ");
    inputA3 = checkValue(inputA3);
    let inputB1 = prompt("Enter inputB1: ");
    inputB1 = checkValue(inputB1);
    let inputB2 = prompt("Enter inputB2: ");
    inputB2 = checkValue(inputB2);
    let inputB3 = prompt("Enter inputB3: ");
    inputB3 = checkValue(inputB3);
    let params = [inputA1, inputA2, inputA3, inputB1, inputB2, inputB3]
    count(params);
}

function checkValue(value) {
    let tempValue = parseInt(value, 10);
    if (tempValue && tempValue > 0 && tempValue !== NaN && tempValue < 100) {
        return tempValue;
    } else {
        alert("Something wrong. Check the values.");
        enterData();
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function count(param) {
    if (param[0] < param[1]) {
        swap(param, 0, 1)
    };
    if (param[1] < param[2]) {
        swap(param, 1, 2)
    };
    if (param[0] < param[1]) {
        swap(param, 0, 1)
    };
    if (param[3] < param[4]) {
        swap(param, 3, 4)
    };
    if (param[4] < param[5]) {
        swap(param, 4, 5)
    };
    if (param[3] < param[4]) {
        swap(param, 3, 4)
    };
    let result = param[0] * param[3] + param[1] * param[4] + param[2] * param[5];
    let message = "You can get " + result + " rubs"
    alert(message);
}