/* if */

var num =10;

if(num%2==0){
    console.log("The number is even number");
}

/* if-else */

var num =11;

if(num%2==0){
    console.log("The number is even number");
}
else{
    console.log("The number is odd number");
}

var num =0;
if(num ==0){
    console.log("Zero is neither an odd number nor an even number");
}
else if(num%2 == 0){
    console.log("Number is even number")
}
else {
    console.log("The number is given an odd number");
}

/* switch case */
/* Switch statement allow you to execute different block of code based on different CSSConditionRule(cases) being matchMedia. It is  a more effiecient way to use multiple if/else checks.
 */
var day =4;
switch(day){
    case 1: if(day==1){
        console.log("Sunday");
    }
    break;
    case 2: if(day==2){
        console.log("monday");
    }
    break;
    case 3: if(day==3){
        console.log("Tuesday")
    }
    break;
    case 4: if(day==4){
        console.log("Wednesday");
    }
    break;
    default:
        console.log("Day does't exist");
}

/* Ternary Operator 
condition ? <expressionIfTrue> : <expressionIfFalse>

*/

var a=5;
(a==5 ) ? console.log(" a is 5") : console.log("a is not a 5")