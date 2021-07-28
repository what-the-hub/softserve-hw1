enterData();

function enterData() {
    alert("You need to enter 9 numbers of your ticket. from 000000 to 999999. Please note that these numbers must be natural numbers.")
    let input = prompt("Enter input: ");
    input = checkValue(input);
}

function checkValue(value) {
    let numberArray = [];
    if (value.length === 6) {
        for (let i = 0; i < 6; i++) {
            let newElem = parseInt(value[i]);
            if (isNaN(newElem)) {
                alert("Something wrong. Check the values.");
                enterData();
            } else {
                numberArray.push(newElem);
            }
        }
    } else {
        alert("Something wrong. Check the values.");
        enterData();
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