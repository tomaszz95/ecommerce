import OrdersList from './OrdersList'

import { userOrderType } from '../../types/types'

import styles from './OrdersView.module.css'

type ComponentType = {
    ordersData: userOrderType[]
}

const OrdersView = ({ ordersData }: ComponentType) => {
    return (
        <section className={styles.orderSection}>
            <h1>Your orders</h1>
            <OrdersList ordersData={ordersData} />
        </section>
    )
}

export default OrdersView
