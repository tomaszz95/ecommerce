import countPromotionPrice from '../../helpers/countPromotionPrice'

import styles from './CurrentPrice.module.css'

type ComponentType = {
    price: number
    promotion: boolean
    promotionPercent: number
    isBig?: boolean
}

const CurrentPrice = ({ price, promotion, promotionPercent, isBig }: ComponentType) => {
    const currentPrice = promotion ? countPromotionPrice(price, promotionPercent) : price

    return (
        <div className={`${styles.priceBox} ${isBig ? styles.big : ''}`}>
            <span className={`${promotion ? styles.defaultPrice : styles.curPrice}`}>${price}</span>
            {promotion && <span className={styles.promotionPrice}>&nbsp;&nbsp;${currentPrice}</span>}
        </div>
    )
}

export default CurrentPrice
