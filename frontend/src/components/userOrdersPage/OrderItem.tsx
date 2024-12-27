import Link from 'next/link'

import { userOrderType } from '../../types/types'

import styles from './OrderItem.module.css'

type ComponentType = {
    order: userOrderType
}

const OrderItem = ({ order }: ComponentType) => {
    return (
        <Link className={styles.itemBox} href={`/user/orders/${order._id}`} aria-label="Click to go to order">
            <h2>Order #{order.paymentIntentId}</h2>
            <div className={styles.itemContainer}>
                <div className={styles.itemContent}>
                    <span className={styles.title}>Price:</span>
                    <span className={`${styles.value} ${styles.set}`}>${order.total}</span>
                </div>
                <div className={styles.itemContent}>
                    <span className={styles.title}>Delivery method:</span>
                    <span
                        className={`${styles.value} ${order.delivery.method === 'Not selected yet' ? styles.notSet : styles.set}`}
                    >
                        {order.delivery.method}
                    </span>
                </div>
                <div className={styles.itemContent}>
                    <span className={styles.title}>Payment:</span>
                    <span
                        className={`${styles.value} ${order.payment === 'Not selected yet' ? styles.notSet : styles.set}`}
                    >
                        {order.payment}
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
