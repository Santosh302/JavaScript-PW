/* Higher order function:-
A  function that either  takes one or more functions as argument or return a function as it result that called a higher order function.
*/
/* Function that Take function as an argument: */
function substract(factor){
    return function (number){
        return number-factor;
    };
}

const double =substract(2);
console.log(double(5));

//Function that return a function:

function greetGenerator(greeting){
    return function(name){
        return `${greeting}, ${name}!`;
    };
   
};

const greetInEnglish = greetGenerator("Hello");
console.log(greetInEnglish("Santosh"));