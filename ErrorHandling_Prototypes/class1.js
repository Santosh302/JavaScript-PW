/* 
Classes serve as a blueprint for creating objects, providing a way to organize 
and structure code. 
● They allow you to define objects with similar properties and methods in a 
reusable manner, reducing the amount of code you need to write and making 
your code easier to maintain.
Reasons why you might want to use classes in Javascript : :
● Object-Oriented Programming
● Reusability
● Abstraction
● Encapsulation
● Modularity
● Classes were introduced in ECMAScript 6 (ES6). 
● A class is defined using the class keyword, followed by the class name, and a 
block of code that defines the properties and methods of the class
*/

//Define a class "person"
class Person{
    constructor(name, age){
        this.name =name;
        this.age=age;
    }
    displayInfo(){
        console.log(`Name: ${this.name}, Age:${this.age}`);        
    }
}

//Create an instance of the Person class

const b= new Person('santosh', 23);

//call the displayInfo method on the instance
b.displayInfo();

//class constructor
/* 
For the purpose of creating and initializing objects created within a class, there 
is a particular method called a constructor.
● The constructor() is immediately invoked when a class is created, and it must 
precisely be named "constructor", otherwise, JavaScript will add an empty and 
empty constructor method.
● There can only be one constructor() method per class.
● It was introduced as a ECMAScript6 (ES6) feature.
● A constructor enables you to provide any custom initialization that must be 
done before any other methods can be called on an instantiated object.
*/