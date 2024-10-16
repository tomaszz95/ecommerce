'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import SingleProduct from '../../productCarousel/SingleProduct'

import { dummyProductsType } from '../../../constans/dummyProducts'
import { offerSliderSettings } from '../../../helpers/sliderSettings'

import styles from './OfferCarousel.module.css'

type ComponentType = {
    products: dummyProductsType[]
}

const OfferCarousel = ({ products }: ComponentType) => {
    return (
        <Slider {...offerSliderSettings} className={styles.carousel}>
            {products.map((item) => (
                <SingleProduct
                    name={item.name}
                    prodId={item.prodId}
                    mainImage={item.images[0]}
                    category={item.category.name}
                    categoryLink={item.category.link}
                    price={item.price}
                    key={item.prodId}
                />
            ))}
        </Slider>
    )
}

export default OfferCarousel
