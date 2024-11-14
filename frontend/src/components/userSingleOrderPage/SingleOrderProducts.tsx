import OrderSummaryItem from '../orderSummary/OrderSummaryItem'

import { orderType } from '../../types/types'

import styles from './SingleOrderProducts.module.css'

type ComponentType = {
    order: orderType
}

const SingleOrderProducts = ({ order }: ComponentType) => {
    return (
        <div className={styles.singleBox}>
            <ul className={styles.singleList}>
                {order.products.map((product) => (
                    <OrderSummaryItem
                        key={product.product.prodId}
                        productName={product.product.name}
                        productCount={product.count}
                        productPrice={product.totalProductPrice}
                        productPhoto={product.product.image}
                    />
                ))}
            </ul>
            <div className={styles.priceContainer}>
                <div className={styles.priceBox}>
                    <span>Products value:</span>
                    <b>${order.totalPrice}</b>
                </div>
                <div className={styles.priceBox}>
                    <span>Discount:</span>
                    <b>${order.discount}</b>
                </div>
                <div className={styles.priceBox}>
                    <span>Delivery:</span>
                    <b>$0</b>
                </div>
                <div className={`${styles.priceBox} ${styles.totalPrice}`}>
                    <span>Total price:</span>
                    <b>${order.finalTotalPrice}</b>
                </div>
            </div>
        </div>
    )
}

export default SingleOrderProducts
