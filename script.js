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
const IsEvenNumbers2 = num => num % 2 === 0 ? "even" : "odd";
console.log(IsEvenNumbers(3));
function Langth(str) {
    return str.length;
}
console.log(Langth("fhfhfhhffhfhf"));
function numbersN(n) {
    return Array(n).fill(0).map((_, i) => i);
}
console.log(numbersN(5));
function BigNumInArr(arr) {
    return Math.max(...arr);
}
console.log(BigNumInArr([1, 5, 3, 9, 2]));
function printPerson(person) {
    console.log(`name: ${person.name},Age:${person.age},Is Student: ${person.isStudent}`);
}
const person2 = {
    name: "Bob",
    age: 30,
    isStudent: false
};
printPerson(person2);
function isMinor(person) {
    return person.age > 18;
}
console.log(isMinor(person2));
;
function OldReader(Readers) {
    return Readers.reduce((oldest, current) => {
        return current.person.age > oldest.person.age ? current : oldest;
    });
}
function OldBook(Reader) {
    return Reader.reduce((Book, current) => {
        return current.favoriteBook.Year > Book.favoriteBook.Year ? current : Book;
    });
}
const person1 = { name: "John", age: 45, isStudent: false };
const person4 = { name: "Alice", age: 30, isStudent: true };
const person3 = { name: "Bob", age: 50, isStudent: false };
const book1 = { Title: "The Great Gatsby", Author: "F. Scott Fitzgerald", Year: 1925 };
const book2 = { Title: "1984", Author: "George Orwell", Year: 1949 };
const book3 = { Title: "Moby Dick", Author: "Herman Melville", Year: 1851 };
const reader1 = { person: person1, favoriteBook: book1 };
const reader2 = { person: person4, favoriteBook: book2 };
const reader3 = { person: person3, favoriteBook: book3 };
const readers = [reader1, reader2, reader3];
const oldestReader = OldReader(readers);
console.log(oldestReader);
