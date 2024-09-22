'use client'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
                <Link className={styles.carouselItem} key={item.name} href="/">
                    <Image src={item.mainImage} alt={item.name} />
                    <p>{item.category}</p>
                    <h3>{item.name}</h3>
                    <span>{item.price}$</span>
                </Link>
            ))}
        </Slider>
    )
}

export default RecommendedProductsCarousel
