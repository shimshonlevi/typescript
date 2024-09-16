function getbig (num1:number,num2:number):number {

    return num1 > num2 ? num1 : num2;
}
console.log(getbig(2,3));


function printBigNum(num1:number,num2:number):void{
    console.log(num1 > num2 ? num1 : num2);
}
printBigNum(7,8)

function IsEvenNumbers(num:number):string{
    return (num % 2 ===0) ? "even" : "notEven"
}

const IsEvenNumbers2: (num:number)=>string = num=>num%2 ===0 ? "even": "odd"
console.log(IsEvenNumbers(3));


function Langth(str:string):number{
    return str.length
}
console.log(Langth("fhfhfhhffhfhf"));

function numbersN(n:number):number[]{
    return Array(n).fill(0).map((_, i) => i);
}
console.log(numbersN(5));

function BigNumInArr(arr:number[]):number{
    return Math.max(...arr)
}
console.log(BigNumInArr([1, 5, 3, 9, 2]));


interface Person{
    name: string;
    age:number;
    isStudent:boolean;
}

function printPerson(person:Person):void{
    console.log(`name: ${person.name},Age:${person.age},Is Student: ${person.isStudent}`);
    
}

const person2: Person = {
    name: "Bob",
    age: 30,
    isStudent: false
};

printPerson(person2);

function isMinor(person:Person):boolean{
    return person.age>18
}
console.log(isMinor(person2));

interface Book{
    Title:string;
    Author:string;
    Year:number;
};

type Reader = {
    person : Person,
    favoriteBook :Book
}

function OldReader(Readers:Reader[]):Reader{
    return Readers.reduce((oldest,current)=>{
        return current.person.age > oldest.person.age ? current : oldest;
    })
}

function OldBook(Reader:Reader[]):Reader{
    return Reader.reduce((Book,current)=>{
        return current.favoriteBook.Year> Book.favoriteBook.Year ? current :Book;
    })
}

const person1: Person = { name: "John", age: 45, isStudent: false };
const person4: Person = { name: "Alice", age: 30, isStudent: true };
const person3: Person = { name: "Bob", age: 50, isStudent: false };

const book1: Book = { Title: "The Great Gatsby", Author: "F. Scott Fitzgerald", Year: 1925 };
const book2: Book = { Title: "1984", Author: "George Orwell", Year: 1949 };
const book3: Book = { Title: "Moby Dick", Author: "Herman Melville", Year: 1851 };

const reader1: Reader = { person: person1, favoriteBook: book1 };
const reader2: Reader = { person: person4, favoriteBook: book2 };
const reader3: Reader = { person: person3, favoriteBook: book3 };

const readers: Reader[] = [reader1, reader2, reader3];


const oldestReader = OldReader(readers);
console.log(oldestReader);

