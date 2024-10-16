'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

import SingleDesktopPhoto from './SingleDesktopPhoto'

import { desktopPhotoSliderSettings } from '../../helpers/sliderSettings'

import styles from './DesktopPhotoCarousel.module.css'

type ComponentType = {
    photos: any[]
    productName: string
    onHandleClick: (index: number) => void
}

const DesktopPhotoCarousel = ({ photos, productName, onHandleClick }: ComponentType) => {
    return (
        <Slider {...desktopPhotoSliderSettings} className={styles.carousel}>
            {photos.map((item, index) => (
                <SingleDesktopPhoto
                    photo={item}
                    key={index}
                    productName={productName}
                    onClick={() => onHandleClick(index)}
                />
            ))}
        </Slider>
    )
}

export default DesktopPhotoCarousel
