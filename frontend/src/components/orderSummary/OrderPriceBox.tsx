import OrderAuthButton from '../UI/buttons/OrderAuthButton'

import styles from './OrderPriceBox.module.css'

type ComponentType = {
    totalPrice: number
    finalTotalPrice: number
    discount: number
    link: string
    isFormValid: boolean
    onHandleSubmit: () => void
    linkText: string
}

const OrderPriceBox = ({
    totalPrice,
    finalTotalPrice,
    discount,
    link,
    isFormValid,
    onHandleSubmit,
    linkText,
}: ComponentType) => {
    return (
        <div className={styles.priceContainer}>
            <div className={styles.priceBox}>
                <span>Products value:</span>
                <b>${totalPrice}</b>
            </div>
            <div className={styles.priceBox}>
                <span>Discount:</span>
                <b>${discount}</b>
            </div>
            <div className={styles.priceBox}>
                <span>Delivery:</span>
                <b>$0</b>
            </div>
            <div className={`${styles.priceBox} ${styles.totalPrice}`}>
                <span>Total price:</span>
                <b>${finalTotalPrice}</b>
            </div>

            <OrderAuthButton href={link} disabled={!isFormValid} onClick={onHandleSubmit}>
                {linkText === 'Buy and pay' ? 'Buy and pay' : `Go to ${linkText}`}
            </OrderAuthButton>

            <p className={styles.priceBoxInfo}>Don't delay, the products in your cart are not reserved.</p>
        </div>
    )
}

export default OrderPriceBox
