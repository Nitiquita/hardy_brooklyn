$(document).ready(function () {
    let height = $(window).outerHeight();
    let width = $(window).outerWidth();
    $("#home").outerHeight(height);
    $("#about").outerHeight(height);
    $("#contact").outerHeight(height);

    $('#event').hover(
        function() {
            $('#showEvent').css({
                'display': 'block',
                'margin': 'auto'
            })
        }, 
        function() {
            $('#showEvent').css({
                'display': 'none'
            })
        }
    )
    $('#lib1').slick({
        slidesToShow:7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
})