import OrderSummaryItem from '../orderSummary/OrderSummaryItem'

import { singleOrderType } from '../../types/types'

import styles from './SingleOrderProducts.module.css'

type ComponentType = {
    order: singleOrderType
}

const SingleOrderProducts = ({ order }: ComponentType) => {
    return (
        <div className={styles.singleBox}>
            <ul className={styles.singleList}>
                {order.orderItems.map((product) => (
                    <OrderSummaryItem
                        key={product.product}
                        productName={product.name}
                        productCount={product.amount}
                        productPrice={product.totalProductPrice}
                        productPhoto={product.image}
                    />
                ))}
            </ul>
            <div className={styles.priceContainer}>
                <div className={styles.priceBox}>
                    <span>Products value:</span>
                    <b>${order.subtotal}</b>
                </div>
                <div className={styles.priceBox}>
                    <span>Discount:</span>
                    <b>
                        {order.discount > 0 ? '-' : ''}${order.discount}
                    </b>
                </div>
                <div className={styles.priceBox}>
                    <span>Delivery:</span>
                    <b>$0</b>
                </div>
                <div className={`${styles.priceBox} ${styles.totalPrice}`}>
                    <span>Total price:</span>
                    <b>${order.total}</b>
                </div>
            </div>
        </div>
    )
}

export default SingleOrderProducts
