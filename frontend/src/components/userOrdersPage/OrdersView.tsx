import { orderType } from '../../types/types'
import OrdersList from './OrdersList'
import styles from './OrdersView.module.css'

type ComponentType = {
    orders: orderType[]
}

const OrdersView = ({ orders }: ComponentType) => {
    return (
        <section className={styles.orderSection}>
            <h1>Your orders</h1>
            {orders.length === 0 ? <p className={styles.errorText}>No orders found</p> : <OrdersList orders={orders} />}
        </section>
    )
}

export default OrdersView
