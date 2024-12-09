import Image from 'next/image'

import FavoriteButton from '../../productPage/productInfo/favorite/FavoriteButton'

import { API_URL } from '../../../constans/url'

import styles from './SinglePhoto.module.css'

type ComponentType = {
    photo: string
    productName: string
    productId: string
}

const SinglePhoto = ({ photo, productName, productId }: ComponentType) => {
    return (
        <div className={styles.carouselItem}>
            <FavoriteButton productId={productId} />
            <Image
                className={styles.photo}
                src={`${API_URL}/photos/${photo}`}
                width={1000}
                height={1000}
                alt={`${productName} photo`}
            />
        </div>
    )
}

export default SinglePhoto
