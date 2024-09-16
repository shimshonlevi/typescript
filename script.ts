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
console.log(IsEvenNumbers(3));


function Langth(str:string):number{
    return str.length
}
console.log(Langth("fhfhfhhffhfhf"));

function numbersN(n:number):number[]{
    let arr:number[] = [] 
    for (let  i:number =0; i< n; i++){
        arr.push(i)
    }
    return arr
}
console.log(numbersN(5));


