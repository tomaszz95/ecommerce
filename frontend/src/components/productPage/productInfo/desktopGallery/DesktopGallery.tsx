'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import DesktopPhotoCarousel from '../../../photoCarousel/DesktopPhotoCarousel'

import styles from './DesktopGallery.module.css'

type ComponentType = {
    photos: StaticImageData[]
    productName: string
}

const DesktopGallery = ({ photos, productName }: ComponentType) => {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)

    const handleClick = (index: number) => {
        setSelectedPhotoIndex(index)
    }

    return (
        <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
                <Image
                    src={photos[selectedPhotoIndex]}
                    alt={`${productName} photo`}
                    className={styles.mainImageContent}
                />
            </div>

            <DesktopPhotoCarousel photos={photos} productName={productName} onHandleClick={handleClick} />
        </div>
    )
}

export default DesktopGallery
