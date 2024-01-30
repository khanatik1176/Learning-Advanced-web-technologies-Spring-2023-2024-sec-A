// //Call backs 

// //Simulating an asynchronous operation with setTimeout 

// function fetchData(callback)
// {
//     setTimeout( () => {
//         const data = "Hello World!";
//         callback(data);
//     }, 2000);
// }

// //Callback function to process the fetched data
// function process(data)
// {
//     console.log("Data received:", data);
// }

// //Using the fetchData function with a callback

// console.log("Start");

// fetchData(process);

// console.log("End");

//Promises 

function fetchData()
{
    return new Promise((resolve,reject) => {

        //Simulating a successful operation after a delay
        setTimeout ( () => {
            const success = true;

            if(success)
            {
                const data = "Hello World !";
                resolve(data);
            }
            else
            {
                const error = "Failed to fetch data";
                reject(error);

            }
        }, 2000);
    })
}

// //Using the fetchData Promise

// console.log("Start");

// fetchData().then(data => {
//     console.log("Data received:", data);
// })
// .catch(error => {
//     console.error("Error:",error);
// })
// .finally(() => {
//     console.log("Operation Complete");
// });

// console.log("End");

async function fetchDataAndProcess()
{
    try
    {
        console.log("Start");

        const data = await fetchData(); //Pause here until fetchData completes
        console.log("Data received:", data);

        console.log("End");
    }

    catch(error)
    {
        console.error("Error:", error);
    }

    finally
    {
        console.log("Operation complete");
    }

}

//Calling the async function 

fetchDataAndProcess();