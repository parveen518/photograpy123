$(document).ready(function(){
    // Smooth scrolling for navigation links
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 800);
    });

    // Slick Carousel for Home Section
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });
});
$(document).ready(function(){
    // Initialize Slick Carousel
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });
});
