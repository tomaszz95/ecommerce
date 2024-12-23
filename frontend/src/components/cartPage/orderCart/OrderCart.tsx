import OrderCartHeading from './OrderCartHeading'
import OrderCartItem from './orderItem/OrderCartItem'

import { cartOrderType } from '../../../types/types'

import styles from './OrderCart.module.css'

type ComponentType = {
    order: cartOrderType
}

const OrderCart = ({ order }: ComponentType) => {
    return (
        <section className={styles.orderCart}>
            <OrderCartHeading productsCount={order.orderItems.length} orderId={order._id} />
            <ul className={styles.orderProductsList}>
                {order.orderItems.map((product, index) => (
                    <OrderCartItem
                        product={product}
                        orderId={order._id}
                        key={product.product}
                        isLast={index === order.orderItems.length - 1}
                    />
                ))}
            </ul>
        </section>
    )
}

export default OrderCart
