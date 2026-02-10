let count = 0
let countEl = document.getElementById("count-el")
let saveRes = 0
let saveEl = document.getElementById("save-el")
// console.log(saveEl)
//console.log(countInc)

function increment() {
    count = count + 1
    //document.getElementById("count-el").innerText = count
    countEl.textContent = count
}

function save() {
    saveRes = count + " - "
    saveEl.textContent += saveRes
    count = 0
    countEl.textContent = count
}

