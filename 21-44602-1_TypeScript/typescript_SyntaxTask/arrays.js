//Array 
var numbers = [1, 2, 3, 4, 5];
//Accessing elements 
var firstElement = numbers[0];
console.log(numbers);
console.log(firstElement);
//Array length 
var arrayLength = numbers.length;
console.log(arrayLength);
//Adding elements 
numbers.push(6);
//Iterating through elements
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
//Array Methods 
var doubledNumbers = numbers.map(function (num) { return num * 2; }); //Map method returns a new array
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; }); // Filter method returns a new array
var sum = numbers.reduce(function (prev, next) { return prev + next; }); //Reduce method returns a single value
console.log(doubledNumbers);
console.log(evenNumbers);
console.log(sum);
