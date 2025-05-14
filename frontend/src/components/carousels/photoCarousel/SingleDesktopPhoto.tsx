import Image from 'next/image'

import { STATIC_URL } from '../../../constans/url'

import styles from './SingleDesktopPhoto.module.css'

type ComponentType = {
    photo: string
    productName: string
    onClick: () => void
}

const SingleDesktopPhoto = ({ photo, productName, onClick }: ComponentType) => {
    return (
        <div className={styles.photoWrapper} onClick={onClick}>
            <Image
                className={styles.photo}
                src={`${STATIC_URL}/photos/${photo}`}
                width={1000}
                height={1000}
                alt={`${productName} photo`}
                crossOrigin="anonymous"
                unoptimized
            />
        </div>
    )
}

export default SingleDesktopPhoto
