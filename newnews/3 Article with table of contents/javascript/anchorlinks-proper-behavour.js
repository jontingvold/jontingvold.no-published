// Enhanced browser behavour for anchor links (#links)
// This script replaces anchor links browser behavour with links that only scrolls (animated) without effecting the browser history.

$(document).ready(function() {
    var offset = 100 //px
    var animation_time = 250 //ms
    
    $("a[href^='#']").click(function (event) {
        var id_with_hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id_with_hash).offset().top - offset
        }, animation_time);
        event.stopPropagation();
        return false;
    });
});