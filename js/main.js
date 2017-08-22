$(document).ready(function() {
    $(window).scroll(function () {
        var $navbar = $(".navbar-default");
        var scroll = $(window).scrollTop();
        $navbar.toggleClass('scrolled-nav', scroll > $(".navbar").height());
    });

    $('.home_slider').bxSlider({pager:false});

    $('.filtr-container').filterizr({});

    $('.simplefilter div').click(function() {
        $('.simplefilter div').removeClass('active');
        $(this).addClass('active');
    });
});

