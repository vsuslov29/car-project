$(function () {
    $('.download-slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                }
            }         
        ]
    })

    $('.reviews-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                }
            }             
        ]
    })

    $('.burger-wrapper').on('click', function () {
        $('.list').toggleClass('list-active')
    })
});