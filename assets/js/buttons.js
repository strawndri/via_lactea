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


$(".btn-font").click (function(e) {

    var fontSize = parseInt($("main").css("font-size"))

    if (e.target.id == "fontUp") {
        fontSize < 24 ?  $("main").css("font-size", fontSize + 1) : console.log('Stop!')
    }

    else {
        fontSize > 14 ?  $("main").css("font-size", fontSize - 1) : console.log('Stop!')
    }    
})
