jQuery(document).ready(function($) {
    $(".notify").css("display","none").delay(500).fadeIn(400).delay(5500).fadeOut(400);
    $(".notify").hover(function() {
        $(this).stop(true, true).fadeIn();
    }, function() {
        $(this).stop(true, true).delay(500).fadeIn(400).delay(5500).fadeOut(400);
    });
});