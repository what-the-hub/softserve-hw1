console.log(shortestWord("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(shortestWord("turns out random test cases are easier than writing out basic ones")); //3
console.log(shortestWord("lets talk about javascript the best language")); // 3
console.log(shortestWord("i want to travel the world writing code one day")); // 1
console.log(shortestWord("lets talk about javascript the best language")); // 3
console.log(shortestWord("Lets all go on holiday somewhere very cold")); // 2
console.log(shortestWord(" 111 22 2 ")); // 1

function shortestWord(sentence) {
    const sentenceString = sentence.trim().split(" ");
    const wordsArray = sentenceString.sort((a, b) => {
        return a.length - b.length;
    })
    return wordsArray[0].length;
}