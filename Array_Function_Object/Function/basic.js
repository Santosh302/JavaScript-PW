/* Function:- A function is block of code the performs a specific task and can  be resued throughout the program.
Type of function  1: in-build  function 1 :- user-defined functions
*/
/* Notes:- Functions in javaScript are first-class citizens, meaning they can be assigned to variable, passed as argument to other functions, and returned from functions.
 */

/* Advantage of function:- reuseability, large problem split in small. */

/* Function Declaration
functions functionname(){
    //function body
}
*/

//callinng a function:- by using function name follow with parentheses ().
/* 
Parameter:- A parameter is a variable that is declared within the parenthese of the function declaration .
 it serves as a placeholder or a reference for the input value that will
 be passed to the function when it is called.
 Parameter are dummy name we pass/give a function when we are declaring a function.
*/

/*
Argument:- When the function is called, the values are passed as arguments. These are assigned to the correspondig parameters. Arguments are the actual  values that are passed to the function when it is called.
Return statement:- The return statement is used to output a value from a function. The return statement terminates the execution of the function.
*/

/* Function without parameter:- */
function sayHello(){
    console.log("Hello");
}
sayHello();

/* Function with parameter  */

function greet(name){
    console.log("Hello, " + name + "!");
}
greet("Santosh");

/* Function with an Unlimited Number of Paramters(using the rest parameter): */

function sum(...numbers){
    let results = 0;
    for(let num of numbers){
        results += num
    }
    console.log("Sum:", results);
}
sum(1,2,3);
sum(1,2,3,4);

function sumofAllParameters(){
    let sum=0;
    for(var i=0; i<arguments.length; i++)
    sum +=arguments[i];
    return sum;
}
let result = sumofAllParameters(1,2,3,4,5);
console.log("sum is " +result);