let x = document.getElementById("age1")
let y = document.getElementById("age2")
let z

function calculate() {
    z = x.value - y.value
    document.getElementById("result").value = z
}