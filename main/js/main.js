
const menu__open = () => {

function menu__openjs() {
   document.querySelector(".phone__menu-nav").classList.add('js-open__menu');
   document.querySelector(".phone__menu-nav").classList.remove('js-close__menu');
   document.getElementById("phone__menu-id-body").style.overflow = "hidden";
}

function menu__closejs() {
   document.querySelector(".phone__menu-nav").classList.add('js-close__menu');
   document.querySelector(".phone__menu-nav").classList.remove('js-open__menu');
   document.getElementById("phone__menu-id-body").style.overflow = "visible";
}

const phoneOpen = document.querySelector('.js-phone__open');
const phoneClose = document.querySelectorAll('.js-phone__close');

for (var i = 0; i < phoneClose.length; i++) {
   phoneClose[i].addEventListener('click', menu__closejs);
   };

phoneOpen.addEventListener('click', menu__openjs);

}

menu__open()
const main__popup = () => {
   const popupBtn = document.querySelectorAll('.js-popup__main')
   const popupModal = document.querySelector('.main__popup')

   const cartCloseBtn = popupModal.querySelector('.cart-close')

   const openPopup = () => {
      popupModal.style.display = 'flex'
      document.getElementById("phone__menu-id-body").style.overflow = "hidden";
   }

   const closePopup = () => {
      popupModal.style.display = 'none'
      document.getElementById("phone__menu-id-body").style.overflow = "visible";
   }
   for (var i = 0; i < popupBtn.length; i++) {
      popupBtn[i].addEventListener('click', openPopup);
      };
   // popupBtn.addEventListener('click', openPopup)
   cartCloseBtn.addEventListener('click', closePopup)
}

main__popup()
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
