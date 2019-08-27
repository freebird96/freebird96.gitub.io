$(document).ready(function(){

    // $(window).on('beforeunload', function() {
    //     $(window).scrollTop(0);
    //    });

    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        $('html').toggleClass('hidden');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        $('html').toggleClass('hidden');
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
        $('.self-intro').addClass('active');
        $('.overlay').addClass('active');
        $('html').css('overflow','hidden');
    });

    $('.close-button').on('click', function(){
        $('.modal').removeClass('active');
        $('.overlay').removeClass('active');
        $('html').css('overflow','auto');
    });

    $('.overlay').on('click', function(){
        $('.modal').removeClass('active');
        $('.overlay').removeClass('active');
        $('html').css('overflow','auto');
    });

    $('.react').on('click', function(){
        $('#react').addClass('active');
        $('.overlay').addClass('active');
        $('html').css('overflow','hidden');
        
    });
    $('.bakery').on('click', function(){
        $('#bakery').addClass('active');
        $('.overlay').addClass('active');
        $('html').css('overflow','hidden');
        
    });
    $('.close-button').on('click', function(){
        $('.portfolio-modal').removeClass('active');
        $('.overlay').removeClass('active');
        $('html').css('overflow','auto');
    });

    $('.overlay').on('click', function(){
        $('.portfolio-modal').removeClass('active');
        $('.overlay').removeClass('active');
        $('html').css('overflow','auto');
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })

});

function set(){
    var slideIndex = 1;
    showSlides(slideIndex);
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;  
}



