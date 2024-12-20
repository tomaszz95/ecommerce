import TrashIcon from '../../../assets/icons/trash.svg'
import Image from 'next/image'
import styles from './OrderCartHeading.module.css'

type ComponentType = {
    productsCount: number
}

const OrderCartHeading = ({ productsCount }: ComponentType) => {
    const clearOrderHandler = () => {
        console.log('clear order')
    }

    return (
        <div className={styles.orderHeading}>
            <div className={styles.orderTitle}>
                <h1>Cart</h1>
                <span>
                    ({productsCount} {productsCount === 1 ? 'product' : 'products'})
                </span>
            </div>
            <button className={styles.orderClearBtn} onClick={clearOrderHandler} aria-label="Clear cart">
                <Image src={TrashIcon} alt="" />
                <span>Clear cart</span>
            </button>
        </div>
    )
}

export default OrderCartHeading
