// Functions 

function addNumbers(a: number, b:number) : number {

    return a+b;
}

console.log(addNumbers(10,20));

// Arrow Functions

let addNumbersr5 = (a: number, b:number): number => a + b;
console.log(addNumbersr5(10,20));

//Optional Parameters

function addNumbers1(a: number, b:number, c?: number): number 
{
    return a+b+(c ?? 0); // c ?? means if c is undefined then use 0

}

//Default Parameters

function addNumbers2(a: number, b: number, c: number = 0) : number 
{
    return a+b+c;
}
 
// Rest Parameters 

function addNumbers3(...nums: number []): number 
{
    let sum: number = 0;

    for (let num of nums)
    {
        sum += num;
    }

    return sum;
}

//Function Overloading 

function addNumbers4(a: number, b: number): number; //Function signature

function addNumbers4(a: string, b:string): string;

function addNumbers4(a: any, b:any): any 
{
    return a + b;
}
console.log(addNumbers4(10,20));
