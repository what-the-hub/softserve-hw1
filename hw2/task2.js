const inputData= [1, 2, 10, 8]; // [8, 10]
// const inputData= [13, 222, 110, 8]; // [110, 222]
// const inputData= [2]; // error

console.log(twoOldestAges(inputData));

function twoOldestAges(data){
    if (data.length >= 2){
        let tempData = data.sort((a,b)  => a - b);
        let lastElements = tempData.splice(-2,2);
        return lastElements;
    }
    else{
        return console.log("check the array")
    }
}