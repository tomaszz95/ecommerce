'use client'

import DesktopPhotoCarousel from '../../../components/photoCarousel/DesktopPhotoCarousel'
import Image from 'next/image'

import { useState } from 'react'

import styles from './DesktopGallery.module.css'

type ComponentType = {
    photos: any[]
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
