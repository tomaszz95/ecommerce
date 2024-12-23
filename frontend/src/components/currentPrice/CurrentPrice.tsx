import styles from './CurrentPrice.module.css'

type ComponentType = {
    price: number
    promotionPrice: number
    isBig?: boolean
}

const CurrentPrice = ({ price, promotionPrice, isBig }: ComponentType) => {
    const priceFixed = Math.round(price)
    const promotionPriceFixed = Math.round(promotionPrice)
    return (
        <p className={`${styles.priceBox} ${isBig ? styles.big : ''}`}>
            <span className={`${priceFixed !== promotionPriceFixed ? styles.defaultPrice : styles.curPrice}`}>
                ${priceFixed}
            </span>
            {priceFixed !== promotionPriceFixed && (
                <span className={styles.promotionPrice}>&nbsp;&nbsp;${promotionPriceFixed}</span>
            )}
        </p>
    )
}

export default CurrentPrice
