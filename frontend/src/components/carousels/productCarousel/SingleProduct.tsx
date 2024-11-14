import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import CurrentPrice from '../../currentPrice/CurrentPrice'

import createLinkFromProductName from '../../utils/createLinkFromProductName'

import styles from './SingleProduct.module.css'

type ComponentType = {
    name: string
    prodId: string
    mainImage: StaticImageData
    category: string
    categoryLink: string
    price: number
    size?: string
    promotion: boolean
    promotionPercent: number
}

const SingleProduct = ({
    name,
    prodId,
    mainImage,
    category,
    price,
    size,
    categoryLink,
    promotion,
    promotionPercent,
}: ComponentType) => {
    const linkSize = size === 'small' ? styles.small : size === 'big' ? styles.big : ''
    const productLink = createLinkFromProductName(name)

    return (
        <Link
            className={`${styles.item} ${linkSize}`}
            href={`${categoryLink}/${productLink}`}
            aria-label={`Click to see product ${name}`}
        >
            {promotion && <div className={styles.promotionBanner}>{promotionPercent}%</div>}
            <Image src={mainImage} alt={name} />
            <p>{category}</p>
            <h3>{name}</h3>
            <CurrentPrice price={price} promotion={promotion} promotionPercent={promotionPercent} />
        </Link>
    )
}

export default SingleProduct
