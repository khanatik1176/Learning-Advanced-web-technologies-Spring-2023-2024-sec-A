import { greetings } from "./modules1";
import farewellMessage from "./modules1";

//Using the imported data

function greet(timeOfDay)
{
    console.log(greetings[timeOfDay]);
}

console.log(farewellMessage);

//exporting a new function 

export function sayGoodbye() {

    console.log(farewellMessage);
}