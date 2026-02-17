## 📘 JavaScript Notes (Beginner → Advanced)

## 1️⃣ Introduction to JavaScript
JavaScript is a high-level, interpreted programming language used to build interactive web applications.

It runs:
  In Browser (Chrome, Edge)
  In Server using Node.js

JavaScript is:
  Single-threaded
  Event-driven
  Prototype-based

## 2️⃣ Variables
Variables store data in memory.

var
  Function scoped
  Can be redeclared
  Hoisted

let
  Block scoped
  Cannot redeclare
  Can reassign

const
  Block scoped
  Cannot reassign
  Must initialize

Example:
  jscode
    let name = "Shobhit";
    const age = 21;
    var city = "Noida";

## 3️⃣ Data Types
Primitive Types
  String
  Number
  Boolean
  Null
  Undefined
  BigInt
  Symbol

Reference Type
  Object
  Array
  Function

Check type:
  jscode
    typeof "Hello"; // string
    typeof 25; // number

## 4️⃣ Type Conversion
Implicit (Coercion)
  jscode
    "5" + 1  // "51"
    "5" - 1  // 4

Explicit
  jscode
    Number("5");
    String(10);
    Boolean(1);

## 5️⃣ Operators

Arithmetic:

          / %

Comparison:
  == (value)
  === (value + type)

Logical:
  && || !
  Assignment:
  = += -=

## 6️⃣ Conditions
if / else
  jscode
    if (age > 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }

switch
    jscode
      switch(day) {
        case 1:
          console.log("Monday");
          break;
      }

## 7️⃣ Loops
for loop
    jscode
    for(let i = 0; i < 5; i++) {
      console.log(i);
    }

while
      jscode
      while(condition) {
      }

for...of (arrays)
for...in (objects)

## 8️⃣ Functions
Reusable blocks of code.

  jscode
  function greet(name) {
    return "Hello " + name;
  }

Arrow Function
  jscode
  const greet = (name) => {
    return "Hello " + name;
  };

## 9️⃣ Scope

Types:
  Global
  Function
  Block

JavaScript uses Lexical Scope.

## 🔟 Closures

Closure = Function + its outer scope memory.

jscode
function outer() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  }
}


Used for:
  Private variables
  Data hiding

## 1️⃣1️⃣ this Keyword
Depends on how function is called.

In object method:
  → this refers to object

Arrow function:
  → Does NOT have its own this

## 1️⃣2️⃣ Arrays

  jscode
  let arr = [1,2,3];

Important Methods:
  map()
  filter()
  reduce()
  push()
  pop()

Example:

  jscode
  arr.map(num => num * 2);

## 1️⃣3️⃣ Objects
  jscode  
  let user = {
    name: "Shobhit",
    age: 21
  };


Access:
  jscode
  user.name

## 1️⃣4️⃣ DOM Manipulation

Select element:
  jscode
  document.querySelector(".btn");

Add event:
  jscode
  button.addEventListener("click", function() {
    console.log("Clicked");
  });

## 1️⃣5️⃣ Event Loop
JavaScript:
  Single-threaded
  Uses Call Stack
  Uses Task Queue

Async operations go to Web APIs then queue.

## 1️⃣6️⃣ Asynchronous JavaScript
setTimeout
  jscode
  setTimeout(() => {
    console.log("Hello");
  }, 1000);

Promise
  jscode
  let promise = new Promise((resolve, reject) => {
    resolve("Success");
  });

async/await
  jscode
  async function fetchData() {
    let response = await fetch(url);
  }

## 1️⃣7️⃣ Fetch API
  jscode
  fetch("https://api.example.com")
    .then(res => res.json())
    .then(data => console.log(data));

## 1️⃣8️⃣ Classes
  jscode
  class Person {
    constructor(name) {
      this.name = name;
    }

    greet() {
      console.log("Hello " + this.name);
    }
  }

## 1️⃣9️⃣ Modules

ES Module:
  jscode
  export function greet() {}
  import { greet } from "./file.js";

## 2️⃣0️⃣ Memory Management
  Stack → Primitive
  Heap → Objects
  Garbage Collector removes unused memory

## 🔥 Most Asked Interview Topics

  Difference between var, let, const
  What is closure?
  Explain event loop
  What is hoisting?
  Difference between == and ===
  How async works?
  Explain this keyword
