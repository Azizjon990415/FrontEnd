function multiplyTwoSameNumber(){
    let firstNumberInput=document.getElementById("firstNumber")
    let firstNumber=Number(firstNumberInput.value)
    let secondNumberInput=document.getElementById("secondNumber")
    let secondNumber = Number(secondNumberInput.value)
    let a=Number(firstNumber=secondNumber)
    let solution = document.getElementById("solution")
    let answer=(firstNumber*secondNumber)
    solution.innerHTML="Solution:"+answer
}