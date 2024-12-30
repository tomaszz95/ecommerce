'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

import SingleProduct from './SingleProduct'

import { homepageSingleProductData } from '../../../types/types'
import { productSliderSettings } from '../../../helpers/sliderSettings'

import styles from './ProductsCarousel.module.css'

type ComponentType = {
    products: homepageSingleProductData[]
}

const ProductsCarousel = ({ products }: ComponentType) => {
    return (
        <Slider {...productSliderSettings} className={styles.carousel}>
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

export default ProductsCarousel
