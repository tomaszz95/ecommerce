'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

import SinglePhoto from './SinglePhoto'

import { photoSliderSettings } from '../../helpers/sliderSettings'

import styles from './PhotoCarousel.module.css'

type ComponentType = {
    photos: any[]
    productName: string
}

const PhotoCarousel = ({ photos, productName }: ComponentType) => {
    return (
        <Slider {...photoSliderSettings} className={styles.carousel}>
            {photos.map((item, index) => (
                <SinglePhoto photo={item} key={index} productName={productName} />
            ))}
        </Slider>
    )
}

export default PhotoCarousel
