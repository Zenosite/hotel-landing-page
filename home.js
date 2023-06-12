var scrollPosition = 0;

var sliderNavLinks = document.querySelectorAll('.slider-nav a');
sliderNavLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    
    var targetImageId = this.getAttribute('href').substring(1);
    
    var targetImage = document.getElementById(targetImageId);
    
    scrollPosition = targetImage.offsetLeft;
    
    targetImage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});

var slider = document.querySelector('.slider');
slider.addEventListener('scroll', function() {
  if (!slider.scrollLeft) {
    slider.scrollTo({ left: scrollPosition });
  }
});
