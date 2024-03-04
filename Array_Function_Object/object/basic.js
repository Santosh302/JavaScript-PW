/* Object:- object is just a name given to user-defined variable. 
Creating a object:-

1:- By object literal
3:- By creating constructor
*/

let person ={
    name:"Santosh",
    age:24,
    city:"bhadohi"
};
//accessing data of object
/* console.log(person.name);
console.log(person.age); */

//changing data of object
person.age= 23;
console.log(person.age);

//delecting data of object
delete person.city
console.log(person)

let car = new Object();
car.make= "Toyota";
car.model= "Camry";
car.year= 2024;

console.log(car.make);
console.log(car.year);