enterData();

function enterData() {
    alert("You need to enter 9 numbers of your ticket. from 000000 to 999999. Please note that these numbers must be natural numbers.")
    let input = prompt("Enter input: ");
    input = checkValue(input);
}

function checkValue(value) {
    const numberArray = [...value].map(el => parseInt(el));
    const isArrNaN = numberArray.some(el => isNaN(el));
    if (numberArray.length != 6 || isArrNaN) {
        alert("Something wrong. Check the values.");
        enterData();
        return;
    }

    checkNumbers(numberArray);
}

function checkNumbers(array) {
    let firstPart = array.splice(0, 3);
    let secondPart = array;
    if (firstPart[0] + firstPart[1] + firstPart[2] === secondPart[0] + secondPart[1] + secondPart[2]) {
        alert("you have happy ticket")
    } else {
        alert("you dont have happy ticket")
    }
}