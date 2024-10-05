'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import SingleProduct from '../../product/SingleProduct'

import dummyProducts from '../../../constans/dummyProducts'
import { offerSliderSettings } from '../../../helpers/sliderSettings'

import styles from './OfferCarousel.module.css'

const OfferCarousel = () => {
    return (
        <Slider {...offerSliderSettings} className={styles.carousel}>
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

export default OfferCarousel
