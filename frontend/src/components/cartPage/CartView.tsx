import { orderType } from '../../types/types'
import BuyMenuCart from './BuyMenuCart'
import OrderCart from './orderCart/OrderCart'

import styles from './CartView.module.css'

type ComponentType = {
    order: orderType
}

const CartView = ({ order }: ComponentType) => {
    return (
        <div className={styles.order}>
            <OrderCart order={order} />
            <BuyMenuCart />
        </div>
    )
}

export default CartView
