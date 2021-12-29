const btnAccessibility = document.getElementById("btnAccessibility");
const btnElements = document.querySelectorAll(".btn, .buttons-block")
const titleBlockElement = document.getElementById("titleBlock")


btnAccessibility.addEventListener('click', () => {

    for (var i = 0; i < btnElements.length; i++) {

        btnElements[i].classList.toggle('buttons-enabled')
    }

    titleBlockElement.classList.toggle('hidden')

});


const btnCheckBox = document.getElementById("checkbox");

btnCheckBox.addEventListener("change", () => {
    console.log("foi!")
})
