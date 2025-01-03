import styles from './OrderPriceBox.module.css'

type ComponentType = {
    totalPrice: number
    finalTotalPrice: number
    discount: number
    isFormValid: boolean
    onHandleSubmit: () => void
    linkText: string
}

const OrderPriceBox = ({
    totalPrice,
    finalTotalPrice,
    discount,
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

            <button disabled={!isFormValid} onClick={onHandleSubmit} className={styles.nextButton}>
                {linkText === 'Buy and pay' ? 'Buy and pay' : `Go to ${linkText}`}
            </button>

            <p className={styles.priceBoxInfo}>Don`&apos;`t delay, the products in your cart are not reserved.</p>
        </div>
    )
}

export default OrderPriceBox
