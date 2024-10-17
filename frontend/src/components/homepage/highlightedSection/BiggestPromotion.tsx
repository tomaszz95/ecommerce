import Link from 'next/link'
import Image from 'next/image'

import PromotionTimer from './PromotionTimer'

import createLinkFromProductName from '../../../components/utils/createLinkFromProductName'

import { productType } from '../../../types/types'

import styles from './BiggestPromotion.module.css'

type ComponentType = {
    product: productType
}

const BiggestPromotion = ({ product }: ComponentType) => {
    const promotionPercent = product.promotion.promotionPercent
    const currentPrice = Math.floor(product.price - (product.price * promotionPercent) / 100)
    const productLink = createLinkFromProductName(product.name)

    return (
        <Link className={styles.item} href={`${product.category.link}/${productLink}`}>
            <Image src={product.images[0]} alt={product.name} />
            <p>{product.category.name}</p>
            <h3>{product.name}</h3>
            <div className={styles.promotionPrice}>
                <span className={styles.beforePromotionPrice}>{product.price}$</span>
                <span className={styles.currentPrice}>{currentPrice}$</span>
            </div>
            <div className={styles.promotionTime}>
                <p>Left until the end of the promotion</p>
                <PromotionTimer />
            </div>
        </Link>
    )
}

export default BiggestPromotion
