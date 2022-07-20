var slideIndexHeader = 1;
var slideIndexClients = 1;
var slideIndexReviews = 1;
var paginationHeader = document.getElementsByClassName("header_page");
var paginationClients = document.getElementsByClassName("clients_page");
var paginationReviews = document.getElementsByClassName("reviews_page");
var slider = document.getElementsByClassName("header_slider");
var sliderClients = document.getElementsByClassName("our_clients_link");
var sliderReviews = document.getElementsByClassName("reviews_slider");
showSlideHeader(slideIndexHeader);
showSlideClients(slideIndexClients);
showSlideReviews(slideIndexReviews);

function changeSlide(element){
    var page = element.getAttribute("data-page");
    if (element.classList.contains("clients_page")){
        for (var i = 0; i < sliderClients.length; i++){
            if (sliderClients[i].getAttribute("data-slide") == page){
                sliderClients[i].style.display = "block";
                slideIndexClients = i + 1;
                paginationClients[i].classList.add("active");
            } else{
                paginationClients[i].classList.remove("active");
                sliderClients[i].style.display = "none";
            }  
        }
    } else if (element.classList.contains("reviews_page")){
                for (var i = 0; i < sliderReviews.length; i++){
                    if (sliderReviews[i].getAttribute("data-slide") == page){
                        sliderReviews[i].style.display = "block";
                        slideIndexReviews = i + 1;
                        paginationReviews[i].classList.add("active");
                    } else{
                        paginationReviews[i].classList.remove("active");
                        sliderReviews[i].style.display = "none";
                    }  
                } 
            } else {
            for (var i = 0; i < slider.length; i++){
                if (slider[i].getAttribute("data-slide") == page){
                    slider[i].style.display = "block";
                    slideIndexHeader = i + 1;
                    paginationHeader[i].classList.add("active");
                 } else {
                    paginationHeader[i].classList.remove("active");
                    slider[i].style.display = "none";
                }  
        }
    }
}
    
function increaseSliderIndex(index, element){
    if (element.classList.contains("clients")){
        showSlideClients(slideIndexClients = slideIndexClients + index);
    } else if (element.classList.contains("reviews-button")){
        showSlideReviews(slideIndexReviews = slideIndexReviews + index);
    }{
        showSlideHeader(slideIndexHeader = slideIndexHeader + index);
    }

}

function showSlideHeader(index){ 
    if (index > slider.length){
        slideIndexHeader = 1;
    }
    if (index < 1){
        slideIndexHeader = slider.length;
    }
    for (var i = 0; i < slider.length; i++){
            paginationHeader[i].classList.remove("active");
            slider[i].style.display = "none";
    }
    slider[slideIndexHeader-1].style.display = "block";
    paginationHeader[slideIndexHeader-1].classList.add("active");
}

function showSlideClients(index){ 
    if (index > sliderClients.length){
        slideIndexClients = 1;
    }
    if (index < 1){
        slideIndexClients = sliderClients.length;
    }
    for (var i = 0; i < sliderClients.length; i++){
        
            sliderClients[i].style.display = "none";
            paginationClients[i].classList.remove("active");
            sliderClients[i].style.display = "none";
    }
    sliderClients[slideIndexClients-1].style.display = "block";
    paginationClients[slideIndexClients-1].classList.add("active");  
}
function showSlideReviews(index){ 
    if (index > sliderReviews.length){
        slideIndexReviews = 1;
    }
    if (index < 1){
        slideIndexReviews = sliderReviews.length;
    }
    for (var i = 0; i < sliderReviews.length; i++){
        
            sliderReviews[i].style.display = "none";
            paginationReviews[i].classList.remove("active");
            sliderReviews[i].style.display = "none";
    }
    sliderReviews[slideIndexReviews-1].style.display = "block";
    paginationReviews[slideIndexReviews-1].classList.add("active");  
}
