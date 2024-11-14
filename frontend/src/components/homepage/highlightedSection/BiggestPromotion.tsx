import Link from 'next/link'
import Image from 'next/image'

import PromotionTimer from './PromotionTimer'
import CurrentPrice from '../../../components/currentPrice/CurrentPrice'

import createLinkFromProductName from '../../../components/utils/createLinkFromProductName'

import { productType } from '../../../types/types'

import styles from './BiggestPromotion.module.css'

type ComponentType = {
    product: productType
}

const BiggestPromotion = ({ product }: ComponentType) => {
    const productLink = createLinkFromProductName(product.name)

    return (
        <Link className={styles.item} href={`${product.category.link}/${productLink}`} aria-label='Biggest promotion item'>
            <Image src={product.images[0]} alt={product.name} />
            <p>{product.category.name}</p>
            <h3>{product.name}</h3>
            <CurrentPrice
                isBig={true}
                price={product.price}
                promotion={product.promotion.isPromotion}
                promotionPercent={product.promotion.promotionPercent}
            />
            <div className={styles.promotionTime}>
                <p>Left until the end of the promotion</p>
                <PromotionTimer />
            </div>
        </Link>
    )
}

export default BiggestPromotion
