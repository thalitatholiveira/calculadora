function clearButton() {
    document.getElementById('result').innerHTML = ""
}

function backButton() {
    let inputNumber = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = inputNumber.substring(0, inputNumber.length -1)
}

function insert(num) {
    let inputNumber = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = inputNumber + num
}

function calculate() {
    let inputNumber = document.getElementById('result').innerHTML

    if (inputNumber) {
        document.getElementById('result').innerHTML = eval(inputNumber)
    } else {
        document.getElementById('result').innerHTML = ""
    }
}