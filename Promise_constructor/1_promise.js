/* 
Promises:- Promises are an important concept in modern javascript programming. 
They allow us to handle asynchronous code and make it more efficent and responsive.
javaScript is single-threaded so that we need promise.
*/

/* Promise Lifecyle.
The lifecycle of promises consists of 4 stages.
1 Pending
2 Resolved
3 Rejected(failed promises)
4 Settled.(end or promises) */

/*
---------------------------------- 
Syntax of promises

new Promise( function(resolve ,reject){
    //Asnychronous operation
});
*/

/* --------------------------------
Consuming the promise values.
1. .then()
2.  .catch()
3.   .finally()
*/


/* 
<!DOCTYPE html>
<html lang="en">
 <head>
 <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- JS Starts -->
    <script>
      let newPromise = new Promise((resolve, reject) => {
        let randomNumber = Math.random();
        console.log(randomNumber);
        if (randomNumber > 0.5) {
          resolve("The Promise is resolved. The number is greater than 0.5");
        } else {
          reject("The Promise is rejected. The number is lesser than 0.5");
        }
      });

      ----------------important----------
      newPromise.then((result)=>console.log(newPromise));
      .catch((error)=>console.log(error));
      .finally(()=>console.log("The Promise is settled"));
    </script>
    <!-- JS Ends -->
     </body>
</html>
*/
let promise = new Promise(function(resolve, reject){
  //Make an asynchronous call and either resolve or reject
  setTimeout(()=>resolve("I am done"), 1000);
});
promise.then(
  function(result){
    //Do something with the result
    console.log(result); //"I am done"
  },
  function(error){
    console.log(error);
  }
);

//the above example also use as callback function.