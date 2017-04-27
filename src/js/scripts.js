$('#iconified').on('keyup', function() {
    var input = $(this);
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});


setInterval(function(){
    console.log(window.outerWidth);
    $(".imgCarousel").css("width",window.outerWidth);
}, 2000)

