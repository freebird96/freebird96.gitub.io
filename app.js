$(document).ready(function(){

    // $(window).on('beforeunload', function() {
    //     $(window).scrollTop(0);
    //    });

    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1000);
    });
    
    $('.up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.readmore').on('click', function(){
        $('.modal').addClass('active');
        $('.overlay').addClass('active');
    });

    $('.close-button').on('click', function(){
        $('.modal').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.overlay').on('click', function(){
        $('.modal').removeClass('active');
        $('.overlay').removeClass('active');
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })

});

