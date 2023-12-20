const countEl = document.getElementById("counter")
const increaseBtn = document.getElementById("increment")
const saveBtn = document.getElementById("save")
const history = document.getElementById("history")
const resetBtn = document.getElementById("reset")
const totalBtn = document.getElementById("total")
const totalNumber = document.getElementById("totalnumber")

let count = 0

let increase = () => {
    count ++;
    countEl.innerText = count
}

let save = () => {
    history.innerText += " " + count + " - "
    count = 0
    countEl.innerText = 0
}

let reset = () => {
    history.innerText = ""
}

let total = () => {
    
}