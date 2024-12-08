import styles from './CurrentPrice.module.css'

type ComponentType = {
    price: number
    promotionPrice: number
    isBig?: boolean
}

const CurrentPrice = ({ price, promotionPrice, isBig }: ComponentType) => {
    return (
        <p className={`${styles.priceBox} ${isBig ? styles.big : ''}`}>
            <span className={`${price !== promotionPrice ? styles.defaultPrice : styles.curPrice}`}>${price}</span>
            {price !== promotionPrice && <span className={styles.promotionPrice}>&nbsp;&nbsp;${promotionPrice}</span>}
        </p>
    )
}

export default CurrentPrice
