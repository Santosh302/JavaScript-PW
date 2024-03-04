/* 1:-Object.values():- is a method an array of an object's own property values.
2:- Object.keys():- it is a method that return an array of an object's own property names.
3:- Object.freeze()
An object is frozen using the procdure.
Changing a frozen object in impossible.
it prevents the addition and deletion of peoperties.

Object.seal()

you cannot add or remove an object's properties , but you can edit the value of an existing property.

*/

/* let person={
    name: "santosh",
    age:24,
    city:"New york"
};
console.log(person);
let keys= Object.keys(person);
console.log(keys);

let values= Object.values(person);
console.log(values);
 */
//Object.seal:

let person ={
    name:"santosh",
    age:24,

};

Object.seal(person);
//modifying existing peroperty is allowed.
person.age =23;
//adding new property is not allowed
person.city ="New york";
//this change will be ingnored.
console.log(person);


//Object.freeze-----------------
let car ={
    make:"Toyota",
    model:"Camry"
};
Object.freeze(car);
//modifying existing property is not allowed
car.model= "corolla;"
//this change will be ignored
console.log(car);