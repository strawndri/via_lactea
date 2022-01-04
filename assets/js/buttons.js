const btnAccessibility = document.getElementById("btnAccessibility");
const btnElements = document.querySelectorAll(".btn");
const buttonsBlockElement = document.getElementById("buttonsBlock");
const titleBlockElement = document.getElementById("titleBlock");

var size = 576;

btnAccessibility.addEventListener("click", () => {

    for (var i = 0; i < btnElements.length; i++) {

        btnElements[i].classList.toggle("buttons-enabled")
    }

    if (window.innerWidth < size) {
        titleBlockElement.classList.toggle("hidden")
        buttonsBlockElement.classList.toggle("buttons-enabled")
    }

});


// const btnCheckBox = document.getElementById("checkbox");
// const element = document.body

// btnCheckBox.addEventListener("change", () => {

//     if (element.classList[0] == "theme-light") {

//         element.classList.remove("theme-light")
//         element.classList.add("theme-dark")
//     }

//     else {
//         element.classList.remove("theme-dark")
//         element.classList.add("theme-light")  
//     }
// })

// const allTexts = document.getElementById("")
// const btnFont = document.querySelectorAll(".btn-font")

// allTexts.addEventListener("click", (e) => {
//     console.log(allTexts);

//     if (e.target.id == "fontUp") {
//         allTexts.css()
//     }
// })
