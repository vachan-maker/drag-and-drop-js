const king = document.querySelector(".chesspiece")
console.log(king)
const squares = document.querySelector(".square")
console.log(squares)
const infoDisplay = document.querySelector("#info")

//added an event listener, dragging function is executed when the event occurs
king.addEventListener("drag", dragging)

king.addEventListener("dragstart", dragStart)

let beingDragged 
function dragStart (e) {
    beingDragged = e.target
    console.log("Dragging has started on" + beingDragged)

}
function dragging (e) {
    console.log(beingDragged.id + "is being dragged.")
    infoDisplay.textContent = "You are dragging a " + beingDragged.id
}
