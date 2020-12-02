
let slideIndex = 1;
const burgerButton = document.querySelector('.menu-btn');
const burgerMenu = document.querySelector('.burger-menu');
console.log(burgerMenu);
const aboutUsText = document.querySelector('.about-us--text');
const aboutUsImg = document.querySelector('.about-us--img');
const aboutUsAdvantages = document.querySelector('.about-us--advantages');

showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("swiper-slide");
  let paginationButtons = document.querySelectorAll('.pagination--button');
  console.log(paginationButtons);

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  paginationButtons.forEach(item => {
    item.addEventListener('click', buttons)
  });
  
  function buttons() {
    paginationButtons.forEach(item => {
      item.classList.remove('active');
    })
    this.classList.add('active');
  }

  slides[slideIndex - 1].style.display = "flex";

}

burgerButton.addEventListener('click', function() {
  burgerButton.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});


  function adaptive() {
    if (screen.width <= 992) {
      aboutUsAdvantages.before(aboutUsImg);
    } else {
      ''
    }
  };

  adaptive();


