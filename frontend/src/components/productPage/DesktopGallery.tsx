'use client'

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

            <div className={styles.thumbnailList}>
                {photos.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`${styles.thumbnail} ${index === selectedPhotoIndex ? styles.activeThumbnail : ''}`}
                    >
                        <Image src={image} alt={`Thumbnail ${productName} photo`} className={styles.thumbnailImage} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DesktopGallery
