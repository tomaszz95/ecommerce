'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import SingleProduct from '../../singleProduct/SingleProduct'

import dummyProducts from '../../../constans/dummyProducts'
import styles from './RecommendedProductsCarousel.module.css'

const RecommendedProductsCarousel = () => {
    const settings = {
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

    return (
        <Slider {...settings} className={styles.carousel}>
            {dummyProducts.map((item) => (
                <SingleProduct
                    name={item.name}
                    prodId={item.prodId}
                    mainImage={item.mainImage}
                    category={item.category}
                    price={item.price}
                    key={item.prodId}
                />
            ))}
        </Slider>
    )
}

export default RecommendedProductsCarousel
