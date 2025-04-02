const numbers =[ 1,3,5,9,7];

//check if all the numbers in the arrayare odd
const allOdd =numbers.every(number=> number%2 !==0);
console.log(allOdd);
const sortedNumbers = numbers.sort((a,b)=>a-b);
console.log(sortedNumbers);

const result= numbers.find(number=> number>3);
console.log(result); 