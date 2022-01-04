// const btnAccessibility = $("#btnAccessibility");
const btnElements = $(".btn");
// const buttonsBlockElement = $("#buttonsBlock");
// const titleBlockElement = $("#titleBlock");

var size = 576;

$("#btnAccessibility").click(function() {

    for (var i = 0; i < btnElements.length; i++) {

        $(".btn").toggleClass("buttons-enabled");
    }

    if (window.innerWidth < size) {
        $("#titleBlock").toggleClass("hidden")
        $("#buttonsBlock").toggleClass("buttons-enabled")
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
//         allTexts.()
//     }
// })
