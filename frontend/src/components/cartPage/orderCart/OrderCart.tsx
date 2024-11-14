'use client'

import OrderCartHeading from './OrderCartHeading'
import OrderCartItem from './orderItem/OrderCartItem'

import { orderType } from '../../../types/types'

import styles from './OrderCart.module.css'

type ComponentType = {
    order: orderType
}

const OrderCart = ({ order }: ComponentType) => {
    const calculateTotalCount = (order: orderType): number => {
        return order.products.reduce((total, item) => total + item.count, 0)
    }

    const productsCount = calculateTotalCount(order)

    return (
        <section className={styles.orderCart}>
            <OrderCartHeading productsCount={productsCount} />
            <ul className={styles.orderProductsList}>
                {order.products.map((product, index) => (
                    <OrderCartItem
                        product={product}
                        key={product.product.prodId}
                        isLast={index === order.products.length - 1}
                    />
                ))}
            </ul>
        </section>
    )
}

export default OrderCart
