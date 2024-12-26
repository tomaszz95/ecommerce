import CurrentPrice from '../../../currentPrice/CurrentPrice'

import styles from './OrderCartPrice.module.css'

type ComponentType = {
    totalProductPrice: number
    price: number
    promotionPrice: number
    isLast: boolean
}

const OrderCartPrice = ({ totalProductPrice, price, promotionPrice, isLast }: ComponentType) => {
    const totalPriceRound = Math.round(totalProductPrice)

    return (
        <div className={`${styles.orderItemPriceBox} ${isLast ? styles.noBorder : ''}`}>
            <div className={styles.orderItemPrice}>
                <p>Price</p>
                <CurrentPrice price={price} promotionPrice={promotionPrice} isBig />
            </div>
            <div className={styles.orderItemValue}>
                <p>Value</p>
                <span>${totalPriceRound}</span>
            </div>
        </div>
    )
}

export default OrderCartPrice
