import Swiper from 'swiper';

$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});