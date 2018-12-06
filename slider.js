const left = document.querySelector("#left");
const right = document.querySelector("#right");

var items = document.querySelectorAll('.burgers__container.slider')
var currentIndex = 0;

function updateSlides() {
    for(var i=0; i<items.length; i++){
        items[i].classList.remove('slider_active');
    }
    
    var activeElement = items[currentIndex];
    activeElement.classList.add('slider_active');
}

right.addEventListener("click", function(e) {
    e.preventDefault();
    currentIndex++;
    currentIndex = currentIndex > items.length-1 ? 0 : currentIndex;
    updateSlides();
});

left.addEventListener("click", function(e) {
    e.preventDefault();
    currentIndex--;
    currentIndex = currentIndex <= 0 ? items.length - 1 : currentIndex;
    updateSlides();
});
