import OrderSummaryItem from './OrderSummaryItem'
import OrderPriceBox from './OrderPriceBox'

import { orderType } from '../../types/types'

import styles from './OrderSummary.module.css'

type ComponentType = {
    isFormValid: boolean
    order: orderType
    onHandleSubmit: () => void
    link: string
    linkText: string
}

const OrderSummary = ({ isFormValid, order, onHandleSubmit, link, linkText }: ComponentType) => {
    return (
        <section className={styles.summarySection}>
            <ul>
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
            <OrderPriceBox
                totalPrice={order.totalPrice}
                finalTotalPrice={order.finalTotalPrice}
                discount={order.discount}
                link={link}
                linkText={linkText}
                isFormValid={isFormValid}
                onHandleSubmit={onHandleSubmit}
            />
        </section>
    )
}

export default OrderSummary
