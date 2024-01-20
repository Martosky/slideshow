let slideIndex = 1;

function slideModal(n){
    const slide = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if( n > slide.length){slideIndex = 1};
    if (n < 1){slideIndex = slide.length}

    for (let i = 0; i < slide.length; i++){
        slide[i].computedStyleMap.display = "none";
    }
    for (let i = 0; i < dots.length){
        dots[i].className = dots[i].className.replace(" active", "")
    }
}