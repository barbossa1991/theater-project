$(function () {

    $('.header-slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><div class="nav-button"><span>След</span><div class="arrow-next"></div></div></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><div class="nav-button"><span>Пред</span><div class="arrow-prev"></div></div></button>'
    });

    $('.productions__slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.menu-btn').on('click', function () {
        $('.header-top__list').slideToggle();
    })

});