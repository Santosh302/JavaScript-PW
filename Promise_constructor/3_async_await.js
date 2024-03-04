/* 
Async:- The Async keyword is used to mark a function as asynchorunous. An asynchronous function is a function that returns a promise, 
which represent the eventural completion of the operation performed by the function

-------------
async function functionName() {
  // Asynchronous operation
  // ...
  // Return a promise/value
}
*/

/* Await
The "await keyword is used to wait for the completion of asynchronous operaton inside an
asynchronous function. it can only be used inside an asynchronous functions that is marked with the "async"
keywords

*/

async function printHelloAfterThreeSeconds() {
    let data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Printing: Hello"); 
      }, 3000);  }); 
    let result = await data; // Wait until the asynchronous operation is resolved : 3 seconds  
    console.log(result);
  }  
  printHelloAfterThreeSeconds();
  
  
  // OUTPUT: [After 3 seconds] Printing: Hello