$(document).ready(function () {
    $("#content").css({ minHeight: window.innerHeight - 74 });
});

window.onscroll = function () { stickyHeader() };

var header = document.getElementById("header-nav");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.innerWidth >= 768) {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    } else if (window.innerWidth <= 480) {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {    
    var i;
    var aSlides = document.getElementsByClassName("a-slides");
    var aImgs = document.getElementsByClassName("a-slide-img");
    // var dots = document.getElementsByClassName("dot");
    if (n > aSlides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = aSlides.length }
    for (i = 0; i < aSlides.length; i++) {
        aSlides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    for (i = 0; i < aImgs.length; i++) {
        if (window.innerWidth >= 1200) {
            aImgs[i].style.width = "100%";
            aImgs[i].style.height = "50%";
        } else if((window.innerWidth >= 768) &&  (window.innerWidth < 1200)) {
            aImgs[i].style.width = "100%";
            aImgs[i].style.height = "25%";
        }
    }
    aSlides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}

var slideIndexM = 1;
showSlidesM(slideIndexM);

function plusSlidesM(n) {
    showSlidesM(slideIndex += n);
}

function currentSlideM(n) {
    showSlidesM(slideIndex = n);
}

function showSlidesM(n) {    
    var i;
    var aSlides = document.getElementsByClassName("am-slides");
    var aImgs = document.getElementsByClassName("am-slide-img");
    // var dots = document.getElementsByClassName("dot");
    if (n > aSlides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = aSlides.length }
    for (i = 0; i < aSlides.length; i++) {
        aSlides[i].style.display = "none";
    }
    for (i = 0; i < aImgs.length; i++) {
        aImgs[i].style.width = "100%";
        aImgs[i].style.height = "50%";
    }
    aSlides[slideIndex - 1].style.display = "block";
}

var fsSlides = $(".fs-slide");
fsSlides.first().before(fsSlides.last());
var fsCounter = 0;

function changeSlide() {
    var fsSlides = $(".fs-slide");
    var activeSlide = $(".active");
    fsSlides.last().after(fsSlides.first());
    activeSlide.removeClass("active").next(".fs-slide").addClass("active");
}

var fstSlides = $(".fst-slide");
fstSlides.first().before(fstSlides.last());
var fstCounter = 0;

function changeSlideT() {
    var fstSlides = $(".fst-slide");
    var activeSlide = $(".active");
    fstSlides.last().after(fstSlides.first());
    activeSlide.removeClass("active").next(".fst-slide").addClass("active");
}

var fsmSlides = $(".fsm-slide");
fsmSlides.first().before(fsmSlides.last());
var fsmCounter = 0;

function changeSlideM() {
    var fsmSlides = $(".fsm-slide");
    var activeSlide = $(".active");
    fsmSlides.last().after(fsmSlides.first());
    activeSlide.removeClass("active").next(".fsm-slide").addClass("active");
}

setInterval(function () {
    if (window.innerWidth >= 1200) {
        changeSlide();
    } else if(window.innerWidth >= 768 && window.innerWidth < 1200) {
        changeSlideT();
    } else if (window.innerWidth <= 480) {
        changeSlideM();
    }
}, 3000);