'use client'

import { useState } from 'react'

import Image from 'next/image'

import DesktopPhotoCarousel from '../../../carousels/photoCarousel/DesktopPhotoCarousel'

import FavoriteButton from '../favorite/FavoriteButton'

import { API_URL } from '../../../../constans/url'

import styles from './DesktopGallery.module.css'

type ComponentType = {
    photos: string[]
    productName: string
    productId: string
    uniqueId: string
}

const DesktopGallery = ({ photos, productName, productId, uniqueId }: ComponentType) => {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)

    const handleClick = (index: number) => {
        setSelectedPhotoIndex(index)
    }

    return (
        <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
                <FavoriteButton productId={productId} uniqueId={uniqueId} />
                <Image
                    src={`${API_URL}/photos/${photos[selectedPhotoIndex]}`}
                    width={1000}
                    height={1000}
                    alt={`${productName} photo`}
                    className={styles.mainImageContent}
                    crossOrigin="anonymous"
                    unoptimized
                />
            </div>

            <DesktopPhotoCarousel photos={photos} productName={productName} onHandleClick={handleClick} />
        </div>
    )
}

export default DesktopGallery
