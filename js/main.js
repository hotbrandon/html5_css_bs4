$(document).ready(function() {
    $('.carousel').carousel();

    // make full-height carousel item background
    // https://www.sitepoint.com/full-screen-bootstrap-carousel-random-initial-image/
    var $item = $('.carousel-item');
    var $wHeight = $(window).height();

    $item.height($wHeight);
    $item.addClass('full-screen');

    $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
    });
    $(this).remove();
    });

    $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
    });

});