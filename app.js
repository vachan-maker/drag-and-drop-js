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
    square.addEventListener("dragleave", dragLeave),
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
    e.preventDefault() //prevent default behaviour on drag over
    console.log("You are dragging somehting over " + e.target.classList)
}

function dragEnter (e) {
    console.log("You are entering " + e.target.classList)
    e.target.classList.add("highlight")
}

function dragLeave(e) {
    console.log("You are leaving")
    e.target.classList.remove("highlight")
}

function drop(e) {
    e.target.append(beingDragged) //appending the (item being dragged) king piece to the square
    e.target.classList.remove("highlight")
}

function dragEnd(e) {
    console.log("You have dragned")
}
