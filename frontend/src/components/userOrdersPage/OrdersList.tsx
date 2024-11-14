import OrderItem from './OrderItem'

import { orderType } from '../../types/types'

import styles from './OrdersList.module.css'

type ComponentType = {
    orders: orderType[]
}

const OrdersList = ({ orders }: ComponentType) => {
    return (
        <ul className={styles.orderList}>
            {orders.map((order) => (
                <OrderItem order={order} key={order.orderId} />
            ))}
        </ul>
    )
}

export default OrdersList
