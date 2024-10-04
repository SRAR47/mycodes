console.log("Script is working");

let boxes = document.querySelector(".container").children

function GetRandomColor() {
    Col1 = Math.ceil(0 + Math.random() * 225);
    Col2 = Math.ceil(0 + Math.random() * 225);
    Col3 = Math.ceil(0 + Math.random() * 225);
    return `rgb(${Col1}, ${Col2}, ${Col3})`
}

Array.from(boxes).forEach(a => {
    a.style.backgroundColor = GetRandomColor()
    a.style.color = GetRandomColor()
})