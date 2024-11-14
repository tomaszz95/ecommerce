import Link from 'next/link'

import { orderType } from '../../types/types'

import styles from './OrderItem.module.css'

type ComponentType = {
    order: orderType
}

const OrderItem = ({ order }: ComponentType) => {
    const deliveryText = order.delivery.method === '' ? 'Not selected yet' : order.delivery.method
    const paymentText = order.payment === '' ? 'Not selected yet' : order.payment

    return (
        <Link className={styles.itemBox} href={`/user/orders/${order.orderId}`} aria-label="Click to go to order">
            <h2>Order #{order.orderId}</h2>
            <div className={styles.itemContainer}>
                <div className={styles.itemContent}>
                    <span className={styles.title}>Price:</span>
                    <span className={`${styles.value} ${styles.set}`}>${order.finalTotalPrice}</span>
                </div>
                <div className={styles.itemContent}>
                    <span className={styles.title}>Delivery method:</span>
                    <span
                        className={`${styles.value} ${deliveryText === 'Not selected yet' ? styles.notSet : styles.set}`}
                    >
                        {deliveryText}
                    </span>
                </div>
                <div className={styles.itemContent}>
                    <span className={styles.title}>Payment:</span>
                    <span
                        className={`${styles.value} ${paymentText === 'Not selected yet' ? styles.notSet : styles.set}`}
                    >
                        {paymentText}
                    </span>
                </div>
                <div className={styles.itemContent}>
                    <span className={styles.title}>Status:</span>
                    <span className={`${styles.value} ${order.status === 'Pending' ? styles.notSet : styles.set}`}>
                        {order.status}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default OrderItem
