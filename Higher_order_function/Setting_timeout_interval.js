/* 
Creating a Date  object
setTime()
setInterval()
clearInterval()
setTimeout()
clarTimeout()
*/

//careting a date object;
/* let myDate = new Date();

myDate.setHours(12);
myDate.setMinutes(30);
myDate.setSeconds(45);

console.log(myDate);
 */
//set interval and clar interval

/* setInterval(function , milliseconds); */
/* 
function greet(){
    console.log("Hello world");
}
setInterval(greet ,1000);
 */
/* clearInterval(intervalID) */

let count =0;
let interval = setInterval(function(){
    count +=1;
    if(count ==5){
        clearInterval(interval);
    }

    //display the current time
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
}, 2000);