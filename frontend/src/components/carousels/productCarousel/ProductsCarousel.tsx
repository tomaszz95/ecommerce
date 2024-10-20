'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import SingleProduct from './SingleProduct'

import { productType } from '../../../types/types'
import { productSliderSettings } from '../../../helpers/sliderSettings'

import styles from './ProductsCarousel.module.css'

type ComponentType = {
    products: productType[]
}

const ProductsCarousel = ({ products }: ComponentType) => {
    return (
        <Slider {...productSliderSettings} className={styles.carousel}>
            {products.map((item) => (
                <SingleProduct
                    name={item.name}
                    prodId={item.prodId}
                    mainImage={item.images[0]}
                    category={item.category.name}
                    categoryLink={item.category.link}
                    price={item.price}
                    key={item.prodId}
                    promotion={item.promotion.isPromotion}
                    promotionPercent={item.promotion.promotionPercent}
                />
            ))}
        </Slider>
    )
}

export default ProductsCarousel
