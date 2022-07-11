var slideIndex = 1;
showSlide(slideIndex);
function increaseSliderIndex(index){
    showSlide(slideIndex = slideIndex + index);
}
function showSlide(index){
    var slider = document.getElementsByClassName("header_slider");
    var ellipse = document.getElementsByClassName("slider_ellipse_img");
    if (index > slider.length){
        slideIndex = 1;
    }
    if (index < 1){
        slideIndex = slider.length;
    }
    for (var i = 0; i < slider.length; i++){
        slider[i].style.display = "none";
        ellipse[i].classList.remove("active");
    }
    slider[slideIndex-1].style.display = "block";
    ellipse[slideIndex-1].classList.add("active");
}
