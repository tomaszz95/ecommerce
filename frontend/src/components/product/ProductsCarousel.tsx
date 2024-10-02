'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import SingleProduct from './SingleProduct'

import dummyProducts from '../../constans/dummyProducts'
import sliderSettings from '../../helpers/sliderSettings'
import styles from './ProductsCarousel.module.css'

const ProductsCarousel = () => {
    return (
        <Slider {...sliderSettings} className={styles.carousel}>
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

export default ProductsCarousel
