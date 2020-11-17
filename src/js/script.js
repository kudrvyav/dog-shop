import Swiper from 'swiper'
import { Navigation, Pagination } from "swiper/js/swiper.esm";
Swiper.use(Navigation, Pagination)

$(function () { 
    var mySwiper = new Swiper ('.title-slider', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.title-slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.title-slider-next',
            prevEl: '.title-slider-prev',
        } 
    });

    $('.js-choose').on('click', function () {
        $('.choose-item-card').removeClass('active');
        $(this).parent().toggleClass('active');
    });
});