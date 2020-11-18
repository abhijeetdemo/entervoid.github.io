// SLIDER SINGLE

$(document).ready(function(){
  $('.slider').slick({
    prevArrow: '.arrow__prev',
    nextArrow: '.arrow__next',
    infinite: true,
    autoplay: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    touchMove: true,
    pauseOnHover:false,
    autoplaySpeed: 2000
  });
}); 

// MENU/NAVBAR TOGGLE

const menuIcon = document.querySelector('.navigation__menu');
const navbar = document.querySelector('.navigation__nav');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change-js');
});

