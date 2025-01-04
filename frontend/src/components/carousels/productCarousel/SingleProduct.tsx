import Link from 'next/link'
import Image from 'next/image'

import CurrentPrice from '../../currentPrice/CurrentPrice'

import createLinkFromProductName from '../../utils/createLinkFromProductName'

import { API_URL } from '../../../constans/url'

import styles from './SingleProduct.module.css'

type ComponentType = {
    name: string
    price: number
    category: string
    promotion: {
        isPromotion: boolean
        promotionPercent: number
        promotionPrice: number
    }
    uniqueId: string
    image: string
}

const SingleProduct = ({ name, price, category, promotion, uniqueId, image }: ComponentType) => {
    const categoryLink = category.toLowerCase()
    const productLink = createLinkFromProductName(name)

    return (
        <Link
            className={styles.item}
            href={`/shop/${categoryLink}/${uniqueId}/${productLink}`}
            aria-label={`Click to see product ${name}`}
        >
            {promotion.isPromotion && <span className={styles.promotionBanner}>{promotion.promotionPercent}%</span>}
            <Image
                src={`${API_URL}/photos/${image}`}
                width={1000}
                height={1000}
                alt={name}
                crossOrigin="anonymous"
                unoptimized
            />
            <p>{category}</p>
            <h3>{name}</h3>
            <span className={styles.price}>
                <CurrentPrice price={price} promotionPrice={promotion.promotionPrice} />
            </span>
        </Link>
    )
}

export default SingleProduct
