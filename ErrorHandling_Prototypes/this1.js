/* 
What is the `this` keyword in js ?
In JavaScript, this keyword is used to refer to the current object. Its
value is determined by how a function is called. When a function is
called as a method of an object, this refers to the object the method is
called on. When a function is called as a standalone function, this refers
to the global object (or undefined in strict mode)
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    }
    Person.prototype.greet = function() {
    console.log(`Hi, my name is ${this.name}.`);
    }
    const john = new Person('John', 30);
    const jane = new Person('Jane', 25);
    john.greet(); // logs "Hi, my name is John."
    jane.greet(); // logs "Hi, my name is Jane.