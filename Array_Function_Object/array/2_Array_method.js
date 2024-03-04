/* Array Method.
1. pop()
2. push()
3. shift()
4. unshift()
5. concat()
6. join()
7. slice()
8. splice()
9. reverse()
10. indexOf()
*/

/* push method */
/* Adds one or more elements to the end of array */
/* let fruits = ["Apple","Banana"];
fruits.push('orange');
console.log(fruits); */

/* 2: pop method:- Remove the last element of the array */

/* let fruits = ["Apple","Banana", "orange"];
fruits.pop();
console.log(fruits); */

/*3: shift method:- Remove the first element of an array */
/* let fruits = ["Apple","Banana", "orange"];
fruits.shift();
console.log(fruits); */

/* 4:-Unshift:- Adds one or more elements to the beginninng or an array .*/
/* let fruits = ["Apple","Banana", "orange"];
fruits.unshift("guava");
console.log(fruits); */

/* 5:- Concat method:- Combine two or more arrays */

/* let fruits =["apple", "Banana"];
let moreFurits= ["orange", "grape"];
let allFruits= fruits.concat(moreFurits);
console.log(allFruits); */

/* 6:Join:- join all element of array into a string */
/* let fruits= ["apple", 'banana', 'orange'];
let fruitsString =fruits.join(',');
console.log(fruitsString); */

/* 7:Slice method:- Returns a portion of an array. */
/* let fruits = ['apple', 'banana', 'orange',"grape"];
let sliceFruits = fruits.slice(1, 3);
console.log(sliceFruits); */

/*8: Splice:- Changes the contents of array by removing or replacing existing elements.
Starting from index, how many element to remove (below exaampe Remove 1 element)
*/

/*  let fruits =[ "apple","banana", 'orange'];
 let a= fruits.splice(1,1, 'grape', 'kiwi');
console.log(fruits);
console.log(a);
Note :- remove onne element starting from index 1 ,so  the 'banana' is removed from the array , and the modified array become ['apple', 'orange'] 
 */

/*9Reverse: Reverse the elemeent of array. */
/* let fruits =["apple", "banana", "orange"];
fruits.reverse();
console.log(fruits); */

/* 10:-IndexOf:-
Returns the first index at which a given element can be found in the array.
*/
/* let fruits =["apple","banana", "kiwi", "orange"];
let index = fruits.indexOf('banana');
console.log(index); */