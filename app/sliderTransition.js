function sliderTransition(){
    var ypos = window.pageYOffset;
    var background = document.getElementById('top-slider');

    background.style.top = ypos*-0.5+'px';
}

window.addEventListener('scroll', sliderTransition);

module.exports = sliderTransition;