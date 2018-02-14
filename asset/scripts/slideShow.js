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
  var slides = document.getElementsByClassName("imageCell");
  var dots = document.getElementsByClassName("dot");

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
}

// Auto Scroll until slide show is stopped

// scroll every 4 seconds
 var scrollTimer =  setInterval(function(){
  showSlides(slideIndex += 1);
}, 4000);

// stop scroll when button is pushed (function called on controls in HTML)
 function stopScroll() {
    clearInterval(scrollTimer);
}