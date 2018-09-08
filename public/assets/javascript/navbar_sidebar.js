$("#tab").click(function() {
    // $("#plus").toggleClass("rotate");
    $(this).children(":first").toggleClass("rotate");
    if($('#sidebartoggler').prop('checked')){
        $('main').removeClass('active');
    }
    else{
        $('main').addClass('active');
    }
    
    $(".navbar-side-item:first").delay(500).animate({"opacity": "1"}, 100);
    $(".navbar-side-item:nth-child(2)").delay(500).animate({"opacity": "1"}, 300);
    $(".navbar-side-item:nth-child(3)").delay(500).animate({"opacity": "1"}, 500);
    $(".navbar-side-item:nth-child(4)").delay(500).animate({"opacity": "1"}, 700);
    $(".navbar-side-item:nth-child(5)").delay(500).animate({"opacity": "1"}, 900);
    $(".navbar-side-item:nth-child(6)").delay(500).animate({"opacity": "1"}, 1100);
    $(".navbar-side-item:nth-child(7)").delay(500).animate({"opacity": "1"}, 1300);
    $(".navbar-side-item:last").delay(500).animate({"opacity": "1"}, 1500);
});

$("#tabFilter").click(function(){
    $(this).children(":first").toggleClass("rotate");
    if($('#sidebartogglerFilter').prop('checked')){
        $('main').removeClass('active');
    }
    else{
        $('main').addClass('active');
    }
})

$(document).ready( function(){
    $("#sidebartoggler, #sidebartogglerFilter").prop('checked', false); 
});

