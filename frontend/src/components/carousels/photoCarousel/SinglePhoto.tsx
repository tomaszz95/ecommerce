import FavoriteButton from '../../productPage/productInfo/favorite/FavoriteButton'
import Image, { StaticImageData } from 'next/image'

import styles from './SinglePhoto.module.css'

type ComponentType = {
    photo: StaticImageData
    productName: string
    productId: string
}

const SinglePhoto = ({ photo, productName, productId }: ComponentType) => {
    return (
        <div className={styles.carouselItem}>
            <FavoriteButton productId={productId} />
            <Image className={styles.photo} src={photo} alt={`${productName} photo`} />
        </div>
    )
}

export default SinglePhoto
