$(document).ready(function() {
    $(".dropdown").hover(function() {
        $(".slides ,.trends").toggleClass("dark");
    });
});


var lastScrollTop = 0;
document.onscroll = () => {
    var x = document.documentElement.scrollTop;

    if (x > 40) {
        $(".navigation").addClass("op-none")

    } else {
        $(".navigation").removeClass("op-none")
    }




    var st = document.documentElement.scrollTop;

    if (st > lastScrollTop) {

    } else {
        $(".navigation").removeClass("op-none")
    }
    lastScrollTop = st;




}


//slide show >>>



let slideIndex = 1;

function Externalljs() {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // setTimeout(showSlides, 2000);

}




//scroll trends


function scrollRight1() {

    document.getElementById("slideshow-box").scrollBy({
        top: 0,
        left: -266,
        behavior: "smooth"
    });

}

function scrollLeft1() {
    document.getElementById("slideshow-box").scrollBy({
        top: 0,
        left: 266,
        behavior: "smooth"
    });
}
