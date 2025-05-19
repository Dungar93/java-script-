//primitive 
// 7 data type 
// string, number .boolean, null, underfined ,symbol ,bigint 

// Number
// let num = 42;

// // String
// let str = "Hello, world!";

// // Boolean
// let isTrue = true;

// // Undefined
// let x;  // x is declared but not assigned → undefined

// // Null
// let empty = null;

// // Big

// // js is the dynamic type language 


// // reference {non - primitive }
// //arrays , objects , functions 
// const arr = ["dungar", "arnav","sunny"];
// let myobj  = {
//     name:  "dungar",
//     age:  15
// }

// const myFunction  =  function(){
//     console.log("hello, dungar this side");
    
// }



// return typeof of the all data types 
// ----- Primitive Data Types -----

let num = 42;
console.log("num:", num, "| typeof:", typeof num);  // number

let str = "Hello, world!";
console.log("str:", str, "| typeof:", typeof str);  // string

let isTrue = true;
console.log("isTrue:", isTrue, "| typeof:", typeof isTrue);  // boolean

let x;
console.log("x:", x, "| typeof:", typeof x);  // undefined

let empty = null;
console.log("empty:", empty, "| typeof:", typeof empty);  // object (this is a known quirk in JS)

let big = 12345678901234567890n;
console.log("big:", big, "| typeof:", typeof big);  // bigint

let sym = Symbol("id");
console.log("sym:", sym, "| typeof:", typeof sym);  // symbol

// ----- Non-Primitive (Reference) Data Types -----

let person = { name: "Alice", age: 25 };
console.log("person:", person, "| typeof:", typeof person);  // object

let fruits = ["apple", "banana", "cherry"];
console.log("fruits:", fruits, "| typeof:", typeof fruits);  // object (arrays are a type of object)

let greet = function(name) { return "Hello, " + name; };
console.log("greet:", greet, "| typeof:", typeof greet);  // function

let today = new Date();
console.log("today:", today, "| typeof:", typeof today);  // object

let pattern = /hello/i;
console.log("pattern:", pattern, "| typeof:", typeof pattern);  // object


