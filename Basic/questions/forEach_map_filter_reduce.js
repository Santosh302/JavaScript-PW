//forEach()

/* const numbers= [ 1,2,3,4,5];
//Iterate over the array and print each element to the console.
numbers.forEach((number) =>
{
    console.log(number);
})
 */
//map()

//create a new array by multiplying each element of the original array by 2
const numbers= [ 1,2,3,4,5];
const doublenumber = numbers.map((number)=>
{
   let result = number*2;
   console.log(result);
})


//filter:-Crate a new array containing only the even numbers from the original array
/* const evenNumber = numbers.filter((number) =>{
if(number%2===0){
   console.log(number); 
};

}) 
 */

//reduce():- sum all the element of the array
const total=numbers.reduce((accumulator, currentValue)=>accumulator+currentValue , 0);
console.log(total);