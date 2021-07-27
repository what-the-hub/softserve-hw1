enterData();

function enterData() {
    alert("You need to enter 6 numbers. from 000000 to 999999. Please note that these numbers must be natural numbers.")
    let input = prompt("Enter input: ");
    input = checkValue(input);

    
    // count();
}

function checkValue(value) {
    
    // let tempValue = parseInt(value, 10);
    if (value.length === 6) {
        for(let i = 0; i < 6;  i++){
            let newElem = parseInt(value[i]);
            if (isNaN(newElem)){
                alert("Something wrong. Check the values.");
                enterData();
            }
            else{
                alert ("zbs")
            }
        }

    } 
    else {
        alert("Something wrong. Check the values.");
        enterData();
    }



    // if (value.length === 6 && value[item] !== NaN && value[item] >= 0, value[item] <=9 && value[item] !== NaN) {
    //     alert ("goood")
    // } else {
    //     alert("Something wrong. Check the number.");
    //     enterData();
    // }
}