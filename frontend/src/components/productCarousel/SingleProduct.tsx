import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import createLinkFromProductName from '../utils/createLinkFromProductName'

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

    let promotionPrice = 0

    if (promotion) {
        promotionPrice = Math.floor(price - (price * promotionPercent) / 100)
    }

    return (
        <Link className={`${styles.item} ${linkSize}`} key={name} href={`${categoryLink}/${productLink}`}>
            <Image src={mainImage} alt={name} />
            <p>{category}</p>
            <h3>{name}</h3>
            <div>
                <span className={`${promotion ? styles.badPrice : ''}`}>{price}$</span>
                {promotion && <span className={styles.promotionPrice}>&nbsp;&nbsp;{promotionPrice}$</span>}
            </div>
        </Link>
    )
}

export default SingleProduct
