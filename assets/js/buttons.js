const btnAccessibility = document.getElementById("btnAccessibility");
const btnElements = document.querySelectorAll(".btn-icon")


btnAccessibility.addEventListener('click', () => {

    for (var i = 0; i < btnElements.length; i++) {

        btnElements[i].classList.toggle('active')
    }

});


const btnCheckBox = document.getElementById("checkbox");

btnCheckBox.addEventListener("change", () => {
    console.log("foi!")
})
