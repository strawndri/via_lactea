// import size from "../scss/helpers/_breakpoints.scss";

const btnAccessibility = document.getElementById("btnAccessibility");
const btnElements = document.querySelectorAll(".btn");
const buttonsBlockElement = document.getElementById("buttonsBlock");
const titleBlockElement = document.getElementById("titleBlock");

var size = 576;

btnAccessibility.addEventListener('click', () => {

    for (var i = 0; i < btnElements.length; i++) {

        btnElements[i].classList.toggle('buttons-enabled')
    }

    if (window.innerWidth < size) {
        titleBlockElement.classList.toggle('hidden')
        buttonsBlockElement.classList.toggle('buttons-enabled')
    }

});


const btnCheckBox = document.getElementById("checkbox");

btnCheckBox.addEventListener("change", () => {

})
