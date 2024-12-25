import OrderItem from './OrderItem'

import { userOrderType } from '../../types/types'

import styles from './OrdersList.module.css'

type ComponentType = {
    ordersData: userOrderType[]
}

const OrdersList = ({ ordersData }: ComponentType) => {
    return (
        <ul className={styles.orderList}>
            {ordersData.map((order) => (
                <OrderItem order={order} key={order._id} />
            ))}
        </ul>
    )
}

export default OrdersList
