 /* Getter:- , a getter is a special type of function that is used to get/retrieve the value of an object property. 
● It allows you to define a method to be executed when a specified property is ccessed

setter:-a setter is a special type of function that is used to set the value of an object property.

*/

//create an object

const person ={
    _name:"santosh",
    get name(){ //getter
        return this._name;
    },
    set name(value){//setter
        this._name=value;
    }
}

//Get the value of the name property
console.log(person.name); //santosh

//set the value of the name property
person.name ="santosh kumar yadav"
console.log(person.name);

/* 
in this example we create an object called person with a private property called _name. we then define a getter and setter for the nae property . 
The getter method returns the value of the _name property, and setter method sets the value of the _name property.
*/
