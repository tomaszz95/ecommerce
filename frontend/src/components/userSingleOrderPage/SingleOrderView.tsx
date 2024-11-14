import SingleOrderProducts from './SingleOrderProducts'
import SummaryData from '../summaryPage/summaryData/SummaryData'

import { orderType } from '../../types/types'

import styles from './SingleOrderView.module.css'

type ComponentType = {
    order: orderType
}

const SingleOrderView = ({ order }: ComponentType) => {
    return (
        <div className={styles.orderContainer}>
            <h1>Order #{order.orderId}</h1>
            <h2 className={`${styles.value} ${order.status === 'Pending' ? styles.notSet : styles.set}`}>
                {order.status}
            </h2>
            <div className={styles.singleOrderMain}>
                <SingleOrderProducts order={order} />
                <section className={styles.orderData}>
                    <SummaryData order={order} singleOrder={true} />
                </section>
            </div>
        </div>
    )
}

export default SingleOrderView
