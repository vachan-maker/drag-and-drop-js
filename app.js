const king = document.querySelector(".chesspiece")
console.log(king)
const squares = document.querySelectorAll(".square")
const infoDisplay = document.querySelector("#info")
let beingDragged 
//added an event listener, dragging function is executed when the event occurs
king.addEventListener("drag", dragging)

king.addEventListener("dragstart", dragStart)
squares.forEach(square => {
    square.addEventListener("dragover",  dragOver),
    square.addEventListener("dragenter", dragEnter),
    square.addEventListener("drragleave", dragLeave),
    square.addEventListener("drop", drop),
    square.addEventListener("dragend", dragEnd)
}

)


function dragStart (e) {
    beingDragged = e.target
    console.log("Dragging has started on" + beingDragged)

}
function dragging (e) {
    console.log(beingDragged.id + "is being dragged.")
    infoDisplay.textContent = "You are dragging a " + beingDragged.id
}

function dragOver (e) {
    console.log("You are dragging somehting over " + e.target.classList)
}

function dragEnter (e) {
    console.log("You are entering " + e.target.classList)
}

function dragLeave(e) {
    console.log("You are leaving")
}

function drop(e) {
    console.log("You have dropeed something")
}

function dragEnd(e) {
    console.log("You have dragned")
}