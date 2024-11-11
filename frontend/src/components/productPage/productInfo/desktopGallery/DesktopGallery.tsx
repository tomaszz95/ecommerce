'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import DesktopPhotoCarousel from '../../../carousels/photoCarousel/DesktopPhotoCarousel'

import styles from './DesktopGallery.module.css'
import FavoriteButton from '../../../../components/UI/favorite/FavoriteButton'

type ComponentType = {
    photos: StaticImageData[]
    productName: string
    productId: string
}

const DesktopGallery = ({ photos, productName, productId }: ComponentType) => {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)

    const handleClick = (index: number) => {
        setSelectedPhotoIndex(index)
    }

    return (
        <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
                <FavoriteButton productId={productId} />
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
