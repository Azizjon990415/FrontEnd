function turnOn(){
    let circles = document.getElementsByClassName("circle");
    for (const circle of circles) {
        circle.classList.add("yellow")
    }
}
function turnOff(){
    let circles = document.getElementsByClassName("circle");
    for (const circle of circles) {
        circle.classList.remove("yellow")
    }
}
function turnOnOff(){
    let circles = document.getElementsByClassName("circle");
    for (const circle of circles) {
        if (circle.classList.contains("yellow")){
            circle.classList.remove("yellow")
        }else {
            circle.classList.add("yellow")
        }
    }
}
