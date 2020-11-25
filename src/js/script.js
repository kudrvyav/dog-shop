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

    var swiper = new Swiper('.pelated-products-wrapper', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.pelated-products-next',
          prevEl: '.pelated-products-prev',
        },
      });

    $('.js-choose').on('click', function () {
        $('.choose-item-card').removeClass('active');
        $(this).parent().toggleClass('active');
    });

    $('.header-menu__item').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('active');
        }
    });

    $('.js-question').on('click', function () {
        $('.question-item').removeClass('active');
        $(this).parent().toggleClass('active');
    });



});