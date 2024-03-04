/* 1:- Function Declartaion
2:- Anonymous function.
3:- Arrow function;
4:- Immediately invoked function Execution
5:-Fucntion Expression 
*/

/* 1 function declaration */

function add(a, b){
    return a+b;

}
let result = add(3,5);
console.log(result);

/* 2:- Anonymous function :- An anonymous function is a function without a name . it can be created in various ways, including function expression and arrow functions. */
const substract =  function(a,b){
    return a-b;
}
let result1 = substract(8,3);
console.log(result1);

/* Arrow function:-
Arrow function ,also known as "fat arrow" function, were introduced in javascript as a shorthand for writing function expressions.
*/
//1. One pareameter ,and single return statement
const square =(x)=> x*x;
let square1 = square(5);
console.log(square1);

//2:- Multiple parameter with single return exprssion
const multiply= (x,y)=>x*y
let multiply1 =multiply(3,3);
console.log(multiply1);

//3-multiple statemet in function expression
const sum =(x,y)=>{
    console.log(`Adding ${x} and ${y}`);
    return x+y;
}
let sum1=sum(5,3);
console.log(sum1);

//Returning an object
const sumAndDifference= (x, y)=>({sum:x+y, difference:x-y});
let output =sumAndDifference(5,3)
console.log(output);

//Feature of arrow funtion:-
/* 
parentheses are optional in the case of a single parameter.
must use parentheses in case of multiple paramter.
The return keyword in not required for a single return expression in the function body in case of multiple statement is required.
The return an object notation, wrap in with parentheses.
*/


/* IIFE :-
An IIFE is a javascript function that gets called immediately.it is a way to execute functions immediately as soon as they are created.
*/
(function(){
    console.log("This is IIFE");
})();

/* 5:FUNCTION EXPRESSION:-A function expression is way to dfined a function as part of an expression , like assinging it to a variable.
it can be anonymous , but it doesn't have be . you have named function expression as well.
 */
//Anonyoums function expression
/* const greet2= function(name){
    console.log("Hello " +name);
}
let b= greet2("santosh");
console.log(b); */

//name function expression

/* const greet2= function say(name){
    console.log("Hello " +name);
};
let b= greet2("santosh");
console.log(b);
let d =say("santosh yadav") */