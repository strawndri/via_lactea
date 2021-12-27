const btnAccessibility = document.getElementById("btnAccessibility");
// const titleElement = document.getElementById("titleBlock");
const btnElements = document.querySelectorAll(".button-icon")

function showButtons() {

    for (var i = 0; i < btnElements.length; i++) {

        btnElements[i].classList.toggle('able')
    }

}

btnAccessibility.addEventListener('click', showButtons);
