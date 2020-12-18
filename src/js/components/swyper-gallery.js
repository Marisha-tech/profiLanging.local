import Swiper from '../vendor/swiper.min'
var aboutSwiper = new Swiper('.about-container', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
