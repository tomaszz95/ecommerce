import { orderType } from '../../types/types'
import BuyMenuCart from './buyMenuCart/BuyMenuCart'
import OrderCart from './orderCart/OrderCart'

import styles from './CartView.module.css'

type ComponentType = {
    order: orderType
}

const CartView = ({ order }: ComponentType) => {
    const isEmptyObject = (obj: object) => Object.keys(obj).length === 0

    return (
        <div className={styles.order}>
            {!isEmptyObject(order) ? (
                <>
                    <OrderCart order={order} />
                    <BuyMenuCart totalPrice={order.totalPrice} />
                </>
            ) : (
                <p className={styles.errorText}>No started order yet</p>
            )}
        </div>
    )
}

export default CartView
