import Swiper from '../vendor/swiper.min'
import vars from '../_vars'

/*const certificatesSlider = new Swiper(vars.$certificatesSlider,{
    loop: true,
    pagination: {
        el: '.banner__pag',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});*/


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',//количество слайдов
        clickable: true,
    },
});



