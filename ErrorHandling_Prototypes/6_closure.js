/* 
Lexical environment:-
Every time the JavaScript engine creates an execution context to execute the 
function or global code, it also creates a new lexical environment to store the 
variable defined in that function during the execution of that function.

*/

/* Closure:-
a closure is created when a function is defined inside another function (the 
outer function). The inner function has access to the variables and parameters 
of the outer function, even after the outer function has returned */


function outer() {
    const a = 10;
    function inner() {
    const b = 20;
    console.log(a + b);
    }
    return inner;
   }
   const closureFn = outer();
   closureFn(); // outputs 30