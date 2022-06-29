function changeNameAndClass() {
    let Asadbeks = document.getElementsByClassName("Asadbeks-class");
   console.log( document.getElementsByName("button"))
   console.log( document.getElementsByTagName("button"))

    for (const Asadbek of Asadbeks) {
        Asadbek.innerHTML = "Shirina"
        Asadbek.classList.add("Shirinas-class")
    }
    for (const Asadbek of Asadbeks) {
        Asadbek.classList.remove("Asadbeks-class")
    }

    if (Asadbeks.length === 0) {
        let Shirinas = document.getElementsByClassName("Shirinas-class");
        for (const Shirina of Shirinas) {
            Shirina.innerHTML = "Asadbek"
            Shirina.classList.add("Asadbeks-class")
        }
        for (const Shirina of Shirinas) {
            Shirina.classList.remove("Shirinas-class")
        }
        Shirinas = []
    }
    Asadbeks = []


}