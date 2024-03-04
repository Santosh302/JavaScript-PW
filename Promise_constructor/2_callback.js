/* 
A callback is a function that is passed as an argument to another function and is executed one the main function has finished executing. The purpose of a callback is allow a program to perform actions 
asynchronously. This is especially useful when dealing with tasks that take a long time to complete or when 
you want to executes multiple tasks at the same time.


*/
function squareOfANumber(num) {
    console.log(num * num);
  }
  function operation(num, func) {
    func(num); 
  } 
  // Calling the function.
  operation(5, squareOfANumber)