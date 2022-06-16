const images = ['asset_0.png', 'asset_1.png', 'asset_2.png', 'asset_3.png'];
const carousel = document.querySelector('.carousel');
const interval = setInterval(() => {
    startCarousel();
}, 3000);

var index = 1;

startCarousel = () => {
    carousel.style.backgroundImage = `url(images/${images[index++]})`;
    carousel.classList.remove('fade');
    void carousel.offsetWidth;
    carousel.classList.add('fade');
    if (index > images.length - 1) index = 0;
}