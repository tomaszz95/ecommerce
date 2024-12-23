import BuyMenuCart from './buyMenuCart/BuyMenuCart'
import OrderCart from './orderCart/OrderCart'

import { cartOrderType } from '../../types/types'

import styles from './CartView.module.css'

type ComponentType = {
    order: cartOrderType
}

const CartView = ({ order }: ComponentType) => {
    return (
        <div className={styles.order}>
            <OrderCart order={order} />
            <BuyMenuCart
                totalPrice={order.total}
                subtotalPrice={order.subtotal}
                discount={order.discount}
                discountValue={order.discountValue}
                orderId={order._id}
            />
        </div>
    )
}

export default CartView
