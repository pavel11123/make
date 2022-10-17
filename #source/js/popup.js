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