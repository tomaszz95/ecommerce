import Link from 'next/link'
import Image from 'next/image'

import PromotionTimer from './PromotionTimer'
import CurrentPrice from '../../../components/currentPrice/CurrentPrice'

import createLinkFromProductName from '../../../components/utils/createLinkFromProductName'

import { homepageSingleProductData } from '../../../types/types'

import { API_URL } from '../../../constans/url'

import styles from './BiggestPromotion.module.css'

type ComponentType = {
    product: homepageSingleProductData
}

const BiggestPromotion = ({ product }: ComponentType) => {
    const productLink = createLinkFromProductName(product.name)
    const categoryLink = product.category.toLowerCase()

    return (
        <Link
            className={styles.item}
            href={`/shop/${categoryLink}/${product.uniqueId}/${productLink}`}
            aria-label="Biggest promotion item"
        >
            <Image
                src={`${API_URL}/photos/${product.image}`}
                width={1000}
                height={1000}
                alt={product.name}
                crossOrigin="anonymous"
                unoptimized
            />
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <CurrentPrice isBig={true} price={product.price} promotionPrice={product.promotion.promotionPrice} />
            <div className={styles.promotionTime}>
                <p>Left until the end of the promotion</p>
                <PromotionTimer />
            </div>
        </Link>
    )
}

export default BiggestPromotion
