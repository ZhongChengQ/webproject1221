$(document).ready(function() {
    $("footer").click(function(event) {
        /* Act on the event */
        $(".foot-word").fadeIn(2000);
        //$(".foot-word").fadeOut(3000);
        $("footer").click(function(event) {
            /* Act on the event */
            $(".foot-word").fadeOut(2000);
            //$(".foot-word").fadeOut(3000);
        });
    });
});