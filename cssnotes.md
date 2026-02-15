## Day 2 – CSS Basics

- CSS is used for styling websites
- HTML = structure, CSS = design
- CSS syntax: selector { property: value; }
- Used external CSS file (style.css)

### Selectors Used
- body, h1, h2, p, a
- ul, li
- input, textarea, button

### Work Done
- Styled profile page
- Styled contact form

### Status
Day 3 completed ✅  

## Day 3 – CSS + UL Styling

### What I Built
- Styled navbar using Flexbox
- Clean layout using container
- Styled unordered list (ul)

### Concepts Learned
- display: flex
- justify-content & align-items
- Removing default ul styles
- Linking external CSS

### Status
Day 3 completed ✅

📘 Day 4 – Notes (Responsive Design)
1️⃣ What is Responsive Design?

Responsive design means making a website that looks good on mobile, tablet, and desktop automatically.

👉 Screen size change → layout adjusts

2️⃣ Why Responsive Design is Important?

Most users use mobile phones

Website looks professional

Required in real projects

Improves user experience

3️⃣ What are Media Queries?

Media queries are used in CSS to apply styles for different screen sizes.

They help change layout based on:

Screen width

Device type

4️⃣ Media Query Syntax
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}


👉 This code works only when screen size is 768px or smaller

5️⃣ Common Screen Sizes

Desktop → above 1024px

Tablet → 768px to 1024px

Mobile → below 768px

6️⃣ Example Use Case
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}


👉 On mobile screen, items come one below another

7️⃣ Tools Used

HTML

CSS

Media Queries


📘 Day 5 – JavaScript Basics Notes
1️⃣ What is JavaScript?

JavaScript is a programming language used to make websites interactive.

HTML → Structure
CSS → Design
JavaScript → Functionality

Example:

Button click

Change text

Change background color

Counter app

2️⃣ How to Add JavaScript to HTML?

Add this before </body>:

<script src="script.js"></script>


Create a separate file:

script.js

3️⃣ Variables

Variables store data.

let name = "Shobhit";
let age = 21;


Rules:

Use let

Case-sensitive

Cannot start with number

4️⃣ Functions

A reusable block of code.

function greet() {
    alert("Hello");
}


Functions run when called.

5️⃣ Events

Events are actions like:

Click

Submit

Hover

Example:

<button onclick="changeText()">Click</button>

6️⃣ DOM (Document Object Model)

DOM allows JavaScript to change HTML content.

Example:

document.getElementById("text").innerHTML = "New Text";


document → whole page

getElementById() → selects element

innerHTML → changes content

7️⃣ Changing CSS with JavaScript
document.body.style.backgroundColor = "blue";


JavaScript can change styles dynamically.

8️⃣ Date Object

Used to get current date or year.

let year = new Date().getFullYear();

9️⃣ Counter Logic
let count = 0;

function increase() {
    count++;
}


count++ → increases value

Used to update UI dynamically

🧠 Important Concepts Learned Today

✔ Variables
✔ Functions
✔ Events
✔ DOM Manipulation
✔ Style manipulation
✔ Date object
✔ Basic state management

🎯 One-Line Interview Answer

JavaScript makes websites interactive by manipulating the DOM and handling user events.

Chrome Inspect Tool

8️⃣ One-Line Interview Answer

Responsive design makes websites work properly on all screen sizes using media queries.

README

📘 Day 6 – DOM Manipulation & Events
1️⃣ What is DOM?

DOM (Document Object Model) is a structure of the webpage that allows JavaScript to access and modify HTML elements.

JavaScript can:

Change text

Change styles

Add elements

Remove elements

2️⃣ querySelector()

Used to select elements using CSS selectors.

Example:

document.querySelector("h1")
document.querySelector("#idName")
document.querySelector(".className")


It selects the first matching element.

3️⃣ Difference: getElementById vs querySelector

getElementById:

document.getElementById("title");


querySelector:

document.querySelector("#title");


querySelector is more flexible because it supports id, class, and tags.

4️⃣ addEventListener()

Used to add events in a clean way.

Example:

button.addEventListener("click", function() {
    alert("Clicked");
});


Advantages:

Keeps HTML clean

Better structure

Professional approach

5️⃣ createElement()

Used to create new HTML elements using JavaScript.

Example:

let para = document.createElement("p");

6️⃣ appendChild()

Used to add element to webpage.

Example:

document.body.appendChild(para);

7️⃣ Getting Input Value

To read value from input field:

let value = input.value;


Used in To-Do app.

8️⃣ Mini Project Logic – To-Do App

Steps:

Select input

Select button

Add click event

Get input value

Create <li>

Append to <ul>

Clear input

🧠 Important Concepts Learned

✔ DOM manipulation
✔ querySelector
✔ addEventListener
✔ createElement
✔ appendChild
✔ Reading user input
✔ Clean JS structure

🎯 One-Line Interview Answer

DOM manipulation allows JavaScript to dynamically update and control HTML elements.
