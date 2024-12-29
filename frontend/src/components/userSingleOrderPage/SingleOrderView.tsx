import SingleOrderProducts from './SingleOrderProducts'
import SummaryData from '../summaryPage/summaryData/SummaryData'
import HightlightButton from '../UI/buttons/HightlightButton'

import { FRONTEND_URL } from '../../constans/url'

import { singleOrderType } from '../../types/types'

import styles from './SingleOrderView.module.css'

type ComponentType = {
    order: singleOrderType
}

const SingleOrderView = ({ order }: ComponentType) => {
    return (
        <div className={styles.orderContainer}>
            <h1>Order #{order.paymentIntentId}</h1>
            <h2
                className={`${styles.value} ${order.status === 'Pending' ? styles.notSet : order.status === 'Confirmed' ? styles.confirmed : styles.set}`}
            >
                {order.status}
            </h2>
            <div className={styles.singleOrderMain}>
                <div className={styles.productBox}>
                    <SingleOrderProducts order={order} />
                    {order.status === 'Confirmed' && (
                        <div className={styles.payForOrder}>
                            <h3>You haven't paid for the product yet. Do it now!</h3>
                            <HightlightButton href={`${FRONTEND_URL}/order/confirmation/${order._id}`}>
                                Pay for order
                            </HightlightButton>
                        </div>
                    )}
                </div>
                <section className={styles.orderData}>
                    <SummaryData order={order} singleOrder={true} />
                </section>
            </div>
        </div>
    )
}

export default SingleOrderView
