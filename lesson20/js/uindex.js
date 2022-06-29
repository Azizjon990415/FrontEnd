function findBiggest() {
    let firstNumberInput = document.getElementById("firstNumber")
    let firstNumber = Number(firstNumberInput.value)
    let secondNumberInput = document.getElementById("secondNumber")
    let secondNumber = Number(secondNumberInput.value)
    let thirdNumberInput = document.getElementById("thirdNumber")
    let thirdNumber = Number(thirdNumberInput.value)
    let solution = document.getElementById("solution")
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        solution.innerHTML = "Solution:" + firstNumber
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        solution.innerHTML = "Solution:" + secondNumber
    } else {
        solution.innerHTML = "Solution:" + thirdNumber
    }
}