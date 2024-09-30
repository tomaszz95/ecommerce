const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

export default sliderSettings
