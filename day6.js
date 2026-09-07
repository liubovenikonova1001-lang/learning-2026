//задача 1
const cleanText=(str)=>str.trim().toLowerCase()

console.log(cleanText(" ПРИВЕТ МИР "));


//задача 2
const containsWord=(str, word)=>str.toLowerCase().includes(word.toLowerCase())

console.log(containsWord("Я люблю программировать","люблю"));
console.log(containsWord("Я люблю програмировать","ненавижу"));

//задача 3
const analyzeString=(str)=>{
    str=str.toUpperCase()
    console.log(str.length);
    console.log(str[0]);
    console.log(str[str.length-1]);
    if(str.length%2===0){console.log(str[str.length/2-1]+str[str.length/2])}
    else{console.log(str[Math.floor(str.length/2)])}
}

analyzeString("Привет")