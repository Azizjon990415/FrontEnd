function changeCircleAppearRight(){
    let circle = document.getElementById("circle");
    circle.style.right=0
    setInterval(moveCircleToLeft,100)
}
function moveCircleToLeft(){
    let circle = document.getElementById("circle");

    circle.style.right=(Number(circle.style.right.replace("px",""))+50)+"px"
}
setTimeout(changeCircleAppearRight,3000)
let array=[1,2,3,4,5,6]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
array.map(value => console.log(value))