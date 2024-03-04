/* Loop:- A Loop is a set of instructions that are repeately carried out until a specific condition is met in computer programming. */
/* 1: While loop:- */

/* let i =1 ,n=10;
while(i<=n){
    console.log(i);
    i = i+1;
}
 */
/* Do- while loop:- The loop's body is first executed. The condition is analyzed afterwards. */

/* let result ='';
let i=0;
do{
    i=i+1;
    result=result+i;
}while(i<7);
console.log(result );

 */

/* for loop:
Syntax:- for(initial expression; condition; update expression){

}
*/

/* for(let i=1; i<=5; i++){
    console.log(i);
} */

/* innter for loop  */

/* for(let i=1; i<3; i++){
    for(let j=1; j<=3; j++){
        console.log("Santosh");
    }
} */

/* Break statement */

/* for(i=0; i<4; i++){
    console.log(i);
    if(i==2){
        break;
    }
} */

/* Continue Statement:- The current iteration of the loop is skipped when using the continue statement, and the program moves on the subsequent iteration. */

for(let i=0; i<20; i++){
    if(i%2 ===0){
        continue;
    }
    console.log(i);
}