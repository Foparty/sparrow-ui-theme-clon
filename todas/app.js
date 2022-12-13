// animacion de portada

let index = 1;

const moveTo = (e) => {
  showSlide((index = e));
};

const showSlide = (e) => {
  const images = document.querySelectorAll('.slider-item');
  const indicators = document.querySelectorAll('.slider-indicators span');

  e > images.length ? (index = 1) : null;
  e < 1 ? (index = images.length) : null;

  for (let image of images) {
    image.style.opacity = '0';
  }

  for (let indicator of indicators) {
    indicator.style.width = '.5rem';
    indicator.style.backgroundColor = '#ffffffaf';
  }

  images[index - 1].style.opacity = '1';
  indicators[index - 1].style.width = '2rem';
  indicators[index - 1].style.backgroundColor = '#fff';
};

showSlide();

const interval = 5000; // interval in milliseconds

// Start the autoplay
setInterval(() => {
  showSlide((index += 1));
}, interval);

// fin de animacion de portada
