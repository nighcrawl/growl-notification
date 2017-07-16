jQuery(document).ready(function($) {
    $(".notify").css("display","none").delay(1000).fadeIn(400).delay(5500).fadeOut(800);
    $(".notify").hover(function() {
        $(this).stop(true, true).fadeIn();
    }, function() {
        $(this).stop(true, true).delay(1000).fadeIn(400).delay(5500).fadeOut(800);
    });
});