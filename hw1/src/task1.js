let inputData = {
    "length": 0,
    "width": 0,
    "height": 0
};

enterData();

function enterData() {
    alert("You need to enter 3 values. This will be the length, width, and height. Please note that these three values must be natural numbers.")
    let inputL = prompt("Enter length: ");
    inputData.length = checkValue(inputL);
    let inputW = prompt("Enter width: ");
    inputData.width = checkValue(inputW);
    let inputH = prompt("Enter height: ");
    inputData.height = checkValue(inputH);
    count(inputData);
}

function checkValue(value) {
    let tempValue = parseInt(value, 10);
    if (tempValue && tempValue > 0 && tempValue !== NaN && tempValue <= 1000) {
        return tempValue;
    } else {
        alert("Something wrong. Check the values.");
        enterData();
    }
}

function count(dataObj) {
    let perimetr;
    let result;
    let paintArea = 16;
    perimetr = ((dataObj.length * dataObj.height) * 2) + ((dataObj.width * dataObj.height) * 2);
    result = "You need " + Math.ceil(perimetr / paintArea) + " tin of paint";
    alert(result);
}