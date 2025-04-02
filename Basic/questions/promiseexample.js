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
  
  /* handling by using async and await 
  async function printHelloAfterThreeSeconds() {
    let data = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Printing: Hello"); 
      }, 3000);  }); 
    let result = await data; // Wait until the asynchronous operation is resolved : 3 seconds  
    console.log(result);
  }  
  printHelloAfterThreeSeconds();
  
  
  */