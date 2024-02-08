//Array 
let numbers: number[] = [1,2,3,4,5];

//Accessing elements 

let firstElement: number = numbers[0];

console.log(numbers);

console.log(firstElement);

//Array length 

let arrayLength: number = numbers.length;
console.log(arrayLength);

//Adding elements 

numbers.push(6);

//Iterating through elements

for (let num of numbers)
{
    console.log(num);
    
}

//Array Methods 

let doubledNumbers: number[] = numbers.map((num: number) => num * 2 ); //Map method returns a new array
let evenNumbers: number [] = numbers.filter((num: number) => num % 2 == 0); // Filter method returns a new array
let sum: number = numbers.reduce((prev: number, next: number) => prev+ next ); //Reduce method returns a single value

console.log(doubledNumbers);
console.log(evenNumbers);
console.log(sum);




