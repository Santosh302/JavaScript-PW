/* Callback:-
A callback function in javascript is a function passed as an agrument to another function, and it is typically executed after the  completion of a specific task. Callback function are commonly used in asynchrounous operations such as handling events, maing API  calls or reading files.
Callback hell:- it is nested callback functions stacked below one another forming a prymid kind of structure.
Everey callback here wait for the previous callback , thereby affecting the readability and maintainablility of the code.
*/
setTimeout(()=>{
    console.log("Hello Santosh");
} ,1000);
