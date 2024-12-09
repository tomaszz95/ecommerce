'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import SingleProduct from '../productCarousel/SingleProduct'

import { homepageSingleProductData } from '../../../types/types'
import { offerSliderSettings } from '../../../helpers/sliderSettings'

import styles from './OfferCarousel.module.css'

type ComponentType = {
    products: homepageSingleProductData[]
}

const OfferCarousel = ({ products }: ComponentType) => {
    return (
        <Slider {...offerSliderSettings} className={styles.carousel}>
            {products.map((item) => (
                <SingleProduct
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    promotion={item.promotion}
                    uniqueId={item.uniqueId}
                    image={item.image}
                    key={item._id}
                />
            ))}
        </Slider>
    )
}

export default OfferCarousel
