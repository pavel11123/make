const btn__top = () => {

  function trackScroll() {
     var scrolled = window.pageYOffset;
     var coords = document.documentElement.clientHeight;
 
     if (scrolled > coords) {
       goTopBtn.classList.add('js-back__top-show');
     }
     if (scrolled < coords) {
       goTopBtn.classList.remove('js-back__top-show');
     }
   }
 
   function backToTop() {
     if (window.pageYOffset > 0) {
       window.scrollBy(0, -80);
       setTimeout(backToTop, 0);
     }
   }
 
    goTopBtn = document.querySelector('.js-back__top');
 
   window.addEventListener('scroll', trackScroll);
   goTopBtn.addEventListener('click', backToTop);

}

btn__top()
