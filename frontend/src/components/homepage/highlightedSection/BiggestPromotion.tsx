import Link from 'next/link'
import Image from 'next/image'

import PromotionTimer from './PromotionTimer'

import createLinkFromProductName from '../../../components/utils/createLinkFromProductName'

import dummyProducts from '../../../constans/dummyProducts'

import styles from './BiggestPromotion.module.css'

const BiggestPromotion = () => {
    const promotionProduct = dummyProducts[0]
    const promotionValue = 20
    const promotionValueInCash = Math.floor((promotionValue * +promotionProduct.price) / 100)
    const currentPrice = promotionProduct.price - promotionValueInCash
    const productLink = createLinkFromProductName(promotionProduct.name)

    return (
        <Link className={styles.item} href={`${promotionProduct.categoryLink}/${productLink}`}>
            <Image src={promotionProduct.mainImage} alt={promotionProduct.name} />
            <p>{promotionProduct.category}</p>
            <h3>{promotionProduct.name}</h3>
            <div className={styles.promotionPrice}>
                <span className={styles.beforePromotionPrice}>{promotionProduct.price}$</span>
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
