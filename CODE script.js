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
