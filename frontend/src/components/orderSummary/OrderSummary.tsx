import OrderSummaryItem from './OrderSummaryItem'
import OrderPriceBox from './OrderPriceBox'

import { singleOrderType } from '../../types/types'

import styles from './OrderSummary.module.css'

type ComponentType = {
    isFormValid: boolean
    order: singleOrderType
    onHandleSubmit: () => void
    linkText: string
}

const OrderSummary = ({ isFormValid, order, onHandleSubmit, linkText }: ComponentType) => {
    return (
        <section className={styles.summarySection}>
            <ul>
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
            <OrderPriceBox
                totalPrice={order.subtotal}
                finalTotalPrice={order.total}
                discount={order.discount}
                linkText={linkText}
                isFormValid={isFormValid}
                onHandleSubmit={onHandleSubmit}
            />
        </section>
    )
}

export default OrderSummary
