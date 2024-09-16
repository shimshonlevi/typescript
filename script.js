"use strict";
function getbig(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(getbig(2, 3));
function printBigNum(num1, num2) {
    console.log(num1 > num2 ? num1 : num2);
}
printBigNum(7, 8);
function IsEvenNumbers(num) {
    return (num % 2 === 0) ? "even" : "notEven";
}
console.log(IsEvenNumbers(3));
function Langth(str) {
    return str.length;
}
console.log(Langth("fhfhfhhffhfhf"));
function numbersN(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(numbersN(5));
