# Day 5 JAVAScript consept (Start)

// Change Text
function changeText() {
    document.getElementById("text").innerHTML = "Text Changed Successfully!";
}

// Change Background Color
function changeColor() {
    let colors = ["red", "blue", "green", "yellow", "pink"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Show Current Year Automatically
let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

// Counter App
let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerHTML = count;
}

function decrease() {
    count--;
    document.getElementById("count").innerHTML = count;
}


# Day 6 DOM (Doument Object Model)

let addBtn = document.querySelector("#addBtn");
let taskInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function(){
    let taskText = taskInput.value;

    if (taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML= taskText;

    taskList.appendChild(li);
    
    taskInput.value = "";
});

