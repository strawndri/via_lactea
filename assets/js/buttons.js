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


$("#checkbox").change(function() {


    if ($('body').hasClass('theme-light')) {

        $('body').toggleClass("theme-light").toggleClass("theme-dark")
    }

    else {
        $('body').toggleClass("theme-dark").toggleClass("theme-light")
 
    }
})

// const allTexts = document.getElementById("")
// const btnFont = document.querySelectorAll(".btn-font")

// allTexts.addEventListener("click", (e) => {
//     console.log(allTexts);

//     if (e.target.id == "fontUp") {
//         allTexts.()
//     }
// })
