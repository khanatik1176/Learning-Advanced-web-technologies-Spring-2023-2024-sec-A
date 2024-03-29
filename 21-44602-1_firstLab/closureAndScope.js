const globalVariable = "I am global!";

function exampleFunction()
{
    console.log(globalVariable);
}

exampleFunction();

function exampleLocalFunction()
{
    const localVariable = "I am local!";

    console.log(localVariable);
}

exampleLocalFunction();

function createCounter()
{
    let count = 0;

    return function()
    {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter();
counter();
counter();