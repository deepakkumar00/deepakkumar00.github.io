var link = document.getElementById("totop");
var amountScrolled = 250;

window.addEventListener('scroll', function(e) {
    if ( window.pageYOffset > amountScrolled ) {
        link.classList.add('show');
    } else {
        link.className = 'totop';
    }
});

//Scrolls to Top
  link.addEventListener('click', function(e) {
      e.preventDefault();

      var distance = 0 - window.pageYOffset;
      var increments = distance/(500/16);
      function animateScroll() {
          window.scrollBy(0, increments);
          if (window.pageYOffset <= document.body.offsetTop) {
              clearInterval(runAnimation);
          }
      };
      // Loop the animation function
      var runAnimation = setInterval(animateScroll, 16);
  });