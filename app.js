const king = document.querySelector(".chesspiece")
console.log(king)
const squares = document.querySelector(".square")
console.log(squares)
const infoDisplay = document.querySelector("#info")

//added an event listener, dragging function is executed when the event occurs
king.addEventListener("drag", dragging)

function dragging (e) {
    console.log(e.target + "is being dragged.")
}