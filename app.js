const king = document.querySelector(".chesspiece")
console.log(king)
const squares = document.querySelector(".square")
console.log(squares)
const infoDisplay = document.querySelector("#info")

//added an event listener, dragging function is executed when the event occurs
king.addEventListener("drag", dragging)

king.addEventListener("dragstart", dragStart)

function dragging (e) {
    console.log(e.target + "is being dragged.")
}

function dragStart (e) {
    console.log("Dragging has started on" + e.target)

}