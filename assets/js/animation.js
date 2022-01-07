
// it calcules the distance of an item and the top;
function marginTop(idItem) {
    var itemOffset = $(idItem).offset().top;
    return itemOffset
}



$(document).ready(function() {

    $target = $(".anime-item")
    windowHeight = $(window).height()
    offset = windowHeight - (windowHeight / 4);
    
    
    function scroll() {
    
        var currentTop = $(document).scrollTop()
    
        $target.each(function() {
    
            if (currentTop > marginTop(this) - offset) {
                    $(this).addClass("anime-init")
            }
    
            else {
                $(this).removeClass("anime-init")
            }
        })
    }
    
    scroll();
    
    $(document).scroll(function() {
        setTimeout(function() {
            scroll()
        }, 200);
    })
})


